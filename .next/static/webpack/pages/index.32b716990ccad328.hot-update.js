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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParaGabi\": function() { return /* binding */ ParaGabi; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ParaGabi() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            padding: 10,\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 6,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ParaGabi;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"Gabriele, vamos casar em breve?\"\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Header;\nfunction Form() {\n    _s();\n    const windowHeight = 1000;\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [forms, setForms] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        louca: false,\n        clean: false,\n        internship: false,\n        love: false,\n        happy: false\n    });\n    function handleClick() {\n        setSelectedOption(true);\n    }\n    function handleSend() {\n        console.log(\"SEND -> \");\n        console.log(forms);\n        window.location = \"newUrl\";\n        \"https://api.whatsapp.com/send?phone=seunumerodetelefone&text=sua%20mensagem\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: windowHeight * 0.8,\n            backgroundColor: \"orange\"\n        },\n        children: selectedOption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SecoundStep, {\n            handleSend: handleSend,\n            forms: forms,\n            setForms: setForms\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 40,\n            columnNumber: 27\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {\n            handleClick: handleClick\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 40,\n            columnNumber: 103\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"jKfuo17yLdCSWZ0efRtUA03dWCs=\");\n_c2 = Form;\nfunction FirstStep(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" SIM \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" CLARO \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_c3 = FirstStep;\nfunction SecoundStep(props) {\n    function handleCheck(key) {\n        const form = {\n            ...props.forms\n        };\n        form[key] = !form[key];\n        props.setForms(form);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Confirme todos os pontos que voc\\xea concorda\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"louca\",\n                handleCheck: handleCheck,\n                children: \"Vou lavar toda a lou\\xe7a\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"clean\",\n                handleCheck: handleCheck,\n                children: \"Vou limpar toda a casa\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"internship\",\n                handleCheck: handleCheck,\n                children: \"Vou pro intec\\xe2mbio com voc\\xea\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"love\",\n                handleCheck: handleCheck,\n                children: \"Vou dar e receber muito amor\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Checkbox, {\n                chave: \"happy\",\n                handleCheck: handleCheck,\n                children: \"Vou ser muito feliz\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleSend(),\n                children: \"Enviar resposta\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SecoundStep;\nfunction Checkbox(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: 5,\n            marginBottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: ()=>props.handleCheck(props.chave)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Checkbox;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ParaGabi\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"FirstStep\");\n$RefreshReg$(_c4, \"SecoundStep\");\n$RefreshReg$(_c5, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVTswQkFBSTs7Ozs7Ozs7Ozs7O0FBR3ZEO01BcEJTTTtBQXNCVCxTQUFTUyxTQUFTUCxLQUFLLEVBQUU7SUFDckIscUJBQ0ksOERBQUNoQztRQUFJQyxPQUFPO1lBQUN3QyxXQUFXO1lBQUdDLGNBQWM7UUFBQzs7MEJBQ3RDLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBV1YsU0FBUyxJQUFNRixNQUFNRyxXQUFXLENBQUNILE1BQU1RLEtBQUs7Ozs7OzswQkFDbkUsOERBQUNLOzBCQUFNYixNQUFNYyxRQUFROzs7Ozs7Ozs7Ozs7QUFHakM7TUFQU1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUGFyYUdhYmkvaW5kZXguanM/MTgwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUGFyYUdhYmkoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogMTAsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XG4gICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgPEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6IDUwMH19PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PkdhYnJpZWxlLCB2YW1vcyBjYXNhciBlbSBicmV2ZT88L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gIDEwMDA7XG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Zvcm1zLCBzZXRGb3Jtc10gPSB1c2VTdGF0ZSh7bG91Y2E6IGZhbHNlLCBjbGVhbjogZmFsc2UsIGludGVybnNoaXA6IGZhbHNlLCBsb3ZlOiBmYWxzZSwgaGFwcHk6IGZhbHNlfSk7XG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbih0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZW5kKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU0VORCAtPiAnKTtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybXMpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICduZXdVcmwnO1xuICAgICAgICAnaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9c2V1bnVtZXJvZGV0ZWxlZm9uZSZ0ZXh0PXN1YSUyMG1lbnNhZ2VtJ1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgKiAwLjgsIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZSd9fT5cbiAgICAgICAge3NlbGVjdGVkT3B0aW9uID8gPFNlY291bmRTdGVwIGhhbmRsZVNlbmQ9e2hhbmRsZVNlbmR9IGZvcm1zPXtmb3Jtc30gc2V0Rm9ybXM9e3NldEZvcm1zfSAvPiA6IDxGaXJzdFN0ZXAgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPiB9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBGaXJzdFN0ZXAocHJvcHMpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKCl9PiBTSU0gPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNsaWNrKCl9PiBDTEFSTyA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBTZWNvdW5kU3RlcChwcm9wcykge1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2soa2V5KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB7IC4uLiBwcm9wcy5mb3Jtc307XG4gICAgICAgIGZvcm1ba2V5XSA9ICFmb3JtW2tleV07XG4gICAgICAgIHByb3BzLnNldEZvcm1zKGZvcm0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxoMj5Db25maXJtZSB0b2RvcyBvcyBwb250b3MgcXVlIHZvY8OqIGNvbmNvcmRhPC9oMj5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2xvdWNhJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfSA+Vm91IGxhdmFyIHRvZGEgYSBsb3XDp2E8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94IGNoYXZlPXsnY2xlYW4nfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9ID5Wb3UgbGltcGFyIHRvZGEgYSBjYXNhPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2ludGVybnNoaXAnfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9PlZvdSBwcm8gaW50ZWPDom1iaW8gY29tIHZvY8OqPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2xvdmUnfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9PlZvdSBkYXIgZSByZWNlYmVyIG11aXRvIGFtb3I8L0NoZWNrYm94PlxuICAgICAgICAgICAgPENoZWNrYm94IGNoYXZlPXsnaGFwcHknfSBoYW5kbGVDaGVjaz17aGFuZGxlQ2hlY2t9PlZvdSBzZXIgbXVpdG8gZmVsaXo8L0NoZWNrYm94PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVTZW5kKCl9PkVudmlhciByZXNwb3N0YTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIENoZWNrYm94KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogNSwgbWFyZ2luQm90dG9tOiA1fX0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUNoZWNrKHByb3BzLmNoYXZlKX0gLz5cbiAgICAgICAgICAgIDx0ZXh0Pntwcm9wcy5jaGlsZHJlbn08L3RleHQ+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQYXJhR2FiaSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImZsZXhEaXJlY3Rpb24iLCJIZWFkZXIiLCJGb3JtIiwiaDEiLCJ0ZXh0QWxpZ24iLCJ3aW5kb3dIZWlnaHQiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiZm9ybXMiLCJzZXRGb3JtcyIsImxvdWNhIiwiY2xlYW4iLCJpbnRlcm5zaGlwIiwibG92ZSIsImhhcHB5IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVTZW5kIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiU2Vjb3VuZFN0ZXAiLCJGaXJzdFN0ZXAiLCJwcm9wcyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVDaGVjayIsImtleSIsImZvcm0iLCJoMiIsIkNoZWNrYm94IiwiY2hhdmUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dCIsInR5cGUiLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ParaGabi/index.js\n"));

/***/ })

});