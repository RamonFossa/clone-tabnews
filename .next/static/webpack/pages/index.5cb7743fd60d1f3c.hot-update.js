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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParaGabi\": function() { return /* binding */ ParaGabi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ParaGabi() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            padding: 10,\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 6,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ParaGabi;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"Gabriele, vamos casar em breve?\"\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Header;\nfunction Form() {\n    _s();\n    const windowHeight = 1000;\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [forms1, setForms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        louca: false,\n        clean: false,\n        internship: false,\n        love: false,\n        happy: false\n    });\n    function handleClick() {\n        setSelectedOption(true);\n    }\n    function handleSend() {\n        console.log(\"SEND -> \");\n        console.log(forms1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: windowHeight * 0.8,\n            backgroundColor: \"orange\"\n        },\n        children: selectedOption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SecoundStep, {\n            handleSend: handleSend,\n            forms: forms1,\n            setForms: setForms\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 38,\n            columnNumber: 27\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {\n            handleClick: handleClick\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 38,\n            columnNumber: 103\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"jKfuo17yLdCSWZ0efRtUA03dWCs=\");\n_c2 = Form;\nfunction FirstStep(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" SIM \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" CLARO \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c3 = FirstStep;\nfunction SecoundStep(props) {\n    function handleCheck(key) {\n        const form = {\n            ...props.forms\n        };\n        forms[key] = !forms[key];\n        props.setForm(form);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Confirme todos os pontos que voc\\xea concorda\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"louca\",\n                handleCheck: handleCheck,\n                children: \"Vou lavar toda a lou\\xe7a\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"clean\",\n                handleCheck: handleCheck,\n                children: \"Vou limpar toda a casa\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"internship\",\n                handleCheck: handleCheck,\n                children: \"Vou pro intec\\xe2mbio com voc\\xea\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"love\",\n                handleCheck: handleCheck,\n                children: \"Vou dar e receber muito amor\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"happy\",\n                handleCheck: handleCheck,\n                children: \"Vou ser muito feliz\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleSend(),\n                children: \"Enviar resposta\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SecoundStep;\nfunction Checkbox(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: 5,\n            marginBottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: ()=>props.handleCheck(props.chave)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Checkbox;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ParaGabi\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"FirstStep\");\n$RefreshReg$(_c4, \"SecoundStep\");\n$RefreshReg$(_c5, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBCU0k7QUFzQlQsU0FBU1UsU0FBU1IsS0FBSyxFQUFFO0lBQ3JCLHFCQUNJLDhEQUFDOUI7UUFBSUMsT0FBTztZQUFDdUMsV0FBVztZQUFHQyxjQUFjO1FBQUM7OzBCQUN0Qyw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVdYLFNBQVMsSUFBTUYsTUFBTUcsV0FBVyxDQUFDSCxNQUFNUyxLQUFLOzs7Ozs7MEJBQ25FLDhEQUFDSzswQkFBTWQsTUFBTWUsUUFBUTs7Ozs7Ozs7Ozs7O0FBR2pDO01BUFNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1BhcmFHYWJpL2luZGV4LmpzPzE4MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcmFHYWJpKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmc6IDEwLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgIDxGb3JtIC8+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiA1MDB9fT5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5HYWJyaWVsZSwgdmFtb3MgY2FzYXIgZW0gYnJldmU/PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBGb3JtKCkge1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICAxMDAwO1xuICAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmb3Jtcywgc2V0Rm9ybXNdID0gdXNlU3RhdGUoe2xvdWNhOiBmYWxzZSwgY2xlYW46IGZhbHNlLCBpbnRlcm5zaGlwOiBmYWxzZSwgbG92ZTogZmFsc2UsIGhhcHB5OiBmYWxzZX0pO1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VuZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NFTkQgLT4gJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1zKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKiAwLjgsIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZSd9fT5cbiAgICAgICAge3NlbGVjdGVkT3B0aW9uID8gPFNlY291bmRTdGVwIGhhbmRsZVNlbmQ9e2hhbmRsZVNlbmR9IGZvcm1zPXtmb3Jtc30gc2V0Rm9ybXM9e3NldEZvcm1zfSAvPiA6IDxGaXJzdFN0ZXAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPiB9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBGaXJzdFN0ZXAocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKCl9PiBTSU0gPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKCl9PiBDTEFSTyA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTZWNvdW5kU3RlcChwcm9wcykge1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2soa2V5KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB7IC4uLiBwcm9wcy5mb3Jtc307XG4gICAgICAgIGZvcm1zW2tleV0gPSAhZm9ybXNba2V5XTtcbiAgICAgICAgcHJvcHMuc2V0Rm9ybShmb3JtKTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aDI+Q29uZmlybWUgdG9kb3Mgb3MgcG9udG9zIHF1ZSB2b2PDqiBjb25jb3JkYTwvaDI+XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hhdmU9eydsb3VjYSd9IGhhbmRsZUNoZWNrPXtoYW5kbGVDaGVja30gPlZvdSBsYXZhciB0b2RhIGEgbG91w6dhPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2NsZWFuJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfSA+Vm91IGxpbXBhciB0b2RhIGEgY2FzYTwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hhdmU9eydpbnRlcm5zaGlwJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfT5Wb3UgcHJvIGludGVjw6JtYmlvIGNvbSB2b2PDqjwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hhdmU9eydsb3ZlJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfT5Wb3UgZGFyIGUgcmVjZWJlciBtdWl0byBhbW9yPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2hhcHB5J30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfT5Wb3Ugc2VyIG11aXRvIGZlbGl6PC9DaGVja2JveD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlU2VuZCgpfT5FbnZpYXIgcmVzcG9zdGE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBDaGVja2JveChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDUsIG1hcmdpbkJvdHRvbTogNX19PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDaGVjayhwcm9wcy5jaGF2ZSl9IC8+XG4gICAgICAgICAgICA8dGV4dD57cHJvcHMuY2hpbGRyZW59PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUGFyYUdhYmkiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJmbGV4RGlyZWN0aW9uIiwiSGVhZGVyIiwiRm9ybSIsImgxIiwidGV4dEFsaWduIiwid2luZG93SGVpZ2h0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImZvcm1zIiwic2V0Rm9ybXMiLCJsb3VjYSIsImNsZWFuIiwiaW50ZXJuc2hpcCIsImxvdmUiLCJoYXBweSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VuZCIsImNvbnNvbGUiLCJsb2ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJTZWNvdW5kU3RlcCIsIkZpcnN0U3RlcCIsInByb3BzIiwiYnV0dG9uIiwib25DbGljayIsImhhbmRsZUNoZWNrIiwia2V5IiwiZm9ybSIsInNldEZvcm0iLCJoMiIsIkNoZWNrYm94IiwiY2hhdmUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsInR5cGUiLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ParaGabi/index.js\n"));

/***/ })

});