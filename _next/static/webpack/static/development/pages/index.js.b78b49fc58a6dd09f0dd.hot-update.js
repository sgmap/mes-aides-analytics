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







var _jsxFileName = "/home/thomas/repos/mes-aides-stats/next/pages/index.js";







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
      top: 50,
      right: 130,
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
      lineNumber: 69
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
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2975850379",
    __self: this
  }, ".chart.jsx-2975850379{height:300px;}.list.jsx-2975850379{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.cell.jsx-2975850379{width:400px;}h3.jsx-2975850379{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSG9CLEFBRzhCLEFBR0EsQUFLRCxBQUdILFNBQ2IsR0FIQSxDQVJBLDZEQUdtQix5REFDZSxtSEFDbEMiLCJmaWxlIjoiL2hvbWUvdGhvbWFzL3JlcG9zL21lcy1haWRlcy1zdGF0cy9uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NhdGVnb3JpY2FsQ29sb3JTY2hlbWVzfSBmcm9tICdAbml2by9jb2xvcnMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgc2NhbGVPcmRpbmFsIH0gZnJvbSAnZDMtc2NhbGUnXG5pbXBvcnQgeyBSZXNwb25zaXZlQmFyIH0gZnJvbSAnQG5pdm8vYmFyJ1xuXG5jb25zdCBjYXRNYXBwaW5nID0ge1xuICAgIHNob3c6IHsgY2F0OiAnQWZmaWNow6knIH0sXG4gICAgY2xpY2s6IHsgY2F0OiAnQ2xpcXXDqScgfSxcbiAgICBmb3JtOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdGb3JtdWxhaXJlJyB9LFxuICAgIHRlbGVzZXJ2aWNlOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdUw6lsw6lzZXJ2aWNlJyB9LFxuICAgIGluc3RydWN0aW9uczogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnSW5zdHJ1Y3Rpb25zJyB9LFxuICAgIGxpbms6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0xpZW4nIH0sXG4gICAgbXNhOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdNU0EnIH0sXG4gICAgJ3Nob3ctdW5leHBlY3RlZCc6IHsgY2F0OiAnSW5jb21wcmlzJ30sXG4gICAgY2xvc2U6IHsgY2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ0Zlcm3DqSd9LFxuICAgICdyZXRvdXItbG9nZW1lbnQnOiAge2NhdDogJ0V4cGxpcXXDqScsIG5hbWU6ICdSZXRvdXIgcGFnZSBsb2dlbWVudCd9LFxuICAgICdzaW11bGF0aW9uLWNhZic6ICB7Y2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ1NpbXVsYXRldXIgQ0FGJ30sXG4gICAgZW1haWw6IHsgY2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ0VtYWlsJ30sXG59XG5cbmNvbnN0IGNhdHMgPSBbXG4gICAgJ0FmZmljaMOpJyxcbiAgICAnQ2xpcXXDqScsXG4gICAgJ0FjdGlvbm7DqScsXG4gICAgJ0luY29tcHJpcycsXG4gICAgJ0V4cGxpcXXDqSdcbl1cbmNvbnN0IGNvbG9ycyA9IHNjYWxlT3JkaW5hbChjYXRlZ29yaWNhbENvbG9yU2NoZW1lcy5jYXRlZ29yeTEwKVxuXG5mdW5jdGlvbiBhcHBseShwcm9wLCBiYXNlLCBzaG91bGRTaG93KSB7XG4gICAgbGV0IHJlc3VsdCA9IGJhc2Uuc3VidGFibGUucmVkdWNlKChhY2N1bSwgdGFibGUpID0+IHtcbiAgICAgICAgaWYgKCFjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICAgIH1cbiAgICAgICAgYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XSA9IGFjY3VtW2NhdE1hcHBpbmdbdGFibGUubGFiZWxdLmNhdF0gfHwge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdE1hcHBpbmdbdGFibGUubGFiZWxdLmNhdFxuICAgICAgICB9XG4gICAgICAgIGFjY3VtW2NhdE1hcHBpbmdbdGFibGUubGFiZWxdLmNhdF1bdGFibGUubGFiZWxdID0gdGFibGVbcHJvcF1cbiAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgfSwge30pXG5cbiAgICBPYmplY3Qua2V5cyhzaG91bGRTaG93KS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZFNob3dba10pIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba11cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQpXG59XG5cbmNvbnN0IHNvdXJjZXMgPSB7XG4vLyAgICBuYl91bmlxX3Zpc2l0b3JzOiAnVmlzaXRldXIgdW5pcXVlJywgLy8gTm9uIGZvbmN0aW9ubmVsIGF2ZWMgbGVzIGRvbm7DqWVzIG1lbnN1ZWxsZXNcbiAgICBuYl92aXNpdHM6ICdWaXNpdGUnLFxuICAgIG5iX2V2ZW50czogJ8OJdsOobmVtZW50J1xufVxuXG5jb25zdCBwZXJpb2RzID0ge1xuICAgIGRheTogJ0hpZXInLFxuICAgIG1vbnRoOiAnTW9pcyBlbiBjb3Vycydcbn1cblxuLy8gbWFrZSBzdXJlIHBhcmVudCBjb250YWluZXIgaGF2ZSBhIGRlZmluZWQgaGVpZ2h0IHdoZW4gdXNpbmdcbi8vIHJlc3BvbnNpdmUgY29tcG9uZW50LCBvdGhlcndpc2UgaGVpZ2h0IHdpbGwgYmUgMCBhbmRcbi8vIG5vIGNoYXJ0IHdpbGwgYmUgcmVuZGVyZWQuXG4vLyB3ZWJzaXRlIGV4YW1wbGVzIHNob3djYXNlIG1hbnkgcHJvcGVydGllcyxcbi8vIHlvdSdsbCBvZnRlbiB1c2UganVzdCBhIGZldyBvZiB0aGVtLlxuY29uc3QgTXlSZXNwb25zaXZlQmFyID0gKHsgZGF0YSAvKiBzZWUgZGF0YSB0YWIgKi8gfSkgPT4gKFxuICAgIDxSZXNwb25zaXZlQmFyXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIGtleXM9e09iamVjdC5rZXlzKGNhdE1hcHBpbmcpfVxuICAgICAgICBpbmRleEJ5PVwiY2F0ZWdvcnlcIlxuICAgICAgICBtYXJnaW49e3sgdG9wOiA1MCwgcmlnaHQ6IDEzMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cbiAgICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgICBjb2xvcnM9eyh7IGlkIH0pID0+IGNvbG9ycyhpZCl9XG4gICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XG4gICAgICAgIGFuaW1hdGU9e2ZhbHNlfVxuICAgIC8+XG4pXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2JlbmVmaXRzLCBzZXRCZW5lZml0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKCdkYXknKTtcbiAgICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoJ25iX3Zpc2l0cycpO1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGNhdHMucmVkdWNlKChhY2N1bSwgYykgPT4ge1xuICAgICAgICBhY2N1bVtjXSA9IHRydWVcbiAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgfSwge30pKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHBlcmlvZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3RhdHMuZGF0YS5nb3V2LmZyL2luZGV4LnBocD9kYXRlPXllc3RlcmRheSZleHBhbmRlZD0xJmZpbHRlcl9saW1pdD01MCZmb3JtYXQ9SlNPTiZpZFNpdGU9OSZtZXRob2Q9RXZlbnRzLmdldE5hbWUmbW9kdWxlPUFQSSZwZXJpb2Q9JHtwZXJpb2R9YClcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgICBzZXRCZW5lZml0cyhqc29uKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNldEJlbmVmaXRzKFtdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoRGF0YShwZXJpb2QpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSB1c2VDYWxsYmFjayhlID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBmZXRjaERhdGEoZS50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgICBjb25zdCBoYW5kbGVTb3VyY2VDaGFuZ2UgPSB1c2VDYWxsYmFjayhlID0+IHtcbiAgICAgICAgc2V0U291cmNlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlU2hvd0NoYW5nZSA9IHVzZUNhbGxiYWNrKChjYXQsIHZhbHVlKSA9PiB7XG4gICAgICAgIHNldFNob3coey4uLnNob3csIFtjYXRdOiB2YWx1ZX0pXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNlbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIGRlIHLDqWbDqXJlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17cGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwZXJpb2RzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9PntwZXJpb2RzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj48bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2UgZGVzIGRvbm7DqWVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTb3VyY2VDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17c291cmNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2VzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9Pntzb3VyY2VzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdHMubWFwKGNhdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y2F0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3Nob3dbY2F0XX08aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd1tjYXRdfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTaG93Q2hhbmdlKGNhdCwgZS50YXJnZXQuY2hlY2tlZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjYXRNYXBwaW5nKS5tYXAoY2F0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRNYXBwaW5nW2NhdElkXS5jYXQgPT09IGNhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NhdElkfT48c3BhbiBzdHlsZT17e2NvbG9yOmNvbG9ycyhjYXRJZCl9fT7il7w8L3NwYW4+Jm5ic3A7e2NhdE1hcHBpbmdbY2F0SWRdLm5hbWUgfHwgY2F0TWFwcGluZ1tjYXRJZF0uY2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2JlbmVmaXRzLm1hcChiID0+IHtcbiAgICAgICAgICAgIGxldCBsID0gYi5sYWJlbFxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhcHBseShzb3VyY2UsIGIsIHNob3cpXG5cbiAgICAgICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17bH0gY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e2x9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE15UmVzcG9uc2l2ZUJhciBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2975850379" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2975850379" + " " + "cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "P\xE9riode de r\xE9f\xE9rence", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: handlePeriodChange,
    defaultValue: period,
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(periods).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, periods[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Source des donn\xE9es", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
    onChange: handleSourceChange,
    defaultValue: source,
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(sources).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, sources[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", {
    className: "jsx-2975850379",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, cats.map(function (cat) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
      key: cat,
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, show[cat], react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
      type: "checkbox",
      checked: show[cat],
      onChange: function onChange(e) {
        return handleShowChange(cat, e.target.checked);
      },
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }), cat)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(catMapping).map(function (catId) {
      if (catMapping[catId].cat === cat) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: catId,
          className: "jsx-2975850379",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          style: {
            color: _colors(catId)
          },
          className: "jsx-2975850379",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
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
      className: "jsx-2975850379" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
      className: "jsx-2975850379",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, l), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "jsx-2975850379" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MyResponsiveBar, {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b78b49fc58a6dd09f0dd.hot-update.js.map