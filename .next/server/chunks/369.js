exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 9468:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ChessBlockMobile_container__B0cU5",
	"swiper": "ChessBlockMobile_swiper__JAnAU",
	"swiper-slide": "ChessBlockMobile_swiper-slide__a8W_e",
	"image": "ChessBlockMobile_image__UNnD_",
	"blockTitle": "ChessBlockMobile_blockTitle__FFwd4",
	"title": "ChessBlockMobile_title__RJfWF",
	"textContent": "ChessBlockMobile_textContent__laF9P",
	"text": "ChessBlockMobile_text__JFsjy",
	"slideText": "ChessBlockMobile_slideText__wx5VN"
};


/***/ }),

/***/ 2250:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Text_container__hhxZG",
	"kazimir": "Text_kazimir__rK74E",
	"title": "Text_title__w9fVE",
	"clickable": "Text_clickable__AbhDw"
};


/***/ }),

/***/ 7317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ChessBlockMobile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9468);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8973);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5691);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2480);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8073);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// interface IProps {
//   lang: ELang;
// }
// export const ChessBlockMobile: FC<IProps> = ({ lang }) => {
const ChessBlockMobile = ({ lang  })=>{
    const data = _content__WEBPACK_IMPORTED_MODULE_6__/* .content */ .k[lang].chessBlock;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Element, {
        name: _types__WEBPACK_IMPORTED_MODULE_8__/* .EBlocks.CHESS */ .CL.CHESS,
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default()), {
                animateIn: "animate__fadeInLeftBig",
                animateOnce: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .x, {
                    title: true,
                    text: _content__WEBPACK_IMPORTED_MODULE_6__/* .content */ .k[lang].chessBlock.title,
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().blockTitle)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default()), {
                animateIn: "animate__fadeInRightBig",
                animateOnce: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: true,
                    pagination: {
                        clickable: true,
                        dynamicBullets: true
                    },
                    navigation: true,
                    autoplay: {
                        delay: 10000,
                        disableOnInteraction: false
                    },
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                    ],
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().swiper),
                    allowTouchMove: true,
                    children: data.content.map((el, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().swiperSlide)),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().image),
                                        src: el.mobileImg,
                                        alt: "apartment img"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().slideText),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .x, {
                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
                                                title: true,
                                                text: el.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .x, {
                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().text),
                                                text: el.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, id))
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7317);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__]);
_ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Text/index.module.css
var index_module = __webpack_require__(2250);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./types/index.ts
var types = __webpack_require__(5691);
;// CONCATENATED MODULE: ./components/Text/Text.tsx





const Text = ({ title =false , text , className , fontSize , fontWeight , fontFamily ="Austin" , onClick , type ="text"  })=>{
    if (type === "tel" || type === "mail") {
        const href = (type === "tel" ? "tel:" : "mailto:") + text?.replace(/ /g, "");
        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: external_classnames_default()(className, (index_module_default()).container, {
                [(index_module_default()).kazimir]: fontFamily === types/* EFonts.KAZIMIR */.RN.KAZIMIR,
                [(index_module_default()).title]: title
            }),
            href: href,
            children: text
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (index_module_default()).container, {
            [(index_module_default()).kazimir]: fontFamily === types/* EFonts.KAZIMIR */.RN.KAZIMIR,
            [(index_module_default()).title]: title,
            [(index_module_default()).clickable]: onClick
        }),
        style: {
            fontSize,
            fontWeight
        },
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./components/Text/index.ts



/***/ }),

/***/ 8973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ content)
});

;// CONCATENATED MODULE: ./images/advantagesBlock/1.jpg
/* harmony default export */ const _1 = ({"src":"/vertolet-landing//_next/static/media/1.9dbe5ccd.jpg","height":616,"width":1803,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAwADAQAAAAAAAAAAAAABAgADBBMhQlH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oADAMBAAIRAxEAPwCRg2aHo4HsLVlT0wB8/YiIcpdf/9k=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./images/advantagesBlock/2.jpg
/* harmony default export */ const _2 = ({"src":"/vertolet-landing//_next/static/media/2.5a381fed.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABAwQDAAAAAAAAAAAAAAABABEhAgQFEgYiMf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oADAMBAAIRAxEAPwCVa8kyJftQNQfA20PMoiI9LREvD//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/advantagesBlock/7.jpg
/* harmony default export */ const _7 = ({"src":"/vertolet-landing//_next/static/media/7.da60b210.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADESEi/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKNc7WMfIwbgUdiIgjX/2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/welcomeBlock/1.jpg
/* harmony default export */ const welcomeBlock_1 = ({"src":"/vertolet-landing//_next/static/media/1.35b8de54.jpg","height":1000,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAdEAACAgEFAAAAAAAAAAAAAAAAAgEDBQQSIkGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIh/9oADAMBAAIRAxEAPwCMhk9VSiLS8V97ojl6ABo7QaS//9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/welcomeBlock/2.jpg
/* harmony default export */ const welcomeBlock_2 = ({"src":"/vertolet-landing//_next/static/media/2.eb4b0689.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAADAAAHAAAAAAAAAAAAAAAAAQIDBAUREiEx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCFavneE74rpLya7QADUiP/2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/welcomeBlock/3.jpg
/* harmony default export */ const _3 = ({"src":"/vertolet-landing//_next/static/media/3.5a381fed.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABAwQDAAAAAAAAAAAAAAABABEhAgQFEgYiMf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oADAMBAAIRAxEAPwCVa8kyJftQNQfA20PMoiI9LREvD//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/welcomeBlock/4.jpg
/* harmony default export */ const _4 = ({"src":"/vertolet-landing//_next/static/media/4.1d9457e8.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBBEiQXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8AjYls1mCRlqUkMJ2we+IiIcpQes//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/welcomeBlock/5.jpg
/* harmony default export */ const _5 = ({"src":"/vertolet-landing//_next/static/media/5.7a0852dc.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIDBBESEyEiMf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIREv/aAAwDAQACEQMRAD8AkVNWaW9Vw+zWv3nAAAa5G0Dkn//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/galleryBlock/1.jpg
/* harmony default export */ const galleryBlock_1 = ({"src":"/vertolet-landing//_next/static/media/1.35b8de54.jpg","height":1000,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAdEAACAgEFAAAAAAAAAAAAAAAAAgEDBQQSIkGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIh/9oADAMBAAIRAxEAPwCMhk9VSiLS8V97ojl6ABo7QaS//9k=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/galleryBlock/2.jpg
/* harmony default export */ const galleryBlock_2 = ({"src":"/vertolet-landing//_next/static/media/2.eb4b0689.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAADAAAHAAAAAAAAAAAAAAAAAQIDBAUREiEx/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCFavneE74rpLya7QADUiP/2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/galleryBlock/3.jpg
/* harmony default export */ const galleryBlock_3 = ({"src":"/vertolet-landing//_next/static/media/3.5a381fed.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABAwQDAAAAAAAAAAAAAAABABEhAgQFEgYiMf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIh/9oADAMBAAIRAxEAPwCVa8kyJftQNQfA20PMoiI9LREvD//Z","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/galleryBlock/4.jpg
/* harmony default export */ const galleryBlock_4 = ({"src":"/vertolet-landing//_next/static/media/4.1d9457e8.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDBBEiQXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8AjYls1mCRlqUkMJ2we+IiIcpQes//2Q==","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./images/galleryBlock/5.jpg
/* harmony default export */ const galleryBlock_5 = ({"src":"/vertolet-landing//_next/static/media/5.7a0852dc.jpg","height":727,"width":1500,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIDBBESEyEiMf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIREv/aAAwDAQACEQMRAD8AkVNWaW9Vw+zWv3nAAAa5G0Dkn//Z","blurWidth":8,"blurHeight":4});
// EXTERNAL MODULE: ./types/index.ts
var types = __webpack_require__(5691);
;// CONCATENATED MODULE: ./content.ts
// import chessImg2 from "./images/chessBlock/2.jpg";














const content = {
    rus: {
        squareMeasurementUnit: "кв.м",
        priceInUzb: "млн. руб",
        balcony: "Балкон",
        kitchen: "Кухня",
        lounge: "Гостиная",
        toilet: "Санузел",
        hall: "Холл",
        bedroom: "Спальня",
        locationInfoBlock: {
            title: "РАСПОЛОЖЕНИЕ ЖК NOVOGRAD",
            description: "Обеспечивает доступ к развитой инфраструктуре — все необходимые для " + "комфортной жизни локации в пешей доступности: продовольственные сетевые " + "маркеты, школы, детские сады, медицинские клиники, аптеки и общественный транспорт"
        },
        callMeBackModal: {
            title: "ОСТАВИТЬ ЗАЯВКУ",
            description: "Оставьте свой номер, и мы перезвоним Вам.",
            namePlaceholder: "Имя",
            phonePlaceholder: "Номер телефона",
            buttonText: "ЖДУ ЗВОНКА"
        },
        header: {
            navigation: [
                {
                    title: "О комплексе",
                    id: types/* EBlocks.ABOUT */.CL.ABOUT
                },
                {
                    title: "Преимущества",
                    id: types/* EBlocks.CHESS */.CL.CHESS
                },
                {
                    title: "Блоки",
                    id: types/* EBlocks.ROOM_SELECTOR */.CL.ROOM_SELECTOR
                },
                {
                    title: "Галерея",
                    id: types/* EBlocks.GALLERY */.CL.GALLERY
                },
                // { title: "Ход строительства", id: EBlocks.BUILDINGS },
                {
                    title: "Локация",
                    id: types/* EBlocks.LOCATION */.CL.LOCATION
                }
            ],
            mainPhone: "8-(800)-700-123-234",
            phone: "8-(800)-700-600-500",
            extraPhone: "8-(800)-700-432-999",
            timetable: "Ежедневно с 9:00 до 20:00"
        },
        welcomeBlock: {
            background: [
                welcomeBlock_1,
                welcomeBlock_2,
                _3,
                _4,
                _5
            ],
            description: "Новоград - элитный квартал для крепкой семьи",
            menu: "МЕНЮ",
            button: "Оставить заявку"
        },
        aboutBlock: {
            title: "О КОМПЛЕКСЕ",
            description: "Новоград - это современный комплекс апартаментов бизнес-класса расположенный в престижном районе столицы.\n" + "На территории ЖК представлены 3, 5 и 7-этажные жилые дома с просторными террасами " + "и балконами. Квартиры имеют площадь от 46 до 200 квадратных метров.",
            advantages: [
                {
                    title: "Планировок",
                    count: "21"
                },
                {
                    title: "Парковочных мест",
                    count: "325"
                },
                {
                    title: "Квартир",
                    count: "413"
                }
            ],
            button: "Подробнее"
        },
        advantagesBlock: [
            {
                title: "КРУГЛОСУТОЧНАЯ ОХРАНА",
                description: "На территории  круглосуточное видеонаблюдение, которое обеспечит безопасность жильцам комплекса и их гостям",
                image: _1
            },
            {
                title: "БЛАГОУСТРОЕННАЯ ТЕРРИТОРИЯ",
                description: "Во дворах предусмотрены зеленые зоны с ландшафтным дизайном, многофункциональные детские площадки, беседки для отдыха, прогулочные дорожки.",
                image: _2
            },
            {
                title: "АРИСТОКРАТИЧНОСТЬ В ДЕТАЛЯХ",
                description: "Просторные холлы, высококачественная внутренняя декоративная отделка поддерживают ощущения нахождения в царских палатах ",
                image: _7
            }
        ],
        chessBlock: {
            title: "ПРЕИМУЩЕСТВА",
            content: []
        },
        flatsSlider: {
            block: "Блок",
            title: "БЛОКИ И ПЛАНИРОВКА",
            flatsCount: "комнатная",
            roomCountText: "Количество комнат",
            schemaTitle: "Доступные планировки",
            schemaTitleMobile: "Планировки",
            apartmentDescription: "Общая площадь",
            cost: "Стоимость",
            roomSize: "Размеры комнат",
            squareTitle: "Общая площадь",
            book: "Забронировать"
        },
        galleryBlock: {
            title: "ГАЛЕРЕЯ",
            images: [
                galleryBlock_1,
                galleryBlock_2,
                galleryBlock_3,
                galleryBlock_4,
                galleryBlock_5
            ]
        },
        buildingStepsBlock: {
            title: "ХОД СТРОИТЕЛЬСТВА"
        },
        locationBlock: {
            title: "ОФИС ПРОДАЖ",
            address: "Москва, Новоданиловская, д. 8",
            shortAddress: "Новоданиловская, д. 8",
            phone: "8-(800)-700-600-500",
            mainPhone: "8-(800)-700-123-234",
            extraPhone: "8-(800)-700-432-999",
            mail: "info@vertolet.com",
            buttonText: "Записаться на встречу"
        },
        footerBlock: {
            navigation: [
                {
                    title: "Главная",
                    id: types/* EBlocks.WELCOME */.CL.WELCOME
                },
                {
                    title: "О комплексе",
                    id: types/* EBlocks.ABOUT */.CL.ABOUT
                },
                {
                    title: "Преимущества",
                    id: types/* EBlocks.CHESS */.CL.CHESS
                },
                {
                    title: "Блоки",
                    id: types/* EBlocks.ROOM_SELECTOR */.CL.ROOM_SELECTOR
                },
                {
                    title: "Галерея",
                    id: types/* EBlocks.GALLERY */.CL.GALLERY
                }
            ]
        }
    }
};


/***/ }),

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CL": () => (/* binding */ EBlocks),
/* harmony export */   "RN": () => (/* binding */ EFonts),
/* harmony export */   "SP": () => (/* binding */ ELang)
/* harmony export */ });
/* unused harmony export ERooms */
var EFonts;
(function(EFonts) {
    EFonts["KAZIMIR"] = "Kazimir";
    EFonts["Austin"] = "Austin";
})(EFonts || (EFonts = {}));
var ERooms;
(function(ERooms) {
    ERooms["BALCONY"] = "balcony";
    ERooms["KITCHEN"] = "kitchen";
    ERooms["TOILET"] = "toilet";
    ERooms["hall"] = "hall";
    ERooms["BEDROOM"] = "bedroom";
})(ERooms || (ERooms = {}));
var EBlocks;
(function(EBlocks) {
    EBlocks["ABOUT"] = "about";
    EBlocks["WELCOME"] = "welcome";
    EBlocks["ADVANTAGES"] = "advantages";
    EBlocks["CHESS"] = "chess";
    EBlocks["ROOM_SELECTOR"] = "roomSelector";
    EBlocks["GALLERY"] = "gallery";
    EBlocks["BUILDINGS"] = "buildings";
    EBlocks["LOCATION"] = "location";
    EBlocks["FOOTER"] = "footer";
})(EBlocks || (EBlocks = {}));
var ELang;
(function(ELang) {
    ELang["RUS"] = "rus";
})(ELang || (ELang = {}));


/***/ })

};
;