"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const createTodo = async ()=>{\n        const response = await fetch(\"http://localhost:3001/todos\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                title,\n                description,\n                userId: 1\n            })\n        });\n        const newTodo = await response.json();\n        setTodos([\n            ...todos,\n            newTodo\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create a New To-Do\"\n            }, void 0, false, {\n                fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Title\",\n                value: title,\n                onChange: (e)=>setTitle(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Description\",\n                value: description,\n                onChange: (e)=>setDescription(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: createTodo,\n                children: \"Create\"\n            }, void 0, false, {\n                fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"To-Do List\"\n            }, void 0, false, {\n                fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo.title\n                    }, todo.id, false, {\n                        fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jchee/Downloads/NextJSTemplate/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlDO0FBRWxCLFNBQVNDLE9BQU87SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ksYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNUSxhQUFhLFVBQVk7UUFDN0IsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLCtCQUErQjtZQUMxREMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CYjtnQkFDQUU7Z0JBQ0FZLFFBQVE7WUFDVjtRQUNGO1FBQ0EsTUFBTUMsVUFBVSxNQUFNUixTQUFTUyxJQUFJO1FBQ25DWCxTQUFTO2VBQUlEO1lBQU9XO1NBQVE7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsT0FBT3RCO2dCQUNQdUIsVUFBVSxDQUFDQyxJQUFNdkIsU0FBU3VCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUUxQyw4REFBQ0g7Z0JBQ0NDLE1BQUs7Z0JBQ0xDLGFBQVk7Z0JBQ1pDLE9BQU9wQjtnQkFDUHFCLFVBQVUsQ0FBQ0MsSUFBTXJCLGVBQWVxQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFaEQsOERBQUNJO2dCQUFPQyxTQUFTckI7MEJBQVk7Ozs7OzswQkFFN0IsOERBQUNzQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDRXpCLE1BQU0wQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDO2tDQUFrQkQsS0FBSy9CLEtBQUs7dUJBQXBCK0IsS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1leHByZXNzLXNxbGl0ZS1wcmlzbWEtY3J1ZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3RvZG9zXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB1c2VySWQ6IDEsIC8vIEhhcmRjb2RlZCB1c2VyIGZvciBleGFtcGxlIHB1cnBvc2VzXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBuZXdUb2RvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldFRvZG9zKFsuLi50b2RvcywgbmV3VG9kb10pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DcmVhdGUgYSBOZXcgVG8tRG88L2gxPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjcmVhdGVUb2RvfT5DcmVhdGU8L2J1dHRvbj5cblxuICAgICAgPGgyPlRvLURvIExpc3Q8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+e3RvZG8udGl0bGV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidG9kb3MiLCJzZXRUb2RvcyIsImNyZWF0ZVRvZG8iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcklkIiwibmV3VG9kbyIsImpzb24iLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();