// ©2026 - BestWeb - BestMat - All rights reserved
console.log("NagapillaiyarSai");

export default class BestWeb {
    constructor(wasmFile) {
	this.wasmFile = wasmFile;
    }

    async init() {
	const bytes = await fetch(this.wasmFile)
	      .then(response => response.arrayBuffer())
	      .then(function(bytes) {
		  const module = new WebAssembly.Module(bytes);
		  const instance = new WebAssembly.Instance(module, {
		      env: {
			  print_num: function(x) {
			      console.log(x);
			  },
			  memory: new WebAssembly.Memory({ initial: 3 }),
			  setStyleAttribute: function(
			      element, elementSize, attribute, attributeSize, value, valueSize
			  ) {
			      const memory = new Int8Array(instance.exports.memory.buffer);
			      let   elementStr = "";
			      let   attributeStr = "";
			      let   valueStr = "";
			      for (let i = 0; i < elementSize; ++i) {
				  elementStr = elementStr + String.fromCharCode(memory[element + i]);
			      }
			      for (let i = 0; i < attributeSize; ++i) {
				  attributeStr = attributeStr + String.fromCharCode(memory[attribute + i]);
			      }
			      for (let i = 0; i < valueSize; ++i) {
				  valueStr = valueStr + String.fromCharCode(memory[value + i]);
			      }
			      console.log(`elementStr: ${elementStr}`);
			      console.log(`attributeStr: ${attributeStr}`);
			      console.log(`valueStr: ${valueStr}`);
			      document.querySelector(elementStr).style[attributeStr] = valueStr;
			  },
		      }
		  });
		  instance.exports.add(21, 27);
	      });
    }
}

const bestweb = new BestWeb("try.wasm");
await bestweb.init();
//console.log(`add(21, 27) = ${bestweb.functions.add(21, 27)}`);
