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

            if "type" in query and "notes" in query["type"]:
                notes = db.get("shared_notes", None)
                response = {"success": True, "notes": notes}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            if "type" in query and "bin" in query["type"]:
                bin_items = db.get("recycle_bin", [])
                response = {"success": True, "bin": bin_items}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            if "paper" in query:
                paper = query["paper"][0]
                paper_data = db.get(f"paper_data_{paper}", None)
                response = {"success": True, "data": paper_data}
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return

            response = {"success": False, "message": "Specify ?paper=paper1 or ?type=notes or ?type=bin"}
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

            if body.get("type") == "notes":
                db["shared_notes"] = body.get("notes")
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": "Notes saved to local DB"}).encode("utf-8"))
                return

            if body.get("type") == "bin":
                db["recycle_bin"] = body.get("bin", [])
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": "Recycle bin saved to local DB"}).encode("utf-8"))
                return

            if body.get("paperId") and "data" in body:
                db[f"paper_data_{body['paperId']}"] = body["data"]
                save_db(db)
                self.wfile.write(json.dumps({"success": True, "message": f"{body['paperId']} saved to local DB"}).encode("utf-8"))
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
