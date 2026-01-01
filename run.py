#!/opt/homebrew/bin/python3
import subprocess

RED    = "\033[1;31m"
GREEN  = "\033[1;32m"
YELLOW = "\033[1;33m"
END    = "\033[0m"

def run_cmd(cmd, flag=None):
    cmd_str = " ".join(cmd)
    print(f"{YELLOW}[CMD] {cmd_str}{END}")
    res = subprocess.run(cmd, capture_output=True, text=True)
    print(res.stdout)
    if res.stderr:
        print(f"{RED}Error:{END}")
        print(res.stderr)

    if flag == "compile":
        ret_code = int(res.returncode)
        if ret_code == 0:
            print(f"{GREEN}Compiled successfully with exit code 0{END}")
        elif ret_code == 1:
            print(f"{RED}Compilation failed with exit code 1{END}")

flags = [
    "--target=wasm32",
    "-O3",
    "-flto",
    "-nostdlib",
    "-Wl,--no-entry",
    "-Wl,--export-all",
    "-Wl,--lto-O3"
]

run_cmd(["cc", "-o", "try.wasm", "try.c", *flags], "compile")
