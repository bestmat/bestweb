// ©2026 - BestWeb - BestMat - All rights reserved
console.log("NagapillaiyarSai");

export default class BestWeb {
    constructor(wasmFile) {
	this.wasmFile = wasmFile;
    }

    async init() {
	await WebAssembly.instantiateStreaming(fetch(this.wasmFile))
	    .then(module => {
		this.functions = module.instance.exports;
	    });
    }
}

const bestweb = new BestWeb("try.wasm");
await bestweb.init();
console.log(`add(21, 27) = ${bestweb.functions.add(21, 27)}`);
