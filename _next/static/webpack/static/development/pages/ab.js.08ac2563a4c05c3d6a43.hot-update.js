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
  angularjs: 'period=day&date=2019-11-20',
  vuejs: 'period=day&date=2019-12-11'
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
  }, ".chart.jsx-864572366{height:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9hYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSndCLEFBR2tDLGFBQ2pCIiwiZmlsZSI6Ii9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9hYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjYXRlZ29yaWNhbENvbG9yU2NoZW1lc30gZnJvbSAnQG5pdm8vY29sb3JzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IGpTdGF0IH0gZnJvbSAnanN0YXQnXG4vL2ltcG9ydCB7IHNjYWxlT3JkaW5hbCB9IGZyb20gJ2QzLXNjYWxlJ1xuaW1wb3J0IHsgUmVzcG9uc2l2ZUJhciB9IGZyb20gJ0BuaXZvL2JhcidcblxudmFyIHN0ZXBzID0gW1xuICAnL2ZveWVyL2RlbWFuZGV1cicsXG4gICcvZm95ZXIvZW5mYW50cycsXG4gICcvZm95ZXIvY29uam9pbnQnLFxuICAnL2ZveWVyL2xvZ2VtZW50JyxcbiAge1xuICAgIGFuZ3VsYXJqczonL2ZveWVyL3Jlc3NvdXJjZXMvMC90eXBlcycsXG4gICAgdnVlanM6ICcvZm95ZXIvZGVtYW5kZXVyL3Jlc3NvdXJjZXMvdHlwZXMnLFxuICB9LFxuICB7XG4gICAgYW5ndWxhcmpzOicvZm95ZXIvcmVzc291cmNlcy8wL21vbnRhbnRzJyxcbiAgICB2dWVqczogJy9mb3llci9kZW1hbmRldXIvcmVzc291cmNlcy9tb250YW50cycsXG4gIH0sXG4gICcvZm95ZXIvcGVuc2lvbnMtYWxpbWVudGFpcmVzJyxcbiAgJy9mb3llci9yZXN1bHRhdCdcbl1cblxuZnVuY3Rpb24gbWFwcHkoZCkge1xuICAgIHJldHVybiBkLnJlZHVjZSgoYSwgdikgPT4ge1xuICAgICAgICBhW3YubGFiZWxdID0gdlxuICAgICAgICByZXR1cm4gYVxuICAgIH0sIHt9KVxufVxuXG5sZXQgdGVzdCA9IHtcbiAgICBhbmd1bGFyanM6ICdBbmd1bGFySlMnLFxuICAgIHZ1ZWpzOiAnVnVlSlMnXG59XG5cbnRlc3QgPSB7XG4gICAgYW5ndWxhcmpzOiAncGVyaW9kPWRheSZkYXRlPTIwMTktMTEtMjAnLFxuICAgIHZ1ZWpzOiAncGVyaW9kPWRheSZkYXRlPTIwMTktMTItMTEnXG59XG5cbmNvbnN0IHBlcmlvZEluZGljYXRvciA9IFtcbiAgICAncGVyaW9kPXdlZWsmZGF0ZT0yMDE5LTExLTIyJyxcbiAgICAncGVyaW9kPWRheSZkYXRlPXllc3RlcmRheScsXG4gICAgJ3BlcmlvZD13ZWVrJmRhdGU9eWVzdGVyZGF5JyxcbiAgICAncGVyaW9kPWRheSZkYXRlPTIwMTktMTEtMjUnLFxuICAgICdwZXJpb2Q9ZGF5JmRhdGU9MjAxOS0xMS0yNycsXG4gICAgJ3BlcmlvZD1kYXkmZGF0ZT0yMDE5LTExLTI1JyxcbiAgICBdWzRdXG5cblxuZnVuY3Rpb24gZ2V0RGF0YVVybChrZXkpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vc3RhdHMuZGF0YS5nb3V2LmZyL2luZGV4LnBocD8ke3BlcmlvZEluZGljYXRvcn0mZmlsdGVyX2xpbWl0PTEwMCZmbGF0PTEmZm9ybWF0PUpTT04maWRTaXRlPTkmbWV0aG9kPUFjdGlvbnMuZ2V0UGFnZVVybHMmbW9kdWxlPUFQSSZzZWdtZW50PWN1c3RvbVZhcmlhYmxlVmFsdWUyJTNEJTNEJHtrZXl9YFxuICAgIHJldHVybiBgaHR0cHM6Ly9zdGF0cy5kYXRhLmdvdXYuZnIvaW5kZXgucGhwPyR7cGVyaW9kSW5kaWNhdG9yfSZmaWx0ZXJfbGltaXQ9MTAwJmZsYXQ9MSZmb3JtYXQ9SlNPTiZpZFNpdGU9OSZtZXRob2Q9QWN0aW9ucy5nZXRQYWdlVXJscyZtb2R1bGU9QVBJJnNlZ21lbnQ9Y3VzdG9tVmFyaWFibGVWYWx1ZTIlM0QlM0Qke2tleX1gXG59XG5cbmZ1bmN0aW9uIGdldERhdGFVcmxGb3JQZXJpb2QocGVyaW9kKSB7XG4gICAgcmV0dXJuIGBodHRwczovL3N0YXRzLmRhdGEuZ291di5mci9pbmRleC5waHA/JHtwZXJpb2R9JmZpbHRlcl9saW1pdD0xMDAmZmxhdD0xJmZvcm1hdD1KU09OJmlkU2l0ZT05Jm1ldGhvZD1BY3Rpb25zLmdldFBhZ2VVcmxzJm1vZHVsZT1BUElgXG59XG5cbmZ1bmN0aW9uIGdldEluZGljYXRvcihwMSwgbjEsIHAyLCBuMikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBqU3RhdC5mbi5vbmVTaWRlZERpZmZlcmVuY2VPZlByb3BvcnRpb25zKFxuICAgICAgICAgICAgTWF0aC5taW4oMSxwMSksIG4xLCBNYXRoLm1pbigxLCBwMiksIG4yXG4gICAgICAgIClcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgICByZXR1cm4gTmFOXG4gICAgfVxufVxuXG5mdW5jdGlvbiBBQlBBZ2UoKSB7XG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNBID0gYXdhaXQgZmV0Y2goZ2V0RGF0YVVybEZvclBlcmlvZCh0ZXN0LmFuZ3VsYXJqcykpXG4gICAgICAgICAgICBjb25zdCBhbmd1bGFyanMgPSBtYXBweShhd2FpdCByZXNBLmpzb24oKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmVzQiA9IGF3YWl0IGZldGNoKGdldERhdGFVcmxGb3JQZXJpb2QodGVzdC52dWVqcykpXG4gICAgICAgICAgICBjb25zdCB2dWVqcyA9IG1hcHB5KGF3YWl0IHJlc0IuanNvbigpKVxuICAgICAgICAgICAgY29uc29sZS5sb2coe2FuZ3VsYXJqcywgdnVlanN9KVxuXG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSB7YW5ndWxhcmpzLCB2dWVqc31cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBbJ2FuZ3VsYXJqcycsICd2dWVqcyddXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzdGVwcy5yZWR1Y2UoKGFjY3VtLCBzdGVwKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGtleXMucmVkdWNlKChyZXN1bHQsIGspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gc291cmNlW2tdW3N0ZXBba10gfHwgc3RlcF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZWYgJiYgKHJlZi5zdW1fZGFpbHlfbmJfdW5pcV92aXNpdG9ycyB8fCByZWYubmJfdW5pcV92aXNpdG9ycykgfHwgMFxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbayArICctbiddID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY3VtLnByZXZpb3VzW2tdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtrICsgJy1wJ10gPSBhY2N1bS5wcmV2aW91c1trXSA/IE1hdGgubWluKDEsIHZhbHVlIC8gYWNjdW0ucHJldmlvdXNba10pIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2sgKyAnLXByJ10gPSBNYXRoLnJvdW5kKHJlc3VsdFtrICsgJy1wJ10gKiAxMDAwKS8xMFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2sgKyAnLXByYyddID0gTWF0aC5yb3VuZChyZXN1bHRbayArICctbiddIC8gYWNjdW0uZmlyc3Rba10gKiAxMDAwKS8xMFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW0uZmlyc3Rba10gPSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFjY3VtLnByZXZpb3VzW2tdID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgICAgICAgIH0sIHt9KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gTWF0aC5yb3VuZChnZXRJbmRpY2F0b3IoXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1sndnVlanMtcCddLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJ3Z1ZWpzLW4nXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzWydhbmd1bGFyanMtcCddLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJ2FuZ3VsYXJqcy1uJ10sXG4gICAgICAgICAgICAgICAgKSAqIDEwMDApIC8gMTBcbiAgICAgICAgICAgICAgICBhY2N1bS5yZXN1bHRzLnB1c2goey4uLnZhbHVlcywgaW5kaWNhdG9yLCBzdGVwOiAoc3RlcC52dWVqcyB8fCBzdGVwKS5zbGljZSg3KX0pXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgICAgIH0sIHsgcmVzdWx0czogW10sIHByZXZpb3VzOiB7fSwgZmlyc3Q6IHt9IH0pLnJlc3VsdHNcblxuICAgICAgICAgICAgc2V0VmFsdWVzKHJlc3VsdHMpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgICAgIHNldFZhbHVlcyhbXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZGlzcGxheUtleXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdDb252ZXJzaW9ucycsXG4gICAgICAgICAgICBrZXlzOiBbJ2FuZ3VsYXJqcy1wcicsICd2dWVqcy1wcicsICdhbmd1bGFyanMtcHJjJywgJ3Z1ZWpzLXByYyddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUGVydGluZW5jZSBkZXMgw6ljYXJ0JyxcbiAgICAgICAgICAgIGtleXM6IFsnaW5kaWNhdG9yJ10sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUgQW5ndWxhckpTJyxcbiAgICAgICAgICAgIGtleXM6IFsnYW5ndWxhcmpzLW4nXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ05vbWJyZSBWdWVKUycsXG4gICAgICAgICAgICBrZXlzOiBbJ3Z1ZWpzLW4nXSxcbiAgICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDxoMT5TdGF0cyBBL0I8L2gxPlxuICAgICAgICAgICAge2Rpc3BsYXlLZXlzLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57ZC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt2YWx1ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17ZC5rZXlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTW9kZT1cImdyb3VwZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Qnk9XCJzdGVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3sgdG9wOiAxNSwgcmlnaHQ6IDEwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFCUEFnZTtcbiJdfQ== */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/ab.js */"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
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
//# sourceMappingURL=ab.js.08ac2563a4c05c3d6a43.hot-update.js.map