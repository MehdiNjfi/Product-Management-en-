/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: getProducts, saveProducts, lastUpdated, renderProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveProducts\", function() { return saveProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lastUpdated\", function() { return lastUpdated; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProduct\", function() { return renderProduct; });\n//get products from local storage\nconst getProducts = () => {\n    let productJson = localStorage.getItem(\"products\")\n    try {\n        return productJson !== null ? JSON.parse(productJson) : []\n    } catch (error) {\n        return []\n    }\n}\n\n//save products in local storage\nconst saveProducts = (products) => localStorage.setItem(\"products\", JSON.stringify(products))\n\n//remove product button \nconst removeProduct = (id) => {\n    let productIndex = products.findIndex(item => {\n        return item.id === id\n    })\n    if(productIndex > -1){\n        products.splice(productIndex, 1)\n    }\n}\n\n//sort products\nlet sortProduct = (products, sortBy) => {\n    return products.sort((a,b) => {\n        if(sortBy === \"byUpdated\"){\n            if(a.updated > b.updated){\n                return -1\n            } else if(a.updated < b.updated){\n                return 1\n            } else {\n                return 0\n            }\n        } else if(sortBy === \"byCreated\"){\n            if(a.created> b.created){\n                return -1\n            } else if(a.created < b.created){\n                return 1\n            } else {\n                return 0\n            }\n        } else {\n            return []\n        }\n    })\n}\n\n//last updated \nconst lastUpdated = (time) => {\n    return moment(time).fromNow()\n}\n\n//craete products table\nconst createElement = (product) => {\n    let trProduct = document.createElement(\"tr\")\n    trProduct.setAttribute(\"id\", product.id)\n    trProduct.setAttribute(\"class\", \"product\")\n\n    let tdCheckbox = document.createElement(\"td\")\n    let inputCheckbox = document.createElement(\"input\")\n    let labelCheckbox = document.createElement(\"label\")\n    let tdTitle = document.createElement(\"td\")\n    let aTitle = document.createElement(\"a\")\n    let tdPrice = document.createElement(\"td\")\n    let tdCreated = document.createElement(\"td\")\n    let tdUpdated = document.createElement(\"td\")\n    let tdRemoveButton = document.createElement(\"td\")\n    let removeButton = document.createElement(\"button\")\n\n    // ckeckBox\n    labelCheckbox.textContent = \"unavailable\"\n    inputCheckbox.setAttribute(\"type\", \"checkbox\")\n    inputCheckbox.setAttribute(\"id\", product.id.slice(0, 4))\n    labelCheckbox.setAttribute(\"for\", product.id.slice(0, 4))\n    inputCheckbox.addEventListener(\"change\", (e) => {\n        if(e.target.checked){\n            product.exist = false\n            e.target.checked = \"0\"\n        } else {\n            product.exist = true\n        }\n        saveProducts(products)\n    })\n    tdCheckbox.appendChild(inputCheckbox)\n    tdCheckbox.appendChild(labelCheckbox)\n\n    // Title\n    aTitle.textContent = product.title\n    aTitle.setAttribute(\"href\", `./edit-product.html#${product.id}`)\n    tdTitle.appendChild(aTitle)\n\n    // Price\n    tdPrice.textContent = `$${product.price}`\n    // Created\n    tdCreated.textContent = moment(product.created).fromNow()\n    \n    // Updated \n    tdUpdated.textContent = lastUpdated(product.updated)\n\n    // remove button\n    removeButton.textContent = \"remove\"\n    removeButton.setAttribute(\"id\", \"removeButton\")\n    removeButton.addEventListener(\"click\", () => {\n        removeProduct(product.id)\n        saveProducts(products)\n        renderProduct(products,filters)\n    })\n    tdRemoveButton.appendChild(removeButton)\n\n    trProduct.appendChild(tdCheckbox)\n    trProduct.appendChild(tdTitle)\n    trProduct.appendChild(tdPrice)\n    trProduct.appendChild(tdCreated)\n    trProduct.appendChild(tdUpdated)\n    trProduct.appendChild(tdRemoveButton)\n    return trProduct\n}\n\n//render products with filters(search, available product, sort products)\nconst renderProduct = (products, filters) => {\n    sortProduct(products, filters.sortBy)\n    let filtered = products.filter(item => item.title.toLowerCase().includes(filters.searchItems.toLowerCase()))\n    let a = document.querySelectorAll(\".product\")\n    a.forEach(item => {\n        item.remove()\n    })\n    filtered = filtered.filter((item) => {\n        if(filters.availableProduct){\n            return item.exist\n        } else {\n            return true\n        }\n    })\n    filtered.forEach(item => {\n        document.querySelector(\"tbody\").appendChild(createElement(item))\n    })\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n// products's array get products from local storage\nlet products = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"getProducts\"])()\n\n// filters for search input & sort prosucts and availableProduct checkbox\nlet filters = {\n    searchItems: \"\",\n    sortBy: \"\",\n    availableProduct: false\n}\n\n\n// render products \nObject(_functions__WEBPACK_IMPORTED_MODULE_0__[\"renderProduct\"])(products, filters)\ndocument.querySelector(\"#addProduct\").addEventListener(\"submit\", (e) => {\n    e.preventDefault()\n    let time = moment().valueOf()\n    products.push({\n        id: uuidv4(),\n        title: e.target.elements.productTitle.value,\n        price: Number(e.target.elements.productPrice.value),\n        exist: true,\n        created: time,\n        updated: time\n    })\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"renderProduct\"])(products, filters)\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"saveProducts\"])(products)\n    e.target.elements.productTitle.value = ''\n    e.target.elements.productPrice.value = ''\n})\n\n//search in products with input\ndocument.querySelector(\"#search\").addEventListener(\"input\", (e) => {\n    filters.searchItems = e.target.value\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"renderProduct\"])(products, filters)\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"saveProducts\"])(products)\n})\n\n//available products checkbox\ndocument.querySelector(\"#availableProducts\").addEventListener(\"change\", (e) => {\n    filters.availableProduct =e.target.checked\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"renderProduct\"])(products, filters)\n})\n\n//sort products by created & updated\ndocument.querySelector(\"#sortProduct\").addEventListener(\"change\", (e)=> {\n    filters.sortBy = e.target.value\n    Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"renderProduct\"])(products, filters)\n})\n\n//multi-page synchronization \nwindow.addEventListener(\"storage\", (e)=> {\n    if(e.key === \"products\"){\n        products = JSON.parse(e.newValue)\n        Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"renderProduct\"])(products,filters)\n        Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"saveProducts\"])(products)\n    }\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });