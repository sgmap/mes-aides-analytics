webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.esm.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! iframe-resizer */ "./node_modules/iframe-resizer/index.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "/home/thomas/repos/mes-aides-stats/next/pages/index.js";








console.log(iframe_resizer__WEBPACK_IMPORTED_MODULE_13__["iframeResizerContentWindow"]);
var catMapping = {
  show: {
    cat: 'Affiché'
  },
  click: {
    cat: 'Cliqué'
  },
  form: {
    cat: 'Actionné',
    name: 'Formulaire'
  },
  teleservice: {
    cat: 'Actionné',
    name: 'Téléservice'
  },
  instructions: {
    cat: 'Actionné',
    name: 'Instructions'
  },
  link: {
    cat: 'Actionné',
    name: 'Lien'
  },
  msa: {
    cat: 'Actionné',
    name: 'MSA'
  },
  'show-unexpected': {
    cat: 'Incompris'
  },
  close: {
    cat: 'Expliqué',
    name: 'Fermé'
  },
  'retour-logement': {
    cat: 'Expliqué',
    name: 'Retour page logement'
  },
  'simulation-caf': {
    cat: 'Expliqué',
    name: 'Simulateur CAF'
  },
  email: {
    cat: 'Expliqué',
    name: 'Email'
  }
};
var cats = ['Affiché', 'Cliqué', 'Actionné', 'Incompris', 'Expliqué'];

var _colors = Object(d3_scale__WEBPACK_IMPORTED_MODULE_11__["scaleOrdinal"])(_nivo_colors__WEBPACK_IMPORTED_MODULE_9__["categoricalColorSchemes"].category10);

function apply(prop, base, shouldShow) {
  var result = base.subtable.reduce(function (accum, table) {
    if (!catMapping[table.label]) {
      return accum;
    }

    accum[catMapping[table.label].cat] = accum[catMapping[table.label].cat] || {
      category: catMapping[table.label].cat
    };
    accum[catMapping[table.label].cat][table.label] = table[prop];
    return accum;
  }, {});

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(shouldShow).forEach(function (k) {
    if (!shouldShow[k]) {
      delete result[k];
    }
  });

  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_5___default()(result);
}

var sources = {
  //    nb_uniq_visitors: 'Visiteur unique', // Non fonctionnel avec les données mensuelles
  nb_visits: 'Visite',
  nb_events: 'Évènement'
};
var periods = {
  day: 'Hier',
  month: 'Mois en cours' // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.

};

var MyResponsiveBar = function MyResponsiveBar(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_12__["ResponsiveBar"], {
    data: data,
    keys: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(catMapping),
    indexBy: "category",
    margin: {
      top: 15,
      right: 10,
      bottom: 50,
      left: 60
    },
    padding: 0.3,
    colors: function colors(_ref2) {
      var id = _ref2.id;
      return _colors(id);
    },
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    animate: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  });
};

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      benefits = _useState2[0],
      setBenefits = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('day'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      period = _useState4[0],
      setPeriod = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])('nb_visits'),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      source = _useState6[0],
      setSource = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(cats.reduce(function (accum, c) {
    accum[c] = true;
    return accum;
  }, {})),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      show = _useState8[0],
      setShow = _useState8[1];

  function fetchData(_x) {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(period) {
      var res, json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://stats.data.gouv.fr/index.php?date=yesterday&expanded=1&filter_limit=50&format=JSON&idSite=9&method=Events.getName&module=API&period=".concat(period));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return res.json();

            case 6:
              json = _context.sent;
              setBenefits(json);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setBenefits([]);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    fetchData(period);
  }, []);
  var handlePeriodChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setPeriod(e.target.value);
    fetchData(e.target.value);
  });
  var handleSourceChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (e) {
    setSource(e.target.value);
  });
  var handleShowChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(function (cat, value) {
    setShow(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, show, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cat, value)));
  });
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1655332064",
    __self: this
  }, ".chart.jsx-1655332064{height:300px;}.list.jsx-1655332064{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.cell.jsx-1655332064{width:300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}h3.jsx-1655332064{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSG9CLEFBRzhCLEFBR0EsQUFJRCxBQU1ILFNBQ2IsR0FOaUIsQ0FQakIsNkRBR21CLFlBS08sNkNBSjFCLGlDQUtrQyxtSEFDbEMiLCJmaWxlIjoiL2hvbWUvdGhvbWFzL3JlcG9zL21lcy1haWRlcy1zdGF0cy9uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NhdGVnb3JpY2FsQ29sb3JTY2hlbWVzfSBmcm9tICdAbml2by9jb2xvcnMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgc2NhbGVPcmRpbmFsIH0gZnJvbSAnZDMtc2NhbGUnXG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJ1xuaW1wb3J0IHsgaWZyYW1lUmVzaXplckNvbnRlbnRXaW5kb3cgfSBmcm9tICdpZnJhbWUtcmVzaXplcidcblxuY29uc29sZS5sb2coaWZyYW1lUmVzaXplckNvbnRlbnRXaW5kb3cpXG5cbmNvbnN0IGNhdE1hcHBpbmcgPSB7XG4gICAgc2hvdzogeyBjYXQ6ICdBZmZpY2jDqScgfSxcbiAgICBjbGljazogeyBjYXQ6ICdDbGlxdcOpJyB9LFxuICAgIGZvcm06IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0Zvcm11bGFpcmUnIH0sXG4gICAgdGVsZXNlcnZpY2U6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ1TDqWzDqXNlcnZpY2UnIH0sXG4gICAgaW5zdHJ1Y3Rpb25zOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdJbnN0cnVjdGlvbnMnIH0sXG4gICAgbGluazogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnTGllbicgfSxcbiAgICBtc2E6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ01TQScgfSxcbiAgICAnc2hvdy11bmV4cGVjdGVkJzogeyBjYXQ6ICdJbmNvbXByaXMnfSxcbiAgICBjbG9zZTogeyBjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnRmVybcOpJ30sXG4gICAgJ3JldG91ci1sb2dlbWVudCc6ICB7Y2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ1JldG91ciBwYWdlIGxvZ2VtZW50J30sXG4gICAgJ3NpbXVsYXRpb24tY2FmJzogIHtjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnU2ltdWxhdGV1ciBDQUYnfSxcbiAgICBlbWFpbDogeyBjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnRW1haWwnfSxcbn1cblxuY29uc3QgY2F0cyA9IFtcbiAgICAnQWZmaWNow6knLFxuICAgICdDbGlxdcOpJyxcbiAgICAnQWN0aW9ubsOpJyxcbiAgICAnSW5jb21wcmlzJyxcbiAgICAnRXhwbGlxdcOpJ1xuXVxuY29uc3QgY29sb3JzID0gc2NhbGVPcmRpbmFsKGNhdGVnb3JpY2FsQ29sb3JTY2hlbWVzLmNhdGVnb3J5MTApXG5cbmZ1bmN0aW9uIGFwcGx5KHByb3AsIGJhc2UsIHNob3VsZFNob3cpIHtcbiAgICBsZXQgcmVzdWx0ID0gYmFzZS5zdWJ0YWJsZS5yZWR1Y2UoKGFjY3VtLCB0YWJsZSkgPT4ge1xuICAgICAgICBpZiAoIWNhdE1hcHBpbmdbdGFibGUubGFiZWxdKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgfVxuICAgICAgICBhY2N1bVtjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXS5jYXRdID0gYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XSB8fCB7XG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XG4gICAgICAgIH1cbiAgICAgICAgYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XVt0YWJsZS5sYWJlbF0gPSB0YWJsZVtwcm9wXVxuICAgICAgICByZXR1cm4gYWNjdW1cbiAgICB9LCB7fSlcblxuICAgIE9iamVjdC5rZXlzKHNob3VsZFNob3cpLmZvckVhY2goayA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkU2hvd1trXSkge1xuICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrXVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlc3VsdClcbn1cblxuY29uc3Qgc291cmNlcyA9IHtcbi8vICAgIG5iX3VuaXFfdmlzaXRvcnM6ICdWaXNpdGV1ciB1bmlxdWUnLCAvLyBOb24gZm9uY3Rpb25uZWwgYXZlYyBsZXMgZG9ubsOpZXMgbWVuc3VlbGxlc1xuICAgIG5iX3Zpc2l0czogJ1Zpc2l0ZScsXG4gICAgbmJfZXZlbnRzOiAnw4l2w6huZW1lbnQnXG59XG5cbmNvbnN0IHBlcmlvZHMgPSB7XG4gICAgZGF5OiAnSGllcicsXG4gICAgbW9udGg6ICdNb2lzIGVuIGNvdXJzJ1xufVxuXG4vLyBtYWtlIHN1cmUgcGFyZW50IGNvbnRhaW5lciBoYXZlIGEgZGVmaW5lZCBoZWlnaHQgd2hlbiB1c2luZ1xuLy8gcmVzcG9uc2l2ZSBjb21wb25lbnQsIG90aGVyd2lzZSBoZWlnaHQgd2lsbCBiZSAwIGFuZFxuLy8gbm8gY2hhcnQgd2lsbCBiZSByZW5kZXJlZC5cbi8vIHdlYnNpdGUgZXhhbXBsZXMgc2hvd2Nhc2UgbWFueSBwcm9wZXJ0aWVzLFxuLy8geW91J2xsIG9mdGVuIHVzZSBqdXN0IGEgZmV3IG9mIHRoZW0uXG5jb25zdCBNeVJlc3BvbnNpdmVCYXIgPSAoeyBkYXRhIC8qIHNlZSBkYXRhIHRhYiAqLyB9KSA9PiAoXG4gICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAga2V5cz17T2JqZWN0LmtleXMoY2F0TWFwcGluZyl9XG4gICAgICAgIGluZGV4Qnk9XCJjYXRlZ29yeVwiXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgY29sb3JzPXsoeyBpZCB9KSA9PiBjb2xvcnMoaWQpfVxuICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICBhbmltYXRlPXtmYWxzZX1cbiAgICAvPlxuKVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtiZW5lZml0cywgc2V0QmVuZWZpdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwZXJpb2QsIHNldFBlcmlvZF0gPSB1c2VTdGF0ZSgnZGF5Jyk7XG4gICAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKCduYl92aXNpdHMnKTtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShjYXRzLnJlZHVjZSgoYWNjdW0sIGMpID0+IHtcbiAgICAgICAgYWNjdW1bY10gPSB0cnVlXG4gICAgICAgIHJldHVybiBhY2N1bVxuICAgIH0sIHt9KSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShwZXJpb2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N0YXRzLmRhdGEuZ291di5mci9pbmRleC5waHA/ZGF0ZT15ZXN0ZXJkYXkmZXhwYW5kZWQ9MSZmaWx0ZXJfbGltaXQ9NTAmZm9ybWF0PUpTT04maWRTaXRlPTkmbWV0aG9kPUV2ZW50cy5nZXROYW1lJm1vZHVsZT1BUEkmcGVyaW9kPSR7cGVyaW9kfWApXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICAgICAgc2V0QmVuZWZpdHMoanNvbilcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZXRCZW5lZml0cyhbXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaERhdGEocGVyaW9kKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgZmV0Y2hEYXRhKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlU291cmNlQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgICAgIHNldFNvdXJjZShlLnRhcmdldC52YWx1ZSlcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZVNob3dDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2F0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRTaG93KHsuLi5zaG93LCBbY2F0XTogdmFsdWV9KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNlbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBMZXMgZ3JhcGhpcXVlcyBzdWl2YW50cyByZXByw6lzZW50ZW50IGxlcyB0YXV4IGRlIGNvbnZlcnNpb24gc3VyIGxhIHBhZ2UgZGUgcHLDqXNlbnRhdGlvbiBkZSByw6lzdWx0YXRzIHN1ciBsZSBzaW11bGF0ZXVyLlxuICAgICAgICAgICAgICAgIERpZmbDqXJlbnRzIMOpdsOobmVtZW50cyBzb250IGNhcHR1csOpcyBwb3VyIG1pZXV4IMOpdmFsdWVyIGwnaW1wYWN0IGR1IHNpbXVsYXRldXIgc3VyIGxlIG5vbi1yZWNvdXJzIGF1eCBkaXNwb3NpdGlmcyBwcsOpc2VudMOpcyBhdXggdXNhZ2Vycy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIGRlIHLDqWbDqXJlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17cGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwZXJpb2RzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9PntwZXJpb2RzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2UgZGVzIGRvbm7DqWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTb3VyY2VDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17c291cmNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2VzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9Pntzb3VyY2VzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdHMubWFwKGNhdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y2F0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3Nob3dbY2F0XX08aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd1tjYXRdfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTaG93Q2hhbmdlKGNhdCwgZS50YXJnZXQuY2hlY2tlZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjYXRNYXBwaW5nKS5tYXAoY2F0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRNYXBwaW5nW2NhdElkXS5jYXQgPT09IGNhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NhdElkfT48c3BhbiBzdHlsZT17e2NvbG9yOmNvbG9ycyhjYXRJZCl9fT7il7w8L3NwYW4+Jm5ic3A7e2NhdE1hcHBpbmdbY2F0SWRdLm5hbWUgfHwgY2F0TWFwcGluZ1tjYXRJZF0uY2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2JlbmVmaXRzLm1hcChiID0+IHtcbiAgICAgICAgICAgIGxldCBsID0gYi5sYWJlbFxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhcHBseShzb3VyY2UsIGIsIHNob3cpXG5cbiAgICAgICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bH0gY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e2x9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE15UmVzcG9uc2l2ZUJhciBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Les graphiques suivants repr\xE9sentent les taux de conversion sur la page de pr\xE9sentation de r\xE9sultats sur le simulateur. Diff\xE9rents \xE9v\xE8nements sont captur\xE9s pour mieux \xE9valuer l'impact du simulateur sur le non-recours aux dispositifs pr\xE9sent\xE9s aux usagers."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064" + " " + "cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "P\xE9riode de r\xE9f\xE9rence", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: handlePeriodChange,
    defaultValue: period,
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(periods).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, periods[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Source des donn\xE9es", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: handleSourceChange,
    defaultValue: source,
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(sources).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, sources[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
    className: "jsx-1655332064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, cats.map(function (cat) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
      key: cat,
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, show[cat], react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
      type: "checkbox",
      checked: show[cat],
      onChange: function onChange(e) {
        return handleShowChange(cat, e.target.checked);
      },
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), cat)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(catMapping).map(function (catId) {
      if (catMapping[catId].cat === cat) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: catId,
          className: "jsx-1655332064",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          style: {
            color: _colors(catId)
          },
          className: "jsx-1655332064",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "\u25FC"), "\xA0", catMapping[catId].name || catMapping[catId].cat);
      }
    })));
  })))), benefits.map(function (b) {
    var l = b.label;
    var data = apply(source, b, show);

    if (!data.length) {
      return;
    }

    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      key: l,
      className: "jsx-1655332064" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
      className: "jsx-1655332064",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, l), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "jsx-1655332064" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyResponsiveBar, {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f6bd8a57476077771abf.hot-update.js.map