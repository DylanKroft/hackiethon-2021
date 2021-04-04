webpackHotUpdate("main",{

/***/ "./src/components/AddTask.js":
/*!***********************************!*\
  !*** ./src/components/AddTask.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _AddFriend1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddFriend1.css */ "./src/components/AddFriend1.css");
/* harmony import */ var _AddFriend1_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddFriend1_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var easybase_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! easybase-react */ "./node_modules/easybase-react/dist/index.modern.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dylankroft/Documents/Coding/Projects/hackie/src/components/AddTask.js",
    _s = __webpack_require__.$Refresh$.signature();







const AddTask = ({
  email,
  loggedIn,
  displayAdd
}) => {
  _s();

  const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("");
  const {
    Frame,
    sync,
    configureFrame
  } = Object(easybase_react__WEBPACK_IMPORTED_MODULE_2__["useEasybase"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    configureFrame({
      limit: 20
    });
    sync();
  }, []);

  for (let i = 0; i < Frame().length; i++) {
    if (Frame()[i].name == email) {
      var data = Frame()[i];
    }
  }

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  const addTask = e => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");

    if (inputValue != "") {
      data.description = data.description + "," + inputValue;
      let arr = data.description.split(",").pop(0);
      sync();
    }

    displayAdd();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Heading, {
      children: "Add Task"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(FormBox, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
        onSubmit: addTask,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          onChange: onChangeHandler,
          value: inputValue,
          autocomplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "primary__btn",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

_s(AddTask, "gnu1cZuzmo9LeSuCQBumj9qmEeA=", false, function () {
  return [easybase_react__WEBPACK_IMPORTED_MODULE_2__["useEasybase"]];
});

_c = AddTask;
/* harmony default export */ __webpack_exports__["default"] = (AddTask);
const FormBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 40px;


    @media screen and (max-width: 1000px) {
     {
         width: 100%;
    }
`;
_c2 = FormBox;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    width: 45%;
    height: 200px;
    background-color: #f0d890;
    position: absolute;
    z-index: 1000;
    top: 35%;
    left: 2.5%;
    right: 2.5%;
    border-radius: 10px 10px 10px 10px;
    border: 2px solid white;
    -webkit-box-shadow: 0px 0px 27px -15px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 27px -15px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 27px -15px rgba(0,0,0,0.75);




    @media screen and (max-width: 1000px) {
     {
         width: 95%;
         left: 2.5%;
        right: 2.5%;
    }
`;
_c3 = Container;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
    font-size: 2em;
    font-weight: 800;
    width: 50%;
    min-width: 250px;
    line-height: 3em;
    color: white;
    margin-left: 40px;
`;
_c4 = Heading;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "AddTask");
__webpack_require__.$Refresh$.register(_c2, "FormBox");
__webpack_require__.$Refresh$.register(_c3, "Container");
__webpack_require__.$Refresh$.register(_c4, "Heading");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.8da0665266dde440817e.hot-update.js.map