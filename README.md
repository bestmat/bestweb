<div align="center">
  <image src="assets/BestWeb.jpg" alt="BestWeb Logo" width=300 align="left" hspace="20">
    <div id="toc">
      <ul style="list-style: none">
        <summary>
          <h1>BestWeb - BestMat</h1>
        </summary>
        <span>BestWeb is a JavaScript Library to manipulate the Document Object Model (DOM) from C using WebAssembly (WASM) without any libraries (like Emscripten).</span>
      </ul>
    </div>
    <br clear="left" />
</div>
    
Though the example provided in the repository (`try.c`) is a C file, any programming language that can be compiled to WASM can be used if the proper functions are implemented. Please note that the library/project is not fully developed.

## Build and Run
To view the result of the DOM Manipulation, please visit [BestWeb Page](https://bestmat.github.io/BestWeb).

This repository has been written in JavaScript, Python3 and C99 and requires a [**web browser**](https://en.wikipedia.org/wiki/Web_browser), [**Python interpreter**](https://www.python.org/) and a **C compiler**, preferably [**clang**](https://clang.llvm.org/).
It is preferable to build it on an **UNIX** or [**POSIX-compliant**](https://en.wikipedia.org/wiki/POSIX) system (macOS, GNU/Linux or WSL2).

### Required tools
1. Git
2. C99 Compiler (clang)
3. Web Browser with [**JavaScript enabled**](https://support.google.com/adsense/answer/12654?hl=en)
4. Python3 Interpreter
5. Terminal Emulator

To run and install the repository locally, clone the Git repository, navigate to the local cloned repository directory.

```shell
$ git clone github.com/BestMat/BestWeb
$ cd BestWeb
```

To change the contents on the website, edit the C file (`try.c`). Example:
```c
void _start() {
    createElement("h1", ".c", "Hello World from C!", "body");
    // createElement(const char *element, const char *selector, const char *content, const char *parent)
    setStyle(".c", "color", "dodgerblue");
    // setStyle(const char *element, const char *attribute, const char *style)
}
```

To compile `try.c` into `try.wasm` (WebAssembly Binary File), run:
```shell
$ ./run.py
$ ls try.wasm # should print "try.wasm"
```

If it shows an error, it is _likely_ that the Python interpreter location is wrong, especially if it's not on macOS.
Change the first line of `run.py` from `#!/opt/homebrew/bin/python3` to the location of the Python3 interpreter.
To locate the interpreter run `which python3`.

If any error persists, please [raise an issue](https://github.com/BestMat/BestWeb/issues/new).

Open the `index.html` file in a web browser.

## References
1. [Compiling C to WebAssembly without Emscripten](https://surma.dev/things/c-to-webassembly/)
2. [MDN: WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly)
3. [Github (wasm): WebAssembly Binary Toolkit](https://github.com/webassembly/wabt)

## License & Contribution
This project is licensed under **[MIT License](https://github.com/BestMat/BestWeb/blob/main/LICENSE)**.
Goto `LICENSE` or click on the link for more information.

All contributions are welcome! Please fork the repository, make your changes and raise a [pull request](https://github.com/BestMat/BestWeb/pulls)!
