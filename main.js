/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const draggables = document.querySelectorAll('.draggable');\r\nconst containers = document.querySelectorAll('.container');\r\n\r\ndraggables.forEach(draggable => {\r\n  draggable.addEventListener('dragstart', () => {\r\n    draggable.classList.add('dragging');\r\n  })\r\n\r\n  draggable.addEventListener('dragend', () => {\r\n    draggable.classList.remove('dragging');\r\n  })\r\n})\r\n\r\ncontainers.forEach(container => {\r\n  container.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n    const afterElement = getDragAfterElement(container, e.clientY);\r\n    const draggable = document.querySelector('.dragging');\r\n    if(afterElement == null) {\r\n      container.appendChild(draggable); \r\n    } else {\r\n      container.insertBefore(draggable, afterElement)\r\n    }\r\n  })\r\n})\r\n\r\nfunction getDragAfterElement(container, y) {\r\n  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];\r\n  return draggableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y -box.top - box.height / 2;\r\n    if(offset < 0 && offset > closest.offset){\r\n      return {offset: offset, element: child};\r\n    }\r\n    else {\r\n      return closest;\r\n    }\r\n  }, {offset: Number.NEGATIVE_INFINITY}).element\r\n}\n\n//# sourceURL=webpack://sortable-and-dragable/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;