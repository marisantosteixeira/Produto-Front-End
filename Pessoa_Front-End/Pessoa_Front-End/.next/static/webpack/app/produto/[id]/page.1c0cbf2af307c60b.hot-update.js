"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/produto/[id]/page",{

/***/ "(app-client)/./src/app/produto/[id]/page.js":
/*!**************************************!*\
  !*** ./src/app/produto/[id]/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nasync function Produto(param) {\n    let { params  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = {\n        id: parseInt(params.id)\n    };\n    const idJson = JSON.stringify(id);\n    const req = await fetch(\"http://localhost:3003/produto\", {\n        method: \"POST\",\n        cache: \"no-cache\",\n        headers: {\n            \"content-type\": \"application/json\"\n        },\n        body: idJson\n    });\n    const produto = await req.json();\n    const remover = ()=>{\n        console.log(idJson);\n        try {\n            fetch(\"http://localhost:3003/produtos\", {\n                method: \"DELETE\",\n                headers: {\n                    \"content-type\": \"application/json\"\n                },\n                body: idJson\n            });\n            router.push(\"/\");\n        } catch (error) {\n            alert(\"Ocorreu um erro\" + error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-4 border-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: produto.titulo\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: produto.data_cadastro\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: produto.preco\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: produto.descricao\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                scr: produto.imagem\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: (e)=>e.preventDefault(remover()),\n                children: \"REMOVER\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Produto-Front-End\\\\Pessoa_Front-End\\\\Pessoa_Front-End\\\\src\\\\app\\\\produto\\\\[id]\\\\page.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(Produto, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Produto;\nvar _c;\n$RefreshReg$(_c, \"Produto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9kdXRvL1tpZF0vcGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHNEM7QUFJN0IsZUFBZUMsUUFBUSxLQUFVLEVBQUU7UUFBWixFQUFFQyxPQUFNLEVBQUUsR0FBVjs7SUFDbEMsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLE1BQU1JLEtBQUs7UUFBRUEsSUFBSUMsU0FBU0gsT0FBT0UsRUFBRTtJQUFFO0lBR3JDLE1BQU1FLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQ0o7SUFHOUIsTUFBTUssTUFBTSxNQUFNQyxNQUFNLGlDQUFpQztRQUNyREMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1SO0lBQ1Y7SUFDQSxNQUFNUyxVQUFVLE1BQU1OLElBQUlPLElBQUk7SUFLOUIsTUFBTUMsVUFBVSxJQUFNO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNiO1FBQ1osSUFBSTtZQUNBSSxNQUFNLGtDQUFrQztnQkFDcENDLFFBQVE7Z0JBQ1JFLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtnQkFDOUNDLE1BQU1SO1lBQ1Y7WUFDQUgsT0FBT2lCLElBQUksQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkMsTUFBTSxvQkFBb0JEO1FBQzlCO0lBQ0o7SUFDQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFHVixRQUFRVyxNQUFNOzs7Ozs7MEJBQ2xCLDhEQUFDRDswQkFBR1YsUUFBUVksYUFBYTs7Ozs7OzBCQUN6Qiw4REFBQ0Y7MEJBQUdWLFFBQVFhLEtBQUs7Ozs7OzswQkFDakIsOERBQUNIOzBCQUFHVixRQUFRYyxTQUFTOzs7Ozs7MEJBQ3JCLDhEQUFDQztnQkFBSUMsS0FBS2hCLFFBQVFpQixNQUFNOzs7Ozs7MEJBQ3hCLDhEQUFDQztnQkFBT0MsU0FBU0MsQ0FBQUEsSUFBS0EsRUFBRUMsY0FBYyxDQUFDbkI7MEJBQVk7Ozs7Ozs7Ozs7OztBQU8vRCxDQUFDO0dBOUM2QmhCOztRQUNYRCxzREFBU0E7OztLQURFQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1dG8vW2lkXS9wYWdlLmpzPzg1ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBQcm9kdXRvKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaWQgPSB7IGlkOiBwYXJzZUludChwYXJhbXMuaWQpIH1cclxuXHJcblxyXG4gICAgY29uc3QgaWRKc29uID0gSlNPTi5zdHJpbmdpZnkoaWQpO1xyXG5cclxuXHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMy9wcm9kdXRvXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGNhY2hlOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogaWRKc29uXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcHJvZHV0byA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZEpzb24pXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDMvcHJvZHV0b3NcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBpZEpzb25cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiT2NvcnJldSB1bSBlcnJvXCIgKyBlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdXRvLnRpdHVsb308L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdXRvLmRhdGFfY2FkYXN0cm99PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHV0by5wcmVjb308L3A+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdXRvLmRlc2NyaWNhb308L3A+XHJcbiAgICAgICAgICAgIDxpbWcgc2NyPXtwcm9kdXRvLmltYWdlbX0vPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdChyZW1vdmVyKCkpfT5SRU1PVkVSPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQcm9kdXRvIiwicGFyYW1zIiwicm91dGVyIiwiaWQiLCJwYXJzZUludCIsImlkSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXEiLCJmZXRjaCIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsImJvZHkiLCJwcm9kdXRvIiwianNvbiIsInJlbW92ZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidGl0dWxvIiwiZGF0YV9jYWRhc3RybyIsInByZWNvIiwiZGVzY3JpY2FvIiwiaW1nIiwic2NyIiwiaW1hZ2VtIiwiYnV0dG9uIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/produto/[id]/page.js\n"));

/***/ })

});