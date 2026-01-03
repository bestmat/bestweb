// ©2026 - BestWeb - BestMat - All rights reserved
console.log("NagapillaiyarSai");

function getString(mem, ind, len) {
    let str = "";
    for (let i = 0; i < len; ++i) {
	str = str + String.fromCharCode(mem[ind + i]);
    }
    return str;
}

export default class BestWeb {
    constructor(wasmFile) {
	this.wasmFile = wasmFile;
	this.functions = {};
    }

    async init() {
	let functions = {};
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
			  setStyleJS: function(
			      element, elementSize,
			      attribute, attributeSize,
			      value, valueSize
			  ) {
			      const memory = new Int8Array(instance.exports.memory.buffer);
			      let elementStr = getString(memory, element, elementSize);
			      let attributeStr = getString(memory, attribute, attributeSize);
			      let valueStr = getString(memory, value, valueSize);
			      document.querySelector(elementStr).style[attributeStr] = valueStr;
			  },
			  setPropertyJS: function(
			      element, elementSize,
			      property, propertySize,
			      value, valueSize
			  ) {
			      const memory = new Int8Array(instance.exports.memory.buffer);
			      let elementStr = getString(memory, element, elementSize);
			      let propertyStr = getString(memory, property, propertySize);
			      let valueStr = getString(memory, value, valueSize);
			      document.querySelector(elementStr)[propertyStr] = valueStr;
			  },
			  createElementJS: function(
			      element, elementSize,
			      selector, selectorSize,
			      content, contentSize,
			      parent, parentSize
			  ) {
			      const memory = new Int8Array(instance.exports.memory.buffer);
			      let elementStr = getString(memory, element, elementSize);
			      let selectorStr = getString(memory, selector, selectorSize);
			      let contentStr = getString(memory, content, contentSize);
			      let parentStr = getString(memory, parent, parentSize);
			      const htmlElement = document.createElement(elementStr);
			      if (selectorStr[0] === '.') {
				  htmlElement.className = selectorStr.slice(1);
			      } else if (selectorStr[0] === '#') {
				  htmlElement.id = selectorStr.slice(1);
			      }
			      if (contentSize !== 0) {
				  htmlElement.innerText = contentStr;
			      }
			      if (parentSize === 0) {
				  document.body.appendChild(htmlElement);
			      } else {
				  document.querySelector(parentStr).appendChild(htmlElement);
			      }
			  }
		      }
		  });
		  instance.exports._start();
		  functions = instance.exports;
	      });
	this.functions = functions;
    }
}

const bestweb = new BestWeb("try.wasm");
await bestweb.init();
console.log(`add(21, 27) = ${bestweb.functions.add(21, 27)}`);
