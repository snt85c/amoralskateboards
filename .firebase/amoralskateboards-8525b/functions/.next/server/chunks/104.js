"use strict";
exports.id = 104;
exports.ids = [104];
exports.modules = {

/***/ 4951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


function Navbar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "absolute top-0 right-0 flex justify-between text-white p-2 text-xl font-extrabold",
        href: "https://www.instagram.com/amoralskateboards/",
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaInstagram, {
            size: 25
        })
    });
}


/***/ }),

/***/ 7104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Navbar.tsx
var Navbar = __webpack_require__(4951);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Footer.tsx


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between px-3 py-1",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-white font-[Custom-1] text-[0.5rem]",
                children: [
                    "SNT ",
                    new Date().getFullYear()
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://github.com/snt85c",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                    color: "white",
                    size: 15
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/Layout.jsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;