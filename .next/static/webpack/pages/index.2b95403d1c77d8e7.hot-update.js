"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/ParaGabi/index.js":
/*!*********************************!*\
  !*** ./pages/ParaGabi/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParaGabi\": function() { return /* binding */ ParaGabi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ParaGabi() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            padding: 10,\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 6,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ParaGabi;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"Gabriele, vamos casar em breve?\"\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Header;\nfunction Form() {\n    _s();\n    const windowHeight = 1000;\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        louca: false,\n        clean: false,\n        internship: false,\n        love: false,\n        happy: false\n    });\n    function handleClick() {\n        setSelectedOption(true);\n    }\n    function handleSend() {\n        console.log(\"SEND -> \");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: windowHeight * 0.8,\n            backgroundColor: \"orange\"\n        },\n        children: selectedOption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SecoundStep, {}, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 37,\n            columnNumber: 27\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {\n            handleClick: handleClick\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 37,\n            columnNumber: 45\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"axU0BPHlppob7YtDpwG3FoW16zE=\");\n_c2 = Form;\nfunction FirstStep(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" SIM \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" CLARO \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_c3 = FirstStep;\nfunction SecoundStep() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Confirme todos os pontos que voc\\xea concorda\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou lavar toda a lou\\xe7a\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou limpar toda a casa\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou pro intec\\xe2mbio com voc\\xea\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou dar e receber muito amor\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou ser muito feliz\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Enviar resposta\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SecoundStep;\nfunction Checkbox(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: 5,\n            marginBottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Checkbox;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ParaGabi\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"FirstStep\");\n$RefreshReg$(_c4, \"SecoundStep\");\n$RefreshReg$(_c5, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QYXJhR2FiaS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRTFCLFNBQVNDLFdBQVc7SUFDdkIscUJBQ0EsOERBQUNDO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztZQUFRQyxRQUFRO1lBQVFDLFNBQVM7WUFBUUMsWUFBWTtZQUFVQyxnQkFBZ0I7WUFBVUMsU0FBUztZQUFJQyxlQUFlO1FBQVE7OzBCQUMxSSw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7Ozs7Ozs7Ozs7QUFHWixDQUFDO0tBUGVYO0FBU2hCLFNBQVNVLFNBQVM7SUFDZCxxQkFDSSw4REFBQ1Q7UUFBSUMsT0FBTztZQUFDQyxPQUFPO1FBQUc7a0JBQ25CLDRFQUFDUztZQUFHVixPQUFPO2dCQUFDVyxXQUFXO1lBQVE7c0JBQUc7Ozs7Ozs7Ozs7O0FBRzlDO01BTlNIO0FBUVQsU0FBU0MsT0FBTzs7SUFDWixNQUFNRyxlQUFnQjtJQUN0QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU0sQ0FBQ2tCLE1BQU1DLFFBQVEsR0FBR25CLCtDQUFRQSxDQUFDO1FBQUNvQixPQUFPLEtBQUs7UUFBRUMsT0FBTyxLQUFLO1FBQUVDLFlBQVksS0FBSztRQUFFQyxNQUFNLEtBQUs7UUFBRUMsT0FBTyxLQUFLO0lBQUE7SUFHMUcsU0FBU0MsY0FBYztRQUNuQlIsa0JBQWtCLElBQUk7SUFDMUI7SUFFQSxTQUFTUyxhQUFhO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFHQSxxQkFDQSw4REFBQzFCO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztZQUFRSSxnQkFBZ0I7WUFBVUQsWUFBWTtZQUFVRixRQUFRVSxlQUFlO1lBQUtjLGlCQUFpQjtRQUFRO2tCQUM1SGIsK0JBQWlCLDhEQUFDYzs7OztpQ0FBaUIsOERBQUNDO1lBQVVOLGFBQWFBOzs7OztnQkFBZTs7Ozs7O0FBR25GO0dBcEJTYjtNQUFBQTtBQXNCVCxTQUFTbUIsVUFBVUMsS0FBSyxFQUFFO0lBRXRCLHFCQUNJLDhEQUFDOUI7UUFBSUMsT0FBTztZQUFDRyxTQUFTO1lBQVFJLGVBQWU7WUFBVUYsZ0JBQWdCO1lBQVVELFlBQVk7UUFBUTs7MEJBQ2pHLDhEQUFDMEI7Z0JBQU9DLFNBQVMsSUFBTUYsTUFBTVAsV0FBVzswQkFBSTs7Ozs7OzBCQUM1Qyw4REFBQ1E7Z0JBQU9DLFNBQVMsSUFBTUYsTUFBTVAsV0FBVzswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3hEO01BUlNNO0FBVVQsU0FBU0QsY0FBYztJQUNuQixxQkFDSSw4REFBQzVCO1FBQUlDLE9BQU87WUFBQ0csU0FBUztZQUFRSSxlQUFlO1lBQVVGLGdCQUFnQjtZQUFVRCxZQUFZO1FBQVE7OzBCQUNqRyw4REFBQzRCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFTOzs7Ozs7MEJBQ1YsOERBQUNBOzBCQUFTOzs7Ozs7MEJBQ1YsOERBQUNBOzBCQUFTOzs7Ozs7MEJBQ1YsOERBQUNBOzBCQUFTOzs7Ozs7MEJBQ1YsOERBQUNBOzBCQUFTOzs7Ozs7MEJBQ1YsOERBQUNIOzBCQUFPOzs7Ozs7Ozs7Ozs7QUFHcEI7TUFaU0g7QUFjVCxTQUFTTSxTQUFTSixLQUFLLEVBQUU7SUFDckIscUJBQ0ksOERBQUM5QjtRQUFJQyxPQUFPO1lBQUNrQyxXQUFXO1lBQUdDLGNBQWM7UUFBQzs7MEJBQ3RDLDhEQUFDQztnQkFBTUMsTUFBSzs7Ozs7OzBCQUNaLDhEQUFDQzswQkFBTVQsTUFBTVUsUUFBUTs7Ozs7Ozs7Ozs7O0FBR2pDO01BUFNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1BhcmFHYWJpL2luZGV4LmpzPzE4MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcmFHYWJpKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmc6IDEwLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgIDxGb3JtIC8+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiA1MDB9fT5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5HYWJyaWVsZSwgdmFtb3MgY2FzYXIgZW0gYnJldmU/PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBGb3JtKCkge1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICAxMDAwO1xuICAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtsb3VjYTogZmFsc2UsIGNsZWFuOiBmYWxzZSwgaW50ZXJuc2hpcDogZmFsc2UsIGxvdmU6IGZhbHNlLCBoYXBweTogZmFsc2V9KTtcblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbmQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTRU5EIC0+ICcpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKiAwLjgsIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZSd9fT5cbiAgICAgICAge3NlbGVjdGVkT3B0aW9uID8gPFNlY291bmRTdGVwIC8+IDogPEZpcnN0U3RlcCBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IC8+IH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEZpcnN0U3RlcChwcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQ2xpY2soKX0+IFNJTSA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlQ2xpY2soKX0+IENMQVJPIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNlY291bmRTdGVwKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aDI+Q29uZmlybWUgdG9kb3Mgb3MgcG9udG9zIHF1ZSB2b2PDqiBjb25jb3JkYTwvaDI+XG4gICAgICAgICAgICA8Q2hlY2tib3g+Vm91IGxhdmFyIHRvZGEgYSBsb3XDp2E8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94PlZvdSBsaW1wYXIgdG9kYSBhIGNhc2E8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94PlZvdSBwcm8gaW50ZWPDom1iaW8gY29tIHZvY8OqPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveD5Wb3UgZGFyIGUgcmVjZWJlciBtdWl0byBhbW9yPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveD5Wb3Ugc2VyIG11aXRvIGZlbGl6PC9DaGVja2JveD5cbiAgICAgICAgICAgIDxidXR0b24+RW52aWFyIHJlc3Bvc3RhPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gQ2hlY2tib3gocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiA1LCBtYXJnaW5Cb3R0b206IDV9fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgLz5cbiAgICAgICAgICAgIDx0ZXh0Pntwcm9wcy5jaGlsZHJlbn08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQYXJhR2FiaSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImZsZXhEaXJlY3Rpb24iLCJIZWFkZXIiLCJGb3JtIiwiaDEiLCJ0ZXh0QWxpZ24iLCJ3aW5kb3dIZWlnaHQiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiZm9ybSIsInNldEZvcm0iLCJsb3VjYSIsImNsZWFuIiwiaW50ZXJuc2hpcCIsImxvdmUiLCJoYXBweSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VuZCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJTZWNvdW5kU3RlcCIsIkZpcnN0U3RlcCIsInByb3BzIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwiQ2hlY2tib3giLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsInR5cGUiLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ParaGabi/index.js\n"));

/***/ })

});