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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParaGabi\": function() { return /* binding */ ParaGabi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ParaGabi() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            padding: 10,\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 6,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ParaGabi;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"Gabriele, vamos casar em breve?\"\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Header;\nfunction Form() {\n    _s();\n    const windowHeight = 1000;\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        louca: false,\n        clean: false,\n        internship: false,\n        love: false,\n        happy: false\n    });\n    function handleClick() {\n        setSelectedOption(true);\n    }\n    function handleSend() {\n        console.log(\"SEND -> \");\n        console.log(form);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: windowHeight * 0.8,\n            backgroundColor: \"orange\"\n        },\n        children: selectedOption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SecoundStep, {\n            handleSend: handleSend,\n            form: form,\n            setForm: setForm\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 38,\n            columnNumber: 27\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {\n            handleClick: handleClick\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 38,\n            columnNumber: 99\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"axU0BPHlppob7YtDpwG3FoW16zE=\");\n_c2 = Form;\nfunction FirstStep(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" SIM \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" CLARO \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c3 = FirstStep;\nfunction SecoundStep(props) {\n    function handleCheck(key) {\n        con;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Confirme todos os pontos que voc\\xea concorda\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                handleCheck: handleCheck,\n                children: \"Vou lavar toda a lou\\xe7a\"\n            }, \"\", false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou limpar toda a casa\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou pro intec\\xe2mbio com voc\\xea\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou dar e receber muito amor\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                children: \"Vou ser muito feliz\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleSend(),\n                children: \"Enviar resposta\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SecoundStep;\nfunction Checkbox(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: 5,\n            marginBottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: ()=>props.handleCheck(props.key)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Checkbox;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ParaGabi\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"FirstStep\");\n$RefreshReg$(_c4, \"SecoundStep\");\n$RefreshReg$(_c5, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QYXJhR2FiaS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRTFCLFNBQVNDLFdBQVc7SUFDdkIscUJBQ0EsOERBQUNDO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztZQUFRQyxRQUFRO1lBQVFDLFNBQVM7WUFBUUMsWUFBWTtZQUFVQyxnQkFBZ0I7WUFBVUMsU0FBUztZQUFJQyxlQUFlO1FBQVE7OzBCQUMxSSw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQzs7Ozs7Ozs7Ozs7QUFHWixDQUFDO0tBUGVYO0FBU2hCLFNBQVNVLFNBQVM7SUFDZCxxQkFDSSw4REFBQ1Q7UUFBSUMsT0FBTztZQUFDQyxPQUFPO1FBQUc7a0JBQ25CLDRFQUFDUztZQUFHVixPQUFPO2dCQUFDVyxXQUFXO1lBQVE7c0JBQUc7Ozs7Ozs7Ozs7O0FBRzlDO01BTlNIO0FBUVQsU0FBU0MsT0FBTzs7SUFDWixNQUFNRyxlQUFnQjtJQUN0QixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFELE1BQU0sQ0FBQ2tCLE1BQU1DLFFBQVEsR0FBR25CLCtDQUFRQSxDQUFDO1FBQUNvQixPQUFPLEtBQUs7UUFBRUMsT0FBTyxLQUFLO1FBQUVDLFlBQVksS0FBSztRQUFFQyxNQUFNLEtBQUs7UUFBRUMsT0FBTyxLQUFLO0lBQUE7SUFHMUcsU0FBU0MsY0FBYztRQUNuQlIsa0JBQWtCLElBQUk7SUFDMUI7SUFFQSxTQUFTUyxhQUFhO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUM7UUFDWkQsUUFBUUMsR0FBRyxDQUFDVjtJQUNoQjtJQUdBLHFCQUNBLDhEQUFDaEI7UUFBSUMsT0FBTztZQUFDQyxPQUFPO1lBQVFJLGdCQUFnQjtZQUFVRCxZQUFZO1lBQVVGLFFBQVFVLGVBQWU7WUFBS2MsaUJBQWlCO1FBQVE7a0JBQzVIYiwrQkFBaUIsOERBQUNjO1lBQVlKLFlBQVlBO1lBQVlSLE1BQU1BO1lBQU1DLFNBQVNBOzs7OztpQ0FBYyw4REFBQ1k7WUFBVU4sYUFBYUE7Ozs7O2dCQUFlOzs7Ozs7QUFHekk7R0FyQlNiO01BQUFBO0FBdUJULFNBQVNtQixVQUFVQyxLQUFLLEVBQUU7SUFFdEIscUJBQ0ksOERBQUM5QjtRQUFJQyxPQUFPO1lBQUNHLFNBQVM7WUFBUUksZUFBZTtZQUFVRixnQkFBZ0I7WUFBVUQsWUFBWTtRQUFROzswQkFDakcsOERBQUMwQjtnQkFBT0MsU0FBUyxJQUFNRixNQUFNUCxXQUFXOzBCQUFJOzs7Ozs7MEJBQzVDLDhEQUFDUTtnQkFBT0MsU0FBUyxJQUFNRixNQUFNUCxXQUFXOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHeEQ7TUFSU007QUFVVCxTQUFTRCxZQUFZRSxLQUFLLEVBQUU7SUFFeEIsU0FBU0csWUFBWUMsR0FBRyxFQUFFO1FBQ3RCQztJQUNKO0lBR0EscUJBQ0ksOERBQUNuQztRQUFJQyxPQUFPO1lBQUNHLFNBQVM7WUFBUUksZUFBZTtZQUFVRixnQkFBZ0I7WUFBVUQsWUFBWTtRQUFROzswQkFDakcsOERBQUMrQjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBa0JKLGFBQWFBOzBCQUFjO2VBQS9COzs7OzswQkFDZiw4REFBQ0k7MEJBQVM7Ozs7OzswQkFDViw4REFBQ0E7MEJBQVM7Ozs7OzswQkFDViw4REFBQ0E7MEJBQVM7Ozs7OzswQkFDViw4REFBQ0E7MEJBQVM7Ozs7OzswQkFDViw4REFBQ047Z0JBQU9DLFNBQVMsSUFBTUYsTUFBTU4sVUFBVTswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZEO01BbEJTSTtBQW9CVCxTQUFTUyxTQUFTUCxLQUFLLEVBQUU7SUFDckIscUJBQ0ksOERBQUM5QjtRQUFJQyxPQUFPO1lBQUNxQyxXQUFXO1lBQUdDLGNBQWM7UUFBQzs7MEJBQ3RDLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBV1QsU0FBUyxJQUFNRixNQUFNRyxXQUFXLENBQUNILE1BQU1JLEdBQUc7Ozs7OzswQkFDakUsOERBQUNROzBCQUFNWixNQUFNYSxRQUFROzs7Ozs7Ozs7Ozs7QUFHakM7TUFQU04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGFyYUdhYmkvaW5kZXguanM/MTgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFyYUdhYmkoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogMTAsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XG4gICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgPEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDUwMH19PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PkdhYnJpZWxlLCB2YW1vcyBjYXNhciBlbSBicmV2ZT88L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gIDEwMDA7XG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe2xvdWNhOiBmYWxzZSwgY2xlYW46IGZhbHNlLCBpbnRlcm5zaGlwOiBmYWxzZSwgbG92ZTogZmFsc2UsIGhhcHB5OiBmYWxzZX0pO1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VuZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NFTkQgLT4gJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCAqIDAuOCwgYmFja2dyb3VuZENvbG9yOiAnb3JhbmdlJ319PlxuICAgICAgICB7c2VsZWN0ZWRPcHRpb24gPyA8U2Vjb3VuZFN0ZXAgaGFuZGxlU2VuZD17aGFuZGxlU2VuZH0gZm9ybT17Zm9ybX0gc2V0Rm9ybT17c2V0Rm9ybX0gLz4gOiA8Rmlyc3RTdGVwIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30gLz4gfVxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gRmlyc3RTdGVwKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDbGljaygpfT4gU0lNIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDbGljaygpfT4gQ0xBUk8gPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2Vjb3VuZFN0ZXAocHJvcHMpIHtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrKGtleSkge1xuICAgICAgICBjb25cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aDI+Q29uZmlybWUgdG9kb3Mgb3MgcG9udG9zIHF1ZSB2b2PDqiBjb25jb3JkYTwvaDI+XG4gICAgICAgICAgICA8Q2hlY2tib3gga2V5PXsnJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfSA+Vm91IGxhdmFyIHRvZGEgYSBsb3XDp2E8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94PlZvdSBsaW1wYXIgdG9kYSBhIGNhc2E8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94PlZvdSBwcm8gaW50ZWPDom1iaW8gY29tIHZvY8OqPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveD5Wb3UgZGFyIGUgcmVjZWJlciBtdWl0byBhbW9yPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveD5Wb3Ugc2VyIG11aXRvIGZlbGl6PC9DaGVja2JveD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlU2VuZCgpfT5FbnZpYXIgcmVzcG9zdGE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBDaGVja2JveChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDUsIG1hcmdpbkJvdHRvbTogNX19PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDaGVjayhwcm9wcy5rZXkpfSAvPlxuICAgICAgICAgICAgPHRleHQ+e3Byb3BzLmNoaWxkcmVufTwvdGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBhcmFHYWJpIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiZmxleERpcmVjdGlvbiIsIkhlYWRlciIsIkZvcm0iLCJoMSIsInRleHRBbGlnbiIsIndpbmRvd0hlaWdodCIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJmb3JtIiwic2V0Rm9ybSIsImxvdWNhIiwiY2xlYW4iLCJpbnRlcm5zaGlwIiwibG92ZSIsImhhcHB5IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVTZW5kIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmRDb2xvciIsIlNlY291bmRTdGVwIiwiRmlyc3RTdGVwIiwicHJvcHMiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQ2hlY2siLCJrZXkiLCJjb24iLCJoMiIsIkNoZWNrYm94IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJ0eXBlIiwidGV4dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ParaGabi/index.js\n"));

/***/ })

});