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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nasync function Home() {\n    const req = await fetch(\"http://localhost:3003/produtos\", {\n        cache: \"no-cache\"\n    });\n    const produtos = await req.json();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainp),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/cadastro\",\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().voltarp),\n                    children: \" CADASTRAR \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                produtos.map((produto)=>{\n                    let date = new Date(produtos.data_cadastro);\n                    let dataCorreta = date.getDate() + \"/\" + (date.getMonth() + 1) + \"/\" + date.getFullYear();\n                    return;\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtos),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                    children: [\n                                        \" \",\n                                        produto.titulo\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                    children: dataCorreta\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                    children: [\n                                        \" Pre\\xe7o: R$ \",\n                                        produto.preco\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().pproduto),\n                                    children: [\n                                        \"Descri\\xe7\\xe3o: \",\n                                        produto.descricao\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgs),\n                                    src: produto.imagem\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/produto/\".concat(produto.codigo),\n                                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().verm),\n                                    children: \"Ver mais\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    }, produto.codigo, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\page.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNkI7QUFDUztBQUV2QixlQUFlRSxPQUFPO0lBRW5DLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxrQ0FBa0M7UUFDeERDLE9BQU87SUFDVDtJQUNBLE1BQU1DLFdBQVcsTUFBTUgsSUFBSUksSUFBSTtJQUUvQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFFYiw0RUFBQ0M7WUFBS0QsV0FBV1IsK0RBQVk7OzhCQUMzQiw4REFBQ1c7Ozs7OzhCQUNELDhEQUFDWixrREFBSUE7b0JBQUNhLE1BQUs7b0JBQVlKLFdBQVdSLGlFQUFjOzhCQUFHOzs7Ozs7OEJBQ25ELDhEQUFDVzs7Ozs7Z0JBQ0FOLFNBQVNTLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBVztvQkFFdkIsSUFBSUMsT0FBTSxJQUFJQyxLQUFNWixTQUFTYSxhQUFhO29CQUMxQyxJQUFJQyxjQUFjSCxLQUFLSSxPQUFPLEtBQUssTUFBT0osQ0FBQUEsS0FBS0ssUUFBUSxLQUFHLEtBQUssTUFBTUwsS0FBS00sV0FBVztvQkFDckY7a0NBRUEsOERBQUNmO3dCQUFJQyxXQUFXUixrRUFBZTtrQ0FDN0IsNEVBQUNPOzs4Q0FDRCw4REFBQ2dCO29DQUFFZixXQUFXUixrRUFBZTs7d0NBQUU7d0NBQUVlLFFBQVFVLE1BQU07Ozs7Ozs7OENBQy9DLDhEQUFDZDs7Ozs7OENBQ0QsOERBQUNZO29DQUFFZixXQUFXUixrRUFBZTs4Q0FBR21COzs7Ozs7OENBQ2hDLDhEQUFDUjs7Ozs7OENBQ0QsOERBQUNZO29DQUFFZixXQUFXUixrRUFBZTs7d0NBQUU7d0NBQVllLFFBQVFXLEtBQUs7Ozs7Ozs7OENBQ3hELDhEQUFDZjs7Ozs7OENBQ0QsOERBQUNZO29DQUFFZixXQUFXUixrRUFBZTs7d0NBQUU7d0NBQVllLFFBQVFZLFNBQVM7Ozs7Ozs7OENBQzVELDhEQUFDaEI7Ozs7OzhDQUNELDhEQUFDaUI7b0NBQUlwQixXQUFXUiw4REFBVztvQ0FBRThCLEtBQUtmLFFBQVFnQixNQUFNOzs7Ozs7OENBRWhELDhEQUFDaEMsa0RBQUlBO29DQUFDYSxNQUFNLFlBQTJCLE9BQWZHLFFBQVFpQixNQUFNO29DQUFJeEIsV0FBV1IsOERBQVc7OENBQUc7Ozs7Ozs7Ozs7Ozt1QkFaL0JlLFFBQVFpQixNQUFNOzs7OztnQkFnQnREOzs7Ozs7Ozs7Ozs7QUFJUixDQUFDO0tBeEM2Qi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qcz8yYjNkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9wcm9kdXRvc1wiLCB7XHJcbiAgICBjYWNoZTogXCJuby1jYWNoZVwiXHJcbiAgfSk7XHJcbiAgY29uc3QgcHJvZHV0b3MgPSBhd2FpdCByZXEuanNvbigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2JvZHknPlxyXG4gICAgICBcclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbnB9PlxyXG4gICAgICAgIDxicj48L2JyPiBcclxuICAgICAgICA8TGluayBocmVmPVwiL2NhZGFzdHJvXCIgY2xhc3NOYW1lPXtzdHlsZXMudm9sdGFycH0gPiBDQURBU1RSQVIgPC9MaW5rPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIHtwcm9kdXRvcy5tYXAocHJvZHV0byA9PiB7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGU9IG5ldyBEYXRlIChwcm9kdXRvcy5kYXRhX2NhZGFzdHJvKTtcclxuICAgICAgICAgIGxldCBkYXRhQ29ycmV0YSA9IGRhdGUuZ2V0RGF0ZSgpICsgJy8nICsgKGRhdGUuZ2V0TW9udGgoKSsxKSArICcvJyArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zfSBrZXk9e3Byb2R1dG8uY29kaWdvfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucHByb2R1dG99PiB7cHJvZHV0by50aXR1bG99PC9hPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucHByb2R1dG99PntkYXRhQ29ycmV0YX08L2E+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5wcHJvZHV0b30+IFByZcOnbzogUiQge3Byb2R1dG8ucHJlY299PC9hPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucHByb2R1dG99PkRlc2NyacOnw6NvOiB7cHJvZHV0by5kZXNjcmljYW99PC9hPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWdzfSBzcmM9e3Byb2R1dG8uaW1hZ2VtfS8+XHJcbiAgICBcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdXRvLyR7cHJvZHV0by5jb2RpZ299YH0gY2xhc3NOYW1lPXtzdHlsZXMudmVybX0gPlZlciBtYWlzPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSl9IFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJzdHlsZXMiLCJIb21lIiwicmVxIiwiZmV0Y2giLCJjYWNoZSIsInByb2R1dG9zIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJtYWlucCIsImJyIiwiaHJlZiIsInZvbHRhcnAiLCJtYXAiLCJwcm9kdXRvIiwiZGF0ZSIsIkRhdGUiLCJkYXRhX2NhZGFzdHJvIiwiZGF0YUNvcnJldGEiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImEiLCJwcHJvZHV0byIsInRpdHVsbyIsInByZWNvIiwiZGVzY3JpY2FvIiwiaW1nIiwiaW1ncyIsInNyYyIsImltYWdlbSIsImNvZGlnbyIsInZlcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});