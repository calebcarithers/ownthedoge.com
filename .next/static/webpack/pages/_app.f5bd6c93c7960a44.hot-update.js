"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DialogSize\": function() { return /* binding */ DialogSize; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-dialog */ \"./node_modules/@radix-ui/react-dialog/dist/index.module.js\");\n/* harmony import */ var _helpers_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/css */ \"./helpers/css.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar DialogSize;\n(function(DialogSize) {\n    DialogSize[\"sm\"] = \"sm\";\n    DialogSize[\"lg\"] = \"lg\";\n})(DialogSize || (DialogSize = {}));\nvar Modal = function(param) {\n    var children = param.children, isOpen = param.isOpen, title = param.title, description = param.description, onChange = param.onChange, _size = param.size, size = _size === void 0 ? DialogSize.sm : _size;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Root, {\n        open: isOpen,\n        onOpenChange: function(value) {\n            return onChange && onChange(value);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Portal, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Overlay, {\n                    className: (0,_helpers_css__WEBPACK_IMPORTED_MODULE_1__.css)(\"fixed\", \"bg-black\", \"inset-0\", \"opacity-80\", \"z-50\")\n                }, void 0, false, {\n                    fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Content, {\n                    style: {\n                        transform: \"translate(-50%, -50%)\"\n                    },\n                    className: (0,_helpers_css__WEBPACK_IMPORTED_MODULE_1__.css)(\"bg-pixels-yellow-100\", \"rounded-sm\", \"top-1/2\", \"left-1/2\", \"fixed\", \"w-full\", \"p-10\", \"text-black\", \"border-2\", \"border-solid\", \"border-black\", \"max-w-3xl\", \"z-50\", \"max-h-100\", {\n                        \"md:w-7/12\": size === DialogSize.sm,\n                        \"md:w-9/12\": size === DialogSize.lg\n                    }),\n                    children: [\n                        onChange && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Close, {\n                            style: {\n                                right: \"5px\",\n                                top: \"5px\"\n                            },\n                            className: (0,_helpers_css__WEBPACK_IMPORTED_MODULE_1__.css)(\"absolute\", \"text-black\", \"hover:text-doge-orange\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdClose, {\n                                size: \"25px\"\n                            }, void 0, false, {\n                                fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 30\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Title, {\n                            className: (0,_helpers_css__WEBPACK_IMPORTED_MODULE_1__.css)(\"text-black\", \"text-3xl\", \"font-bold\", \"text-center\", \"mb-12\"),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_3__.Description, {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, _this),\n                        children\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/calebcarithers/Documents/work/dogenft/dogenft.com/components/Modal/Modal.tsx\",\n        lineNumber: 27,\n        columnNumber: 12\n    }, _this);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsL01vZGFsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFzRDtBQUNoQjtBQUNTO0FBQ1I7SUFFaEMsVUFHTjtVQUhXSSxVQUFVO0lBQVZBLFVBQVUsQ0FDbEJDLElBQUUsSUFBRkEsSUFBRTtJQURNRCxVQUFVLENBRWxCRSxJQUFFLElBQUZBLElBQUU7R0FGTUYsVUFBVSxLQUFWQSxVQUFVO0FBYXRCLElBQU1HLEtBQUssR0FBNkMsZ0JBT087UUFORkMsUUFBUSxTQUFSQSxRQUFRLEVBQ1JDLE1BQU0sU0FBTkEsTUFBTSxFQUNOQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsV0FBVyxTQUFYQSxXQUFXLEVBQ1hDLFFBQVEsU0FBUkEsUUFBUSxnQkFDUkMsSUFBSSxFQUFKQSxJQUFJLHNCQUFHVCxVQUFVLENBQUNDLEVBQUU7SUFFN0UscUJBQU8sOERBQUNMLHdEQUFnQjtRQUFDZSxJQUFJLEVBQUVOLE1BQU07UUFBRU8sWUFBWSxFQUFFLFNBQUNDLEtBQUs7bUJBQUtMLFFBQVEsSUFBSUEsUUFBUSxDQUFDSyxLQUFLLENBQUM7U0FBQTtrQkFDdkYsNEVBQUNqQiwwREFBa0I7OzhCQUNmLDhEQUFDQSwyREFBbUI7b0JBQUNvQixTQUFTLEVBQUVuQixpREFBRyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUM7Ozs7O3lCQUFHOzhCQUM1Riw4REFBQ0QsMkRBQW1CO29CQUNoQnNCLEtBQUssRUFBRTt3QkFBQ0MsU0FBUyxFQUFFLHVCQUF1QjtxQkFBQztvQkFDM0NILFNBQVMsRUFBRW5CLGlEQUFHLENBQUMsc0JBQXNCLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUMvRyxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTt3QkFDMUUsV0FBVyxFQUFFWSxJQUFJLEtBQUtULFVBQVUsQ0FBQ0MsRUFBRTt3QkFDbkMsV0FBVyxFQUFFUSxJQUFJLEtBQUtULFVBQVUsQ0FBQ0UsRUFBRTtxQkFDdEMsQ0FBQzs7d0JBQ0xNLFFBQVEsa0JBQUksOERBQUNaLHlEQUFpQjs0QkFBQ3NCLEtBQUssRUFBRTtnQ0FBQ0csS0FBSyxFQUFFLEtBQUs7Z0NBQUVDLEdBQUcsRUFBRSxLQUFLOzZCQUFDOzRCQUNqQ04sU0FBUyxFQUFFbkIsaURBQUcsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLHdCQUF3QixDQUFDO3NDQUNoRyw0RUFBQ0UsbURBQU87Z0NBQUNVLElBQUksRUFBRSxNQUFNOzs7OztxQ0FBRzs7Ozs7aUNBQ047c0NBQ3BCLDhEQUFDYix5REFBaUI7NEJBQUNvQixTQUFTLEVBQUVuQixpREFBRyxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxPQUFPLENBQUM7c0NBQzNGUyxLQUFLOzs7OztpQ0FDVTtzQ0FDcEIsOERBQUNWLCtEQUF1QjtzQ0FBRVcsV0FBVzs7Ozs7aUNBQTJCO3dCQUMvREgsUUFBUTs7Ozs7O3lCQUNTOzs7Ozs7aUJBQ0w7Ozs7O2FBQ047Q0FDdEI7QUE5QktELEtBQUFBLEtBQUs7QUFnQ1gsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC50c3g/NjgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSYWRpeERpYWxvZyBmcm9tICdAcmFkaXgtdWkvcmVhY3QtZGlhbG9nJztcbmltcG9ydCB7Y3NzfSBmcm9tIFwiLi4vLi4vaGVscGVycy9jc3NcIjtcbmltcG9ydCBSZWFjdCwge1Byb3BzV2l0aENoaWxkcmVufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TWRDbG9zZX0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5cbmV4cG9ydCBlbnVtIERpYWxvZ1NpemUge1xuICAgIHNtID0gXCJzbVwiLFxuICAgIGxnID0gXCJsZ1wiXG59XG5cbmludGVyZmFjZSBEaWFsb2dQcm9wcyB7XG4gICAgaXNPcGVuPzogYm9vbGVhbjtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBvbkNoYW5nZT86ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgICBzaXplPzogRGlhbG9nU2l6ZTtcbn1cblxuY29uc3QgTW9kYWw6IFJlYWN0LkZDPFByb3BzV2l0aENoaWxkcmVuPERpYWxvZ1Byb3BzPj4gPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gRGlhbG9nU2l6ZS5zbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICAgIHJldHVybiA8UmFkaXhEaWFsb2cuUm9vdCBvcGVuPXtpc09wZW59IG9uT3BlbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSAmJiBvbkNoYW5nZSh2YWx1ZSl9PlxuICAgICAgICA8UmFkaXhEaWFsb2cuUG9ydGFsPlxuICAgICAgICAgICAgPFJhZGl4RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPXtjc3MoXCJmaXhlZFwiLCBcImJnLWJsYWNrXCIsIFwiaW5zZXQtMFwiLCBcIm9wYWNpdHktODBcIiwgXCJ6LTUwXCIpfS8+XG4gICAgICAgICAgICA8UmFkaXhEaWFsb2cuQ29udGVudFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwifX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NzcyhcImJnLXBpeGVscy15ZWxsb3ctMTAwXCIsIFwicm91bmRlZC1zbVwiLCBcInRvcC0xLzJcIiwgXCJsZWZ0LTEvMlwiLCBcImZpeGVkXCIsIFwidy1mdWxsXCIsIFwicC0xMFwiLCBcInRleHQtYmxhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItMlwiLCBcImJvcmRlci1zb2xpZFwiLCBcImJvcmRlci1ibGFja1wiLCBcIm1heC13LTN4bFwiLCBcInotNTBcIiwgXCJtYXgtaC0xMDBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZDp3LTcvMTJcIjogc2l6ZSA9PT0gRGlhbG9nU2l6ZS5zbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWQ6dy05LzEyXCI6IHNpemUgPT09IERpYWxvZ1NpemUubGdcbiAgICAgICAgICAgICAgICAgICAgfSl9PlxuICAgICAgICAgICAgICAgIHtvbkNoYW5nZSAmJiA8UmFkaXhEaWFsb2cuQ2xvc2Ugc3R5bGU9e3tyaWdodDogXCI1cHhcIiwgdG9wOiBcIjVweFwifX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzKFwiYWJzb2x1dGVcIiwgXCJ0ZXh0LWJsYWNrXCIsIFwiaG92ZXI6dGV4dC1kb2dlLW9yYW5nZVwiKX0+XG4gICAgICAgICAgICAgICAgICA8TWRDbG9zZSBzaXplPXtcIjI1cHhcIn0vPlxuICAgICAgICAgICAgICAgIDwvUmFkaXhEaWFsb2cuQ2xvc2U+fVxuICAgICAgICAgICAgICAgIDxSYWRpeERpYWxvZy5UaXRsZSBjbGFzc05hbWU9e2NzcyhcInRleHQtYmxhY2tcIiwgXCJ0ZXh0LTN4bFwiLCBcImZvbnQtYm9sZFwiLCBcInRleHQtY2VudGVyXCIsIFwibWItMTJcIil9PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgPC9SYWRpeERpYWxvZy5UaXRsZT5cbiAgICAgICAgICAgICAgICA8UmFkaXhEaWFsb2cuRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUmFkaXhEaWFsb2cuRGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9SYWRpeERpYWxvZy5Db250ZW50PlxuICAgICAgICA8L1JhZGl4RGlhbG9nLlBvcnRhbD5cbiAgICA8L1JhZGl4RGlhbG9nLlJvb3Q+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iXSwibmFtZXMiOlsiUmFkaXhEaWFsb2ciLCJjc3MiLCJSZWFjdCIsIk1kQ2xvc2UiLCJEaWFsb2dTaXplIiwic20iLCJsZyIsIk1vZGFsIiwiY2hpbGRyZW4iLCJpc09wZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib25DaGFuZ2UiLCJzaXplIiwiUm9vdCIsIm9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJ2YWx1ZSIsIlBvcnRhbCIsIk92ZXJsYXkiLCJjbGFzc05hbWUiLCJDb250ZW50Iiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJDbG9zZSIsInJpZ2h0IiwidG9wIiwiVGl0bGUiLCJEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal/Modal.tsx\n");

/***/ })

});