"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nasync function Home() {\n    const req = await fetch(\"http://localhost:3003/produtos\", {\n        cache: \"no-cache\"\n    });\n    const produtos = await req.json();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainp),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/cadastro\",\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().voltarp),\n                    children: \" CADASTRAR \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                produtos.map((produto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtos),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                children: produto.titulo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                children: produto.data_cadastro\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                children: produto.preco\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                children: produto.descricao\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgs),\n                                src: produto.imagem\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/produto/\".concat(produto.codigo),\n                                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().ver),\n                                children: \"ver mais\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, produto.codigo, true, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDUztBQUV2QixlQUFlRSxPQUFPO0lBRW5DLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxrQ0FBa0M7UUFDeERDLE9BQU87SUFDVDtJQUNBLE1BQU1DLFdBQVcsTUFBTUgsSUFBSUksSUFBSTtJQUUvQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0M7WUFBS0QsV0FBV1IsK0RBQVk7OzhCQUMzQiw4REFBQ1c7Ozs7OzhCQUNELDhEQUFDWixrREFBSUE7b0JBQUNhLE1BQUs7b0JBQVlKLFdBQVdSLGlFQUFjOzhCQUFHOzs7Ozs7OEJBQ25ELDhEQUFDVzs7Ozs7Z0JBQ0FOLFNBQVNTLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ1osOERBQUNSO3dCQUFJQyxXQUFXUixrRUFBZTs7MENBQzdCLDhEQUFDZ0I7Z0NBQUVSLFdBQVdSLGtFQUFlOzBDQUFHZSxRQUFRRyxNQUFNOzs7Ozs7MENBQzlDLDhEQUFDRjtnQ0FBRVIsV0FBV1Isa0VBQWU7MENBQUdlLFFBQVFJLGFBQWE7Ozs7OzswQ0FDckQsOERBQUNIO2dDQUFFUixXQUFXUixrRUFBZTswQ0FBR2UsUUFBUUssS0FBSzs7Ozs7OzBDQUM3Qyw4REFBQ0o7Z0NBQUVSLFdBQVdSLGtFQUFlOzBDQUFHZSxRQUFRTSxTQUFTOzs7Ozs7MENBQ2pELDhEQUFDQztnQ0FBSWQsV0FBV1IsOERBQVc7Z0NBQUV3QixLQUFLVCxRQUFRVSxNQUFNOzs7Ozs7MENBRWhELDhEQUFDMUIsa0RBQUlBO2dDQUFDYSxNQUFNLFlBQTJCLE9BQWZHLFFBQVFXLE1BQU07Z0NBQUlsQixXQUFXUiw2REFBVTswQ0FBRzs7Ozs7Ozt1QkFQOUJlLFFBQVFXLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFlOUQsQ0FBQztLQTlCNkJ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDMvcHJvZHV0b3NcIiwge1xyXG4gICAgY2FjaGU6IFwibm8tY2FjaGVcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IHByb2R1dG9zID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cclxuICAgICAgXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW5wfT5cclxuICAgICAgICA8YnI+PC9icj4gXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jYWRhc3Ryb1wiIGNsYXNzTmFtZT17c3R5bGVzLnZvbHRhcnB9ID4gQ0FEQVNUUkFSIDwvTGluaz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICB7cHJvZHV0b3MubWFwKHByb2R1dG8gPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvc30ga2V5PXtwcm9kdXRvLmNvZGlnb30+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBwcm9kdXRvfT57cHJvZHV0by50aXR1bG99PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcHJvZHV0b30+e3Byb2R1dG8uZGF0YV9jYWRhc3Ryb308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBwcm9kdXRvfT57cHJvZHV0by5wcmVjb308L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBwcm9kdXRvfT57cHJvZHV0by5kZXNjcmljYW99PC9wPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ3N9IHNyYz17cHJvZHV0by5pbWFnZW19Lz5cclxuICAgIFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1dG8vJHtwcm9kdXRvLmNvZGlnb31gfSBjbGFzc05hbWU9e3N0eWxlcy52ZXJ9ID52ZXIgbWFpczwvTGluaz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICkpfSBcclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwic3R5bGVzIiwiSG9tZSIsInJlcSIsImZldGNoIiwiY2FjaGUiLCJwcm9kdXRvcyIsImpzb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwibWFpbnAiLCJiciIsImhyZWYiLCJ2b2x0YXJwIiwibWFwIiwicHJvZHV0byIsInAiLCJwcHJvZHV0byIsInRpdHVsbyIsImRhdGFfY2FkYXN0cm8iLCJwcmVjbyIsImRlc2NyaWNhbyIsImltZyIsImltZ3MiLCJzcmMiLCJpbWFnZW0iLCJjb2RpZ28iLCJ2ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});