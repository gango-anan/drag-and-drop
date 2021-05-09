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

eval("const draggables = document.querySelectorAll('.draggable');\nconst containers = document.querySelectorAll('.container');\n\nfunction getDragAfterElement(container, y) {\n  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];\n  return draggableElements.reduce((closest, child) => {\n    const box = child.getBoundingClientRect();\n    const offset = y - box.top - box.height / 2;\n    if (offset < 0 && offset > closest.offset) {\n      return { offset, element: child };\n    }\n\n    return closest;\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\n}\n\ndraggables.forEach((draggable) => {\n  draggable.addEventListener('dragstart', () => {\n    draggable.classList.add('dragging');\n  });\n\n  draggable.addEventListener('dragend', () => {\n    draggable.classList.remove('dragging');\n  });\n});\n\ncontainers.forEach((container) => {\n  container.addEventListener('dragover', (e) => {\n    e.preventDefault();\n    const afterElement = getDragAfterElement(container, e.clientY);\n    const draggable = document.querySelector('.dragging');\n    if (afterElement == null) {\n      container.appendChild(draggable);\n    } else {\n      container.insertBefore(draggable, afterElement);\n    }\n  });\n});\n\n\n//# sourceURL=webpack://sortable-and-dragable/./src/index.js?");

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