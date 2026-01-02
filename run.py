#!/opt/homebrew/bin/python3
import subprocess

RED    = "\033[1;31m"
GREEN  = "\033[1;32m"
YELLOW = "\033[1;33m"
END    = "\033[0m"

def print_color(string, color):
    print(f"{color}{string}{END}")

def run_cmd(cmd, flag=None):
    cmd_str = " ".join(cmd)
    print_color(f"[CMD] {cmd_str}", YELLOW)
    res = subprocess.run(cmd, capture_output=True, text=True)
    print(res.stdout)
    if res.stderr:
        print_color(f"Error:", RED)
        print(res.stderr)

    if flag == "compile":
        ret_code = int(res.returncode)
        if ret_code == 0:
            print_color(f"Compiled successfully with exit code 0", GREEN)
        elif ret_code == 1:
            print_color(f"Compilation failed with exit code 1", RED)

flags = [
    "--target=wasm32",
    "-O3",
    "-flto",
    "-nostdlib",
    "-Wl,--no-entry",
    "-Wl,--export-all",
    "-Wl,--lto-O3",
    "-Wl,--allow-undefined",
    "-Wl,--import-memory",
    "-Wl,--export-memory",
    "-Wl,--export-dynamic"
]

run_cmd(["cc", "-o", "try.wasm", "try.c", *flags], "compile")
