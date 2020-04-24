webpackHotUpdate("static/development/pages/ab.js",{

/***/ "./pages/ab.js":
/*!*********************!*\
  !*** ./pages/ab.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jstat */ "./node_modules/jstat/dist/jstat.js");
/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jstat__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.esm.js");





var _jsxFileName = "/home/thomas/repos/mes-aides-stats/next/pages/ab.js";





 //import { scaleOrdinal } from 'd3-scale'


var steps = ['/foyer/demandeur', '/foyer/enfants', '/foyer/conjoint', '/foyer/logement', {
  angularjs: '/foyer/ressources/0/types',
  vuejs: '/foyer/demandeur/ressources/types'
}, {
  angularjs: '/foyer/ressources/0/montants',
  vuejs: '/foyer/demandeur/ressources/montants'
}, '/foyer/pensions-alimentaires', '/foyer/resultat'];

function mappy(d) {
  return d.reduce(function (a, v) {
    a[v.label] = v;
    return a;
  }, {});
}

var test = {
  angularjs: 'AngularJS',
  vuejs: 'VueJS'
};
test = {
  angularjs: 'period=week&date=2019-11-20',
  vuejs: 'period=week&date=2019-12-11'
};
var periodIndicator = ['period=week&date=2019-11-22', 'period=day&date=yesterday', 'period=week&date=yesterday', 'period=day&date=2019-11-25', 'period=day&date=2019-11-27', 'period=day&date=2019-11-25'][4];

function getDataUrl(key) {
  return "https://stats.data.gouv.fr/index.php?".concat(periodIndicator, "&filter_limit=100&flat=1&format=JSON&idSite=9&method=Actions.getPageUrls&module=API&segment=customVariableValue2%3D%3D").concat(key);
  return "https://stats.data.gouv.fr/index.php?".concat(periodIndicator, "&filter_limit=100&flat=1&format=JSON&idSite=9&method=Actions.getPageUrls&module=API&segment=customVariableValue2%3D%3D").concat(key);
}

function getDataUrlForPeriod(period) {
  return "https://stats.data.gouv.fr/index.php?".concat(period, "&filter_limit=100&flat=1&format=JSON&idSite=9&method=Actions.getPageUrls&module=API");
}

function getIndicator(p1, n1, p2, n2) {
  try {
    return jstat__WEBPACK_IMPORTED_MODULE_9__["jStat"].fn.oneSidedDifferenceOfProportions(Math.min(1, p1), n1, Math.min(1, p2), n2);
  } catch (e) {
    console.error(e);
    return NaN;
  }
}

function ABPAge() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var resA, angularjs, resB, vuejs, source, keys, results;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(getDataUrlForPeriod(test.angularjs));

            case 3:
              resA = _context.sent;
              _context.t0 = mappy;
              _context.next = 7;
              return resA.json();

            case 7:
              _context.t1 = _context.sent;
              angularjs = (0, _context.t0)(_context.t1);
              _context.next = 11;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(getDataUrlForPeriod(test.vuejs));

            case 11:
              resB = _context.sent;
              _context.t2 = mappy;
              _context.next = 15;
              return resB.json();

            case 15:
              _context.t3 = _context.sent;
              vuejs = (0, _context.t2)(_context.t3);
              console.log({
                angularjs: angularjs,
                vuejs: vuejs
              });
              source = {
                angularjs: angularjs,
                vuejs: vuejs
              };
              keys = ['angularjs', 'vuejs'];
              results = steps.reduce(function (accum, step) {
                var values = keys.reduce(function (result, k) {
                  var ref = source[k][step[k] || step];
                  var value = ref && (ref.sum_daily_nb_uniq_visitors || ref.nb_uniq_visitors) || 0;
                  result[k + '-n'] = value;

                  if (accum.previous[k] !== undefined) {
                    result[k + '-p'] = accum.previous[k] ? Math.min(1, value / accum.previous[k]) : 0;
                    result[k + '-pr'] = Math.round(result[k + '-p'] * 1000) / 10;
                    result[k + '-prc'] = Math.round(result[k + '-n'] / accum.first[k] * 1000) / 10;
                  } else {
                    accum.first[k] = value;
                  }

                  accum.previous[k] = value;
                  return result;
                }, {});
                var indicator = Math.round(getIndicator(values['vuejs-p'], values['vuejs-n'], values['angularjs-p'], values['angularjs-n']) * 1000) / 10;
                accum.results.push(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
                  indicator: indicator,
                  step: (step.vuejs || step).slice(7)
                }));
                return accum;
              }, {
                results: [],
                previous: {},
                first: {}
              }).results;
              setValues(results);
              _context.next = 28;
              break;

            case 24:
              _context.prev = 24;
              _context.t4 = _context["catch"](0);
              console.error(_context.t4);
              setValues([]);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 24]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    fetchData();
  }, []);
  var displayKeys = [{
    name: 'Conversions',
    keys: ['angularjs-pr', 'vuejs-pr', 'angularjs-prc', 'vuejs-prc']
  }, {
    name: 'Pertinence des écart',
    keys: ['indicator']
  }, {
    name: 'Nombre AngularJS',
    keys: ['angularjs-n']
  }, {
    name: 'Nombre VueJS',
    keys: ['vuejs-n']
  }];
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-864572366",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "864572366",
    __self: this
  }, ".chart.jsx-864572366{height:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9hYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSndCLEFBR2tDLGFBQ2pCIiwiZmlsZSI6Ii9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9hYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjYXRlZ29yaWNhbENvbG9yU2NoZW1lc30gZnJvbSAnQG5pdm8vY29sb3JzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IGpTdGF0IH0gZnJvbSAnanN0YXQnXG4vL2ltcG9ydCB7IHNjYWxlT3JkaW5hbCB9IGZyb20gJ2QzLXNjYWxlJ1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2JhcidcblxudmFyIHN0ZXBzID0gW1xuICAnL2ZveWVyL2RlbWFuZGV1cicsXG4gICcvZm95ZXIvZW5mYW50cycsXG4gICcvZm95ZXIvY29uam9pbnQnLFxuICAnL2ZveWVyL2xvZ2VtZW50JyxcbiAge1xuICAgIGFuZ3VsYXJqczonL2ZveWVyL3Jlc3NvdXJjZXMvMC90eXBlcycsXG4gICAgdnVlanM6ICcvZm95ZXIvZGVtYW5kZXVyL3Jlc3NvdXJjZXMvdHlwZXMnLFxuICB9LFxuICB7XG4gICAgYW5ndWxhcmpzOicvZm95ZXIvcmVzc291cmNlcy8wL21vbnRhbnRzJyxcbiAgICB2dWVqczogJy9mb3llci9kZW1hbmRldXIvcmVzc291cmNlcy9tb250YW50cycsXG4gIH0sXG4gICcvZm95ZXIvcGVuc2lvbnMtYWxpbWVudGFpcmVzJyxcbiAgJy9mb3llci9yZXN1bHRhdCdcbl1cblxuZnVuY3Rpb24gbWFwcHkoZCkge1xuICAgIHJldHVybiBkLnJlZHVjZSgoYSwgdikgPT4ge1xuICAgICAgICBhW3YubGFiZWxdID0gdlxuICAgICAgICByZXR1cm4gYVxuICAgIH0sIHt9KVxufVxuXG5sZXQgdGVzdCA9IHtcbiAgICBhbmd1bGFyanM6ICdBbmd1bGFySlMnLFxuICAgIHZ1ZWpzOiAnVnVlSlMnXG59XG5cbnRlc3QgPSB7XG4gICAgYW5ndWxhcmpzOiAncGVyaW9kPXdlZWsmZGF0ZT0yMDE5LTExLTIwJyxcbiAgICB2dWVqczogJ3BlcmlvZD13ZWVrJmRhdGU9MjAxOS0xMi0xMSdcbn1cblxuY29uc3QgcGVyaW9kSW5kaWNhdG9yID0gW1xuICAgICdwZXJpb2Q9d2VlayZkYXRlPTIwMTktMTEtMjInLFxuICAgICdwZXJpb2Q9ZGF5JmRhdGU9eWVzdGVyZGF5JyxcbiAgICAncGVyaW9kPXdlZWsmZGF0ZT15ZXN0ZXJkYXknLFxuICAgICdwZXJpb2Q9ZGF5JmRhdGU9MjAxOS0xMS0yNScsXG4gICAgJ3BlcmlvZD1kYXkmZGF0ZT0yMDE5LTExLTI3JyxcbiAgICAncGVyaW9kPWRheSZkYXRlPTIwMTktMTEtMjUnLFxuICAgIF1bNF1cblxuXG5mdW5jdGlvbiBnZXREYXRhVXJsKGtleSkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9zdGF0cy5kYXRhLmdvdXYuZnIvaW5kZXgucGhwPyR7cGVyaW9kSW5kaWNhdG9yfSZmaWx0ZXJfbGltaXQ9MTAwJmZsYXQ9MSZmb3JtYXQ9SlNPTiZpZFNpdGU9OSZtZXRob2Q9QWN0aW9ucy5nZXRQYWdlVXJscyZtb2R1bGU9QVBJJnNlZ21lbnQ9Y3VzdG9tVmFyaWFibGVWYWx1ZTIlM0QlM0Qke2tleX1gXG4gICAgcmV0dXJuIGBodHRwczovL3N0YXRzLmRhdGEuZ291di5mci9pbmRleC5waHA/JHtwZXJpb2RJbmRpY2F0b3J9JmZpbHRlcl9saW1pdD0xMDAmZmxhdD0xJmZvcm1hdD1KU09OJmlkU2l0ZT05Jm1ldGhvZD1BY3Rpb25zLmdldFBhZ2VVcmxzJm1vZHVsZT1BUEkmc2VnbWVudD1jdXN0b21WYXJpYWJsZVZhbHVlMiUzRCUzRCR7a2V5fWBcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YVVybEZvclBlcmlvZChwZXJpb2QpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vc3RhdHMuZGF0YS5nb3V2LmZyL2luZGV4LnBocD8ke3BlcmlvZH0mZmlsdGVyX2xpbWl0PTEwMCZmbGF0PTEmZm9ybWF0PUpTT04maWRTaXRlPTkmbWV0aG9kPUFjdGlvbnMuZ2V0UGFnZVVybHMmbW9kdWxlPUFQSWBcbn1cblxuZnVuY3Rpb24gZ2V0SW5kaWNhdG9yKHAxLCBuMSwgcDIsIG4yKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGpTdGF0LmZuLm9uZVNpZGVkRGlmZmVyZW5jZU9mUHJvcG9ydGlvbnMoXG4gICAgICAgICAgICBNYXRoLm1pbigxLHAxKSwgbjEsIE1hdGgubWluKDEsIHAyKSwgbjJcbiAgICAgICAgKVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiBOYU5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIEFCUEFnZSgpIHtcbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc0EgPSBhd2FpdCBmZXRjaChnZXREYXRhVXJsRm9yUGVyaW9kKHRlc3QuYW5ndWxhcmpzKSlcbiAgICAgICAgICAgIGNvbnN0IGFuZ3VsYXJqcyA9IG1hcHB5KGF3YWl0IHJlc0EuanNvbigpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNCID0gYXdhaXQgZmV0Y2goZ2V0RGF0YVVybEZvclBlcmlvZCh0ZXN0LnZ1ZWpzKSlcbiAgICAgICAgICAgIGNvbnN0IHZ1ZWpzID0gbWFwcHkoYXdhaXQgcmVzQi5qc29uKCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7YW5ndWxhcmpzLCB2dWVqc30pXG5cbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IHthbmd1bGFyanMsIHZ1ZWpzfVxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFsnYW5ndWxhcmpzJywgJ3Z1ZWpzJ11cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IHN0ZXBzLnJlZHVjZSgoYWNjdW0sIHN0ZXApID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0ga2V5cy5yZWR1Y2UoKHJlc3VsdCwgaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBzb3VyY2Vba11bc3RlcFtrXSB8fCBzdGVwXVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlZiAmJiAocmVmLnN1bV9kYWlseV9uYl91bmlxX3Zpc2l0b3JzIHx8IHJlZi5uYl91bmlxX3Zpc2l0b3JzKSB8fCAwXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrICsgJy1uJ10gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjdW0ucHJldmlvdXNba10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2sgKyAnLXAnXSA9IGFjY3VtLnByZXZpb3VzW2tdID8gTWF0aC5taW4oMSwgdmFsdWUgLyBhY2N1bS5wcmV2aW91c1trXSkgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbayArICctcHInXSA9IE1hdGgucm91bmQocmVzdWx0W2sgKyAnLXAnXSAqIDEwMDApLzEwXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbayArICctcHJjJ10gPSBNYXRoLnJvdW5kKHJlc3VsdFtrICsgJy1uJ10gLyBhY2N1bS5maXJzdFtrXSAqIDEwMDApLzEwXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2N1bS5maXJzdFtrXSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWNjdW0ucHJldmlvdXNba10gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAgICAgfSwge30pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBNYXRoLnJvdW5kKGdldEluZGljYXRvcihcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyd2dWVqcy1wJ10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1sndnVlanMtbiddLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJ2FuZ3VsYXJqcy1wJ10sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1snYW5ndWxhcmpzLW4nXSxcbiAgICAgICAgICAgICAgICApICogMTAwMCkgLyAxMFxuICAgICAgICAgICAgICAgIGFjY3VtLnJlc3VsdHMucHVzaCh7Li4udmFsdWVzLCBpbmRpY2F0b3IsIHN0ZXA6IChzdGVwLnZ1ZWpzIHx8IHN0ZXApLnNsaWNlKDcpfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICAgICAgfSwgeyByZXN1bHRzOiBbXSwgcHJldmlvdXM6IHt9LCBmaXJzdDoge30gfSkucmVzdWx0c1xuXG4gICAgICAgICAgICBzZXRWYWx1ZXMocmVzdWx0cylcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICAgICAgc2V0VmFsdWVzKFtdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBkaXNwbGF5S2V5cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0NvbnZlcnNpb25zJyxcbiAgICAgICAgICAgIGtleXM6IFsnYW5ndWxhcmpzLXByJywgJ3Z1ZWpzLXByJywgJ2FuZ3VsYXJqcy1wcmMnLCAndnVlanMtcHJjJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQZXJ0aW5lbmNlIGRlcyDDqWNhcnQnLFxuICAgICAgICAgICAga2V5czogWydpbmRpY2F0b3InXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ05vbWJyZSBBbmd1bGFySlMnLFxuICAgICAgICAgICAga2V5czogWydhbmd1bGFyanMtbiddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTm9tYnJlIFZ1ZUpTJyxcbiAgICAgICAgICAgIGtleXM6IFsndnVlanMtbiddLFxuICAgICAgICB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPGgxPlN0YXRzIEEvQjwvaDE+XG4gICAgICAgICAgICB7ZGlzcGxheUtleXMubWFwKChkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntkLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3ZhbHVlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtkLmtleXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBNb2RlPVwiZ3JvdXBlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhCeT1cInN0ZXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQUJQQWdlO1xuIl19 */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/ab.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-864572366",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Stats A/B"), displayKeys.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-864572366",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
      className: "jsx-864572366",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, d.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      key: i,
      className: "jsx-864572366" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_10__["ResponsiveBar"], {
      data: values,
      keys: d.keys,
      groupMode: "grouped",
      indexBy: "step",
      margin: {
        top: 15,
        right: 10,
        bottom: 50,
        left: 60
      },
      padding: 0.3,
      borderColor: {
        from: 'color',
        modifiers: [['darker', 1.6]]
      },
      animate: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("pre", {
    className: "jsx-864572366",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(values, null, 2)));
}

/* harmony default export */ __webpack_exports__["default"] = (ABPAge);

/***/ })

})
//# sourceMappingURL=ab.js.aaeb268d421949a35275.hot-update.js.map