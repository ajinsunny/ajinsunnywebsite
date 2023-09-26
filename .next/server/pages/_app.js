(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components/Layout.js","import":"Heebo","arguments":[{"subsets":["latin"],"variable":"--font-heebo","weight":["100","200","300","400","500","600","700","800"]}],"variableName":"heebo"}
var Layout_js_import_Heebo_arguments_subsets_latin_variable_font_heebo_weight_100_200_300_400_500_600_700_800_variableName_heebo_ = __webpack_require__(5565);
var Layout_js_import_Heebo_arguments_subsets_latin_variable_font_heebo_weight_100_200_300_400_500_600_700_800_variableName_heebo_default = /*#__PURE__*/__webpack_require__.n(Layout_js_import_Heebo_arguments_subsets_latin_variable_font_heebo_weight_100_200_300_400_500_600_700_800_variableName_heebo_);
;// CONCATENATED MODULE: external "react-icons/hi2"
const hi2_namespaceObject = require("react-icons/hi2");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Nav.js
// icons


// nav data
const navData = [
    {
        name: "home",
        path: "/",
        icon: /*#__PURE__*/ jsx_runtime.jsx(hi2_namespaceObject.HiHome, {})
    },
    {
        name: "about",
        path: "/about",
        icon: /*#__PURE__*/ jsx_runtime.jsx(hi2_namespaceObject.HiUser, {})
    },
    {
        name: "services",
        path: "/services",
        icon: /*#__PURE__*/ jsx_runtime.jsx(hi2_namespaceObject.HiRectangleGroup, {})
    },
    {
        name: "work",
        path: "/work",
        icon: /*#__PURE__*/ jsx_runtime.jsx(hi2_namespaceObject.HiViewColumns, {})
    },
    {
        name: "testimonials",
        path: "/testimonials",
        icon: /*#__PURE__*/ jsx_runtime.jsx(hi2_namespaceObject.HiChatBubbleBottomCenterText, {})
    },
    {
        name: "contact",
        path: "/contact",
        icon: /*#__PURE__*/ jsx_runtime.jsx(hi2_namespaceObject.HiEnvelope, {})
    }
];
// next link

// next router

const Nav = ()=>{
    const router = (0,router_.useRouter)();
    const pathname = router.pathname;
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10   backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full",
            children: navData.map((link, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                    className: `${link.path === pathname && "text-accent"} relative flex items-center group hover:text-accent transition-all duration-300`,
                    href: link.path,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "absolute pr-14 right-0 hidden xl:group-hover:flex",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "bg-white relative flex text-primary items-center p-[6px] rounded-[3px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text-[12px] leading-none font-semibold capitalize",
                                        children: link.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: link.icon
                        })
                    ]
                }, index);
            })
        })
    });
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: ./components/Socials.js
// links

// icons

const Socials = ()=>{};
/* harmony default export */ const components_Socials = ((/* unused pure expression or super */ null && (Socials)));

;// CONCATENATED MODULE: ./components/Header.js
// next image


// next link

// components

const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: "Header"
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/TopLeftImg.js
// next image


const TopLeftImg = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50",
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: "/top-left-img.png",
            width: 400,
            height: 400,
            alt: ""
        })
    });
};
/* harmony default export */ const components_TopLeftImg = (TopLeftImg);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
;// CONCATENATED MODULE: ./components/Layout.js
// fonts


// components




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `page bg-site text-white bg-cover bg-no-repeat ${(Layout_js_import_Heebo_arguments_subsets_latin_variable_font_heebo_weight_100_200_300_400_500_600_700_800_variableName_heebo_default()).variable} font-heebo relative`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_TopLeftImg, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Nav, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
            children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// framer motion


// variants
const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%"
    },
    animate: {
        x: "0%",
        width: "0%"
    },
    exit: {
        x: [
            "0%",
            "100%"
        ],
        width: [
            "0%",
            "100%"
        ]
    }
};
const Transition = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.2,
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.4,
                    duration: 0.2,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]",
                variants: transitionVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    delay: 0.6,
                    duration: 0.2,
                    ease: "easeInOut"
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9138);
/* harmony import */ var _components_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8010);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Transition__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Transition__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// components


// router

// framer motion

function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
            mode: "wait",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                className: "h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Transition__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            }, router.route)
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,795,541], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();