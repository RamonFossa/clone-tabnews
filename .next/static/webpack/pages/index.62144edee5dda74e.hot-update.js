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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ParaGabi\": function() { return /* binding */ ParaGabi; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n            Oi amor, vamos casar simmmmm!\\n            E eu aceito tudinho\\n\\n        \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\nfunction ParaGabi() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            padding: 10,\n            flexDirection: \"column\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 6,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Form, {}, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 7,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = ParaGabi;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            width: 500\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n            style: {\n                textAlign: \"center\"\n            },\n            children: \"Gabriele, vamos casar em breve?\"\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Header;\nfunction Form() {\n    _s();\n    const windowHeight = 1000;\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [forms, setForms] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        louca: false,\n        clean: false,\n        internship: false,\n        love: false,\n        happy: false\n    });\n    function handleClick() {\n        setSelectedOption(true);\n    }\n    function handleSend() {\n        const message = \"\"(_templateObject())(_templateObject1());\n        window.location = \"https://api.whatsapp.com/send?phone=+5511982384130&text=sua%20mensagem\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: windowHeight * 0.8,\n            backgroundColor: \"orange\"\n        },\n        children: selectedOption ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SecoundStep, {\n            handleSend: handleSend,\n            forms: forms,\n            setForms: setForms\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 43,\n            columnNumber: 27\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FirstStep, {\n            handleClick: handleClick\n        }, void 0, false, {\n            fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n            lineNumber: 43,\n            columnNumber: 103\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"jKfuo17yLdCSWZ0efRtUA03dWCs=\");\n_c2 = Form;\nfunction FirstStep(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" SIM \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleClick(),\n                children: \" CLARO \"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_c3 = FirstStep;\nfunction SecoundStep(props) {\n    function handleCheck(key) {\n        const form = {\n            ...props.forms\n        };\n        form[key] = !form[key];\n        props.setForms(form);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Confirme todos os pontos que voc\\xea concorda\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Checkbox, {\n                chave: \"louca\",\n                handleCheck: handleCheck,\n                children: \"Vou lavar toda a lou\\xe7a\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Checkbox, {\n                chave: \"clean\",\n                handleCheck: handleCheck,\n                children: \"Vou limpar toda a casa\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Checkbox, {\n                chave: \"internship\",\n                handleCheck: handleCheck,\n                children: \"Vou pro intec\\xe2mbio com voc\\xea\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Checkbox, {\n                chave: \"love\",\n                handleCheck: handleCheck,\n                children: \"Vou dar e receber muito amor\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Checkbox, {\n                chave: \"happy\",\n                handleCheck: handleCheck,\n                children: \"Vou ser muito feliz\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: ()=>props.handleSend(),\n                children: \"Enviar resposta\"\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_c4 = SecoundStep;\nfunction Checkbox(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            marginTop: 5,\n            marginBottom: 5\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"checkbox\",\n                onClick: ()=>props.handleCheck(props.chave)\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"text\", {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/clone-tabnews/pages/ParaGabi/index.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, this);\n}\n_c5 = Checkbox;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"ParaGabi\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"Form\");\n$RefreshReg$(_c3, \"FirstStep\");\n$RefreshReg$(_c4, \"SecoundStep\");\n$RefreshReg$(_c5, \"Checkbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUFHdkQ7TUFwQlNLO0FBc0JULFNBQVNTLFNBQVNQLEtBQUssRUFBRTtJQUNyQixxQkFDSSw4REFBQy9CO1FBQUlDLE9BQU87WUFBQ3VDLFdBQVc7WUFBR0MsY0FBYztRQUFDOzswQkFDdEMsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFXVixTQUFTLElBQU1GLE1BQU1HLFdBQVcsQ0FBQ0gsTUFBTVEsS0FBSzs7Ozs7OzBCQUNuRSw4REFBQ0s7MEJBQU1iLE1BQU1jLFFBQVE7Ozs7Ozs7Ozs7OztBQUdqQztNQVBTUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QYXJhR2FiaS9pbmRleC5qcz8xODA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBQYXJhR2FiaSgpIHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBwYWRkaW5nOiAxMCwgZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fT5cbiAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICA8Rm9ybSAvPlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogNTAwfX0+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+R2FicmllbGUsIHZhbW9zIGNhc2FyIGVtIGJyZXZlPzwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gRm9ybSgpIHtcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSAgMTAwMDtcbiAgICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZm9ybXMsIHNldEZvcm1zXSA9IHVzZVN0YXRlKHtsb3VjYTogZmFsc2UsIGNsZWFuOiBmYWxzZSwgaW50ZXJuc2hpcDogZmFsc2UsIGxvdmU6IGZhbHNlLCBoYXBweTogZmFsc2V9KTtcblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHNldFNlbGVjdGVkT3B0aW9uKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbmQoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgYGBcbiAgICAgICAgICAgIE9pIGFtb3IsIHZhbW9zIGNhc2FyIHNpbW1tbW0hXG4gICAgICAgICAgICBFIGV1IGFjZWl0byB0dWRpbmhvXG5cbiAgICAgICAgYGBgO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rNTUxMTk4MjM4NDEzMCZ0ZXh0PXN1YSUyMG1lbnNhZ2VtJztcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogd2luZG93SGVpZ2h0ICogMC44LCBiYWNrZ3JvdW5kQ29sb3I6ICdvcmFuZ2UnfX0+XG4gICAgICAgIHtzZWxlY3RlZE9wdGlvbiA/IDxTZWNvdW5kU3RlcCBoYW5kbGVTZW5kPXtoYW5kbGVTZW5kfSBmb3Jtcz17Zm9ybXN9IHNldEZvcm1zPXtzZXRGb3Jtc30gLz4gOiA8Rmlyc3RTdGVwIGhhbmRsZUNsaWNrPXtoYW5kbGVDbGlja30gLz4gfVxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gRmlyc3RTdGVwKHByb3BzKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDbGljaygpfT4gU0lNIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDbGljaygpfT4gQ0xBUk8gPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2Vjb3VuZFN0ZXAocHJvcHMpIHtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrKGtleSkge1xuICAgICAgICBjb25zdCBmb3JtID0geyAuLi4gcHJvcHMuZm9ybXN9O1xuICAgICAgICBmb3JtW2tleV0gPSAhZm9ybVtrZXldO1xuICAgICAgICBwcm9wcy5zZXRGb3Jtcyhmb3JtKTtcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8aDI+Q29uZmlybWUgdG9kb3Mgb3MgcG9udG9zIHF1ZSB2b2PDqiBjb25jb3JkYTwvaDI+XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hhdmU9eydsb3VjYSd9IGhhbmRsZUNoZWNrPXtoYW5kbGVDaGVja30gPlZvdSBsYXZhciB0b2RhIGEgbG91w6dhPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2NsZWFuJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfSA+Vm91IGxpbXBhciB0b2RhIGEgY2FzYTwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hhdmU9eydpbnRlcm5zaGlwJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfT5Wb3UgcHJvIGludGVjw6JtYmlvIGNvbSB2b2PDqjwvQ2hlY2tib3g+XG4gICAgICAgICAgICA8Q2hlY2tib3ggY2hhdmU9eydsb3ZlJ30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfT5Wb3UgZGFyIGUgcmVjZWJlciBtdWl0byBhbW9yPC9DaGVja2JveD5cbiAgICAgICAgICAgIDxDaGVja2JveCBjaGF2ZT17J2hhcHB5J30gaGFuZGxlQ2hlY2s9e2hhbmRsZUNoZWNrfT5Wb3Ugc2VyIG11aXRvIGZlbGl6PC9DaGVja2JveD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlU2VuZCgpfT5FbnZpYXIgcmVzcG9zdGE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBDaGVja2JveChwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDUsIG1hcmdpbkJvdHRvbTogNX19PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVDaGVjayhwcm9wcy5jaGF2ZSl9IC8+XG4gICAgICAgICAgICA8dGV4dD57cHJvcHMuY2hpbGRyZW59PC90ZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUGFyYUdhYmkiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJmbGV4RGlyZWN0aW9uIiwiSGVhZGVyIiwiRm9ybSIsImgxIiwidGV4dEFsaWduIiwid2luZG93SGVpZ2h0Iiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImZvcm1zIiwic2V0Rm9ybXMiLCJsb3VjYSIsImNsZWFuIiwiaW50ZXJuc2hpcCIsImxvdmUiLCJoYXBweSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlU2VuZCIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImJhY2tncm91bmRDb2xvciIsIlNlY291bmRTdGVwIiwiRmlyc3RTdGVwIiwicHJvcHMiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQ2hlY2siLCJrZXkiLCJmb3JtIiwiaDIiLCJDaGVja2JveCIsImNoYXZlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiaW5wdXQiLCJ0eXBlIiwidGV4dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ParaGabi/index.js\n"));

/***/ })

});