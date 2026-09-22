"""
Local Development Server for Notes World
Serves static assets (HTML, CSS, JS) and handles the /api/data endpoints locally.
"""
import sys
import os
import json
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 5500
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DB_FILE = os.path.join(DIRECTORY, ".local_db.json")

def load_db():
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def save_db(db):
    try:
        with open(DB_FILE, "w", encoding="utf-8") as f:
            json.dump(db, f, indent=2)
    except Exception as e:
        print(f"Error saving local db: {e}")

class NotesWorldHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.startswith("/api/data"):
            query = urllib.parse.parse_qs(parsed.query)
            db = load_db()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            if "type" in query and "tombstones" in query["type"]:
                tombstones = db.get("deleted_tombstones", [])
                response = {"success": True, "tombstones": tombstones}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            if "type" in query and "notes" in query["type"]:
                notes = db.get("shared_notes", None)
                response = {"success": True, "notes": notes}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            if "type" in query and "bin" in query["type"]:
                bin_items = db.get("recycle_bin", None)
                response = {"success": True, "bin": bin_items}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            if "type" in query and "syllabus" in query["type"]:
                syllabus_data = db.get("syllabus_progress", {"paper1": [], "paper2": []})
                response = {"success": True, "syllabus": syllabus_data}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            if "paper" in query:
                paper = query["paper"][0]
                paper_data = db.get(f"paper_data_{paper}", None)
                response = {"success": True, "data": paper_data}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            response = {"success": False, "message": "Specify ?paper=paper1, ?type=notes, ?type=bin, ?type=tombstones, or ?type=syllabus"}
            self.wfile.write(json.dumps(response).encode("utf-8"))
            return

        # Serve static files
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.startswith("/api/data"):
            content_length = int(self.headers.get("Content-Length", 0))
            body_bytes = self.rfile.read(content_length)
            try:
                body = json.loads(body_bytes.decode("utf-8"))
            except Exception:
                body = {}

            db = load_db()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()

            # Helper for tombstones
            tombstones = set(str(t).lower() for t in db.get("deleted_tombstones", []))
            for b in db.get("recycle_bin", []):
                if b.get("originalId"): tombstones.add(str(b["originalId"]).lower())
                if b.get("id"): tombstones.add(str(b["id"]).lower())
                if b.get("title"):
                    t_clean = str(b["title"]).strip().lower()
                    tombstones.add(t_clean)
                    p = b.get("paper", "paper1")
                    tombstones.add(f"{p}_{t_clean}")

            if body.get("type") == "tombstones":
                incoming = body.get("tombstones", [])
                merged = list(set(db.get("deleted_tombstones", []) + incoming))
                db["deleted_tombstones"] = merged
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": "Tombstones saved to local DB"}).encode("utf-8"))
                return

            if body.get("type") == "notes":
                notes = body.get("notes", [])
                if isinstance(notes, list):
                    notes = [n for n in notes if n and str(n.get("id", "")).lower() not in tombstones and str(n.get("title", "")).strip().lower() not in tombstones]
                db["shared_notes"] = notes
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": "Notes saved to local DB"}).encode("utf-8"))
                return

            if body.get("type") == "bin":
                bin_items = body.get("bin", [])
                db["recycle_bin"] = bin_items
                # Keep tombstones in sync
                existing_tombs = set(db.get("deleted_tombstones", []))
                for it in bin_items:
                    if it.get("originalId"): existing_tombs.add(str(it["originalId"]).lower())
                    if it.get("id"): existing_tombs.add(str(it["id"]).lower())
                    if it.get("title"):
                        clean_t = str(it["title"]).strip().lower()
                        existing_tombs.add(clean_t)
                        p = it.get("paper", "paper1")
                        existing_tombs.add(f"{p}_{clean_t}")
                db["deleted_tombstones"] = list(existing_tombs)
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": "Recycle bin saved to local DB"}).encode("utf-8"))
                return

            if body.get("type") == "syllabus":
                db["syllabus_progress"] = body.get("syllabus", {})
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": "Syllabus progress saved to local DB"}).encode("utf-8"))
                return

            if body.get("paperId") and "data" in body:
                paper_id = body["paperId"]
                data = body["data"]
                if data and isinstance(data.get("units"), list) and tombstones:
                    for u in data["units"]:
                        if "shortTricks" in u and isinstance(u["shortTricks"], list):
                            u["shortTricks"] = [t for t in u["shortTricks"] if t and str(t.get("id", "")).lower() not in tombstones and str(t.get("title", "")).strip().lower() not in tombstones and f"{paper_id}_{str(t.get('title', '')).strip().lower()}" not in tombstones]
                        if "theoryNotes" in u and isinstance(u["theoryNotes"], list):
                            u["theoryNotes"] = [t for t in u["theoryNotes"] if t and str(t.get("id", "")).lower() not in tombstones and str(t.get("title", "")).strip().lower() not in tombstones and f"{paper_id}_{str(t.get('title', '')).strip().lower()}" not in tombstones]
                db[f"paper_data_{paper_id}"] = data
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": f"{paper_id} saved to local DB"}).encode("utf-8"))
                return

            self.wfile.write(json.dumps({"success": False, "message": "Invalid payload"}).encode("utf-8"))
            return

        self.send_response(405)
        self.end_headers()

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

    def guess_type(self, path):
        # Ensure correct MIME type for ES modules and styles
        if path.endswith(".js"):
            return "application/javascript"
        if path.endswith(".css"):
            return "text/css"
        if path.endswith(".html"):
            return "text/html"
        return super().guess_type(path)

def run():
    port = PORT
    server_address = ("", port)
    try:
        httpd = HTTPServer(server_address, NotesWorldHandler)
    except OSError:
        # Fallback to port 3000 if 5500 is in use
        port = 3000
        server_address = ("", port)
        httpd = HTTPServer(server_address, NotesWorldHandler)

    url = f"http://localhost:{port}"
    print("=" * 60)
    print(f"Notes World Server is running at: {url}")
    print(f"Serving files from: {DIRECTORY}")
    print(f"Press Ctrl+C to stop the server")
    print("=" * 60)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()

if __name__ == "__main__":
    run()
