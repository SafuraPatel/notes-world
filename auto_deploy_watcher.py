import os
import sys
import time
import subprocess
from datetime import datetime

# Root directory
REPO_DIR = os.path.abspath(os.path.dirname(__file__))

IGNORED_DIRS = {'.git', '__pycache__', '.vscode', '.idea'}
IGNORED_EXTENSIONS = {'.pyc', '.log', '.tmp'}

def get_file_mtimes():
    """Returns a dict mapping relative file path to its mtime."""
    mtimes = {}
    for root, dirs, files in os.walk(REPO_DIR):
        dirs[:] = [d for d in dirs if d not in IGNORED_DIRS]
        for f in files:
            _, ext = os.path.splitext(f)
            if ext.lower() in IGNORED_EXTENSIONS:
                continue
            full_path = os.path.join(root, f)
            try:
                mtimes[full_path] = os.path.getmtime(full_path)
            except OSError:
                pass
    return mtimes

def has_git_changes():
    try:
        out = subprocess.check_output(['git', 'status', '--porcelain'], cwd=REPO_DIR).decode('utf-8', errors='ignore')
        return bool(out.strip())
    except Exception as e:
        print(f"Error checking git status: {e}")
        return False

def auto_commit_and_push():
    try:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] Detected local edits. Auto-deploying to Netlify...")
        subprocess.check_call(['git', 'add', '-A'], cwd=REPO_DIR)
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        subprocess.check_call(['git', 'commit', '-m', f"Auto-deploy: update saved at {timestamp}"], cwd=REPO_DIR)
        subprocess.check_call(['git', 'push', 'origin', 'main'], cwd=REPO_DIR)
        print(f"[{datetime.now().strftime('%H:%M:%S')}] Successfully pushed to GitHub main -> Netlify deployment live!")
    except subprocess.CalledProcessError as e:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] Deploy step error: {e}")
    except Exception as e:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] Unexpected error: {e}")

def main():
    print(f"==================================================")
    print(f"Notes World - Auto-Deploy Watcher Active")
    print(f"Monitoring directory: {REPO_DIR}")
    print(f"Any saved changes will be automatically pushed to Netlify!")
    print(f"==================================================")
    
    last_mtimes = get_file_mtimes()
    
    while True:
        try:
            time.sleep(3)
            current_mtimes = get_file_mtimes()
            if current_mtimes != last_mtimes:
                last_mtimes = current_mtimes
                # Debounce: wait 3 seconds to let user finish typing / multiple saves
                time.sleep(3)
                last_mtimes = get_file_mtimes()
                if has_git_changes():
                    auto_commit_and_push()
        except KeyboardInterrupt:
            print("\nAuto-deploy watcher stopped.")
            break
        except Exception as e:
            print(f"Watcher loop exception: {e}")
            time.sleep(5)

if __name__ == '__main__':
    main()
