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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParaGabi\": function() { return /* binding */ ParaGabi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ParaGabi() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            padding: 10,\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 6,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ParaGabi;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"Gabriele, vamos casar em breve?\"\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Header;\nfunction Form() {\n    _s();\n    const windowHeight = 1000;\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [forms, setForms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        louca: false,\n        clean: false,\n        internship: false,\n        love: false,\n        happy: false\n    });\n    function handleClick() {\n        setSelectedOption(true);\n    }\n    function createMessage() {\n        let message = \"Oi, vamos casar simmmmm!\";\n        message += forms.louca ? \"\\n\\n Eu aceito lavar toda a lou\\xe7a.\" : \"\\n\\n Disse que n\\xe3o, mas eu aceito lavar toda a lou\\xe7a,\";\n        message += forms.clean ? \"\\n\\n Eu aceito limpar toda a casa,\" : \"\\n\\n Disse que n\\xe3o, mas eu aceito limpar toda a casa,\";\n        message += forms.internship ? \"\\n\\n Eu aceito ir ao interc\\xe2mbio com voc\\xea,\" : \"\\n\\n Disse que n\\xe3o, mas eu aceito ir ao interc\\xe2mbio com voc\\xea,\";\n        message += forms.love ? \"\\n\\n Eu aceito dar e receber muito amor,\" : \"\\n\\n Disse que n\\xe3o, mas eu aceito dar e receber muito amor,\";\n        message += forms.happy ? \"\\n\\n Eu aceito ser muito feliz ao seu lado,\" : \"\\n\\n Disse que n\\xe3o, mas eu aceito ser muito feliz ao seu lado,\";\n        return message;\n    }\n    function handleSend() {\n        const message = createMessage();\n        window.location = \"https://api.whatsapp.com/send?phone=+5511982384130&text=\".concat(message);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: windowHeight * 0.8,\n            backgroundColor: \"orange\"\n        },\n        children: selectedOption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SecoundStep, {\n            handleSend: handleSend,\n            forms: forms,\n            setForms: setForms\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 49,\n            columnNumber: 27\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {\n            handleClick: handleClick\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 49,\n            columnNumber: 103\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"jKfuo17yLdCSWZ0efRtUA03dWCs=\");\n_c2 = Form;\nfunction FirstStep(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" SIM \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" CLARO \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_c3 = FirstStep;\nfunction SecoundStep(props) {\n    function handleCheck(key) {\n        const form = {\n            ...props.forms\n        };\n        form[key] = !form[key];\n        props.setForms(form);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Confirme todos os pontos que voc\\xea concorda\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"louca\",\n                handleCheck: handleCheck,\n                children: \"Vou lavar toda a lou\\xe7a\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"clean\",\n                handleCheck: handleCheck,\n                children: \"Vou limpar toda a casa\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"internship\",\n                handleCheck: handleCheck,\n                children: \"Vou pro intec\\xe2mbio com voc\\xea\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"love\",\n                handleCheck: handleCheck,\n                children: \"Vou dar e receber muito amor\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"happy\",\n                handleCheck: handleCheck,\n                children: \"Vou ser muito feliz\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleSend(),\n                children: \"Enviar resposta\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SecoundStep;\nfunction Checkbox(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: 5,\n            marginBottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: ()=>props.handleCheck(props.chave)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Checkbox;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ParaGabi\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"FirstStep\");\n$RefreshReg$(_c4, \"SecoundStep\");\n$RefreshReg$(_c5, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjOzs7Ozs7MEJBQ3JELDhEQUFDSTtnQkFBU0MsT0FBTztnQkFBU0wsYUFBYUE7MEJBQWM7Ozs7OzswQkFDckQsOERBQUNJO2dCQUFTQyxPQUFPO2dCQUFjTCxhQUFhQTswQkFBYTs7Ozs7OzBCQUN6RCw4REFBQ0k7Z0JBQVNDLE9BQU87Z0JBQVFMLGFBQWFBOzBCQUFhOzs7Ozs7MEJBQ25ELDhEQUFDSTtnQkFBU0MsT0FBTztnQkFBU0wsYUFBYUE7MEJBQWE7Ozs7OzswQkFDcEQsOERBQUNGO2dCQUFPQyxTQUFTLElBQU1GLE1BQU1OLFVBQVU7MEJBQUk7Ozs7Ozs7Ozs7OztBQUd2RDtNQXBCU0k7QUFzQlQsU0FBU1MsU0FBU1AsS0FBSyxFQUFFO0lBQ3JCLHFCQUNJLDhEQUFDaEM7UUFBSUMsT0FBTztZQUFDd0MsV0FBVztZQUFHQyxjQUFjO1FBQUM7OzBCQUN0Qyw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVdWLFNBQVMsSUFBTUYsTUFBTUcsV0FBVyxDQUFDSCxNQUFNUSxLQUFLOzs7Ozs7MEJBQ25FLDhEQUFDSzswQkFBTWIsTUFBTWMsUUFBUTs7Ozs7Ozs7Ozs7O0FBR2pDO01BUFNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1BhcmFHYWJpL2luZGV4LmpzPzE4MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhcmFHYWJpKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmc6IDEwLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgIDxGb3JtIC8+XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiA1MDB9fT5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5HYWJyaWVsZSwgdmFtb3MgY2FzYXIgZW0gYnJldmU/PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBGb3JtKCkge1xuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9ICAxMDAwO1xuICAgIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmb3Jtcywgc2V0Rm9ybXNdID0gdXNlU3RhdGUoe2xvdWNhOiBmYWxzZSwgY2xlYW46IGZhbHNlLCBpbnRlcm5zaGlwOiBmYWxzZSwgbG92ZTogZmFsc2UsIGhhcHB5OiBmYWxzZX0pO1xuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPcHRpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZSgpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnT2ksIHZhbW9zIGNhc2FyIHNpbW1tbW0hJztcbiAgICAgICAgbWVzc2FnZSArPSBmb3Jtcy5sb3VjYSA/ICdcXG5cXG4gRXUgYWNlaXRvIGxhdmFyIHRvZGEgYSBsb3XDp2EuJyA6ICdcXG5cXG4gRGlzc2UgcXVlIG7Do28sIG1hcyBldSBhY2VpdG8gbGF2YXIgdG9kYSBhIGxvdcOnYSwnO1xuICAgICAgICBtZXNzYWdlICs9IGZvcm1zLmNsZWFuID8gJ1xcblxcbiBFdSBhY2VpdG8gbGltcGFyIHRvZGEgYSBjYXNhLCcgOiAnXFxuXFxuIERpc3NlIHF1ZSBuw6NvLCBtYXMgZXUgYWNlaXRvIGxpbXBhciB0b2RhIGEgY2FzYSwnO1xuICAgICAgICBtZXNzYWdlICs9IGZvcm1zLmludGVybnNoaXAgPyAnXFxuXFxuIEV1IGFjZWl0byBpciBhbyBpbnRlcmPDom1iaW8gY29tIHZvY8OqLCcgOiAnXFxuXFxuIERpc3NlIHF1ZSBuw6NvLCBtYXMgZXUgYWNlaXRvIGlyIGFvIGludGVyY8OibWJpbyBjb20gdm9jw6osJztcbiAgICAgICAgbWVzc2FnZSArPSBmb3Jtcy5sb3ZlID8gJ1xcblxcbiBFdSBhY2VpdG8gZGFyIGUgcmVjZWJlciBtdWl0byBhbW9yLCcgOiAnXFxuXFxuIERpc3NlIHF1ZSBuw6NvLCBtYXMgZXUgYWNlaXRvIGRhciBlIHJlY2ViZXIgbXVpdG8gYW1vciwnO1xuICAgICAgICBtZXNzYWdlICs9IGZvcm1zLmhhcHB5ID8gJ1xcblxcbiBFdSBhY2VpdG8gc2VyIG11aXRvIGZlbGl6IGFvIHNldSBsYWRvLCcgOiAnXFxuXFxuIERpc3NlIHF1ZSBuw6NvLCBtYXMgZXUgYWNlaXRvIHNlciBtdWl0byBmZWxpeiBhbyBzZXUgbGFkbywnO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZW5kKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlTWVzc2FnZSgpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rNTUxMTk4MjM4NDEzMCZ0ZXh0PSR7bWVzc2FnZX1gO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKiAwLjgsIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZSd9fT5cbiAgICAgICAge3NlbGVjdGVkT3B0aW9uID8gPFNlY291bmRTdGVwIGhhbmRsZVNlbmQ9e2hhbmRsZVNlbmR9IGZvcm1zPXtmb3Jtc30gc2V0Rm9ybXM9e3NldEZvcm1zfSAvPiA6IDxGaXJzdFN0ZXAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPiB9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBGaXJzdFN0ZXAocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKCl9PiBTSU0gPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKCl9PiBDTEFSTyA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTZWNvdW5kU3RlcChwcm9wcykge1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2soa2V5KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB7IC4uLiBwcm9wcy5mb3Jtc307XG4gICAgICAgIGZvcm1ba2V5XSA9ICFmb3JtW2tleV07XG4gICAgICAgIHByb3BzLnNldEZvcm1zKGZvcm0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxoMj5Db25maXJtZSB0b2RvcyBvcyBwb250b3MgcXVlIHZvY8OqIGNvbmNvcmRhPC9oMj5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2xvdWNhJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfSA+Vm91IGxhdmFyIHRvZGEgYSBsb3XDp2E8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94IGNoYXZlPXsnY2xlYW4nfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9ID5Wb3UgbGltcGFyIHRvZGEgYSBjYXNhPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2ludGVybnNoaXAnfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9PlZvdSBwcm8gaW50ZWPDom1iaW8gY29tIHZvY8OqPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2xvdmUnfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9PlZvdSBkYXIgZSByZWNlYmVyIG11aXRvIGFtb3I8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94IGNoYXZlPXsnaGFwcHknfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9PlZvdSBzZXIgbXVpdG8gZmVsaXo8L0NoZWNrYm94PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVTZW5kKCl9PkVudmlhciByZXNwb3N0YTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIENoZWNrYm94KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogNSwgbWFyZ2luQm90dG9tOiA1fX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNoZWNrKHByb3BzLmNoYXZlKX0gLz5cbiAgICAgICAgICAgIDx0ZXh0Pntwcm9wcy5jaGlsZHJlbn08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQYXJhR2FiaSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImZsZXhEaXJlY3Rpb24iLCJIZWFkZXIiLCJGb3JtIiwiaDEiLCJ0ZXh0QWxpZ24iLCJ3aW5kb3dIZWlnaHQiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiZm9ybXMiLCJzZXRGb3JtcyIsImxvdWNhIiwiY2xlYW4iLCJpbnRlcm5zaGlwIiwibG92ZSIsImhhcHB5IiwiaGFuZGxlQ2xpY2siLCJjcmVhdGVNZXNzYWdlIiwibWVzc2FnZSIsImhhbmRsZVNlbmQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImJhY2tncm91bmRDb2xvciIsIlNlY291bmRTdGVwIiwiRmlyc3RTdGVwIiwicHJvcHMiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQ2hlY2siLCJrZXkiLCJmb3JtIiwiaDIiLCJDaGVja2JveCIsImNoYXZlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJ0eXBlIiwidGV4dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ParaGabi/index.js\n"));

/***/ })

});