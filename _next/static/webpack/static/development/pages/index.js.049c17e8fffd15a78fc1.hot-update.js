webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.esm.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! iframe-resizer */ "./node_modules/iframe-resizer/index.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer__WEBPACK_IMPORTED_MODULE_15__);









var _jsxFileName = "/home/thomas/repos/mes-aides-stats/next/pages/index.js";








var surveyLabels = {
  asked: {
    legend: "Au moins une prestation de la simulation a fait l'objet d'une demande réussie (c'est à dire que l'usager a été au bout de la démarche)",
    short: 'Demande réussie',
    single: 'D. réussie'
  },
  failed: {
    legend: "Au moins une prestation de la simulation a fait l'objet d'une demande mais l'usager <b>N'A PAS</b> réussi à aller au bout de la démarche",
    short: 'Demande échouée',
    single: 'D. échouée'
  },
  nothing: {
    legend: "Aucune prestation n'a fait l'objet d'une demande alors qu'elles ne sont pas perçues",
    short: 'Aucune demande',
    single: 'Rien fait'
  },
  already: {
    legend: "Toutes les prestations affichées étaient déjà perçues",
    short: 'Déjà perçues',
    single: 'Déjà perçue'
  }
};
var globalSurveyResults = [{
  category: 'asked',
  value: 305
}, {
  category: 'failed',
  value: 110
}, {
  category: 'nothing',
  value: 133
}, {
  category: 'already',
  value: 22
}];

var surveyIds = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(surveyLabels);

var catMapping = {
  show: {
    cat: 'Affiché'
  },
  click: {
    cat: 'Affiché détails'
  },
  form: {
    cat: 'Actionné',
    name: 'Formulaire'
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
  'show-locations': {
    cat: 'Actionné',
    name: 'Agence'
  },
  teleservice: {
    cat: 'Actionné',
    name: 'Téléservice'
  },
  'link-ineligible': {
    cat: 'Actionné inélig.',
    name: 'Lien sans éligibilité'
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
var cats = ['Affiché', 'Affiché détails', 'Actionné', 'Actionné inélig.', 'Incompris', 'Expliqué'];
var actionColors = Object(d3_scale__WEBPACK_IMPORTED_MODULE_13__["scaleOrdinal"])(_nivo_colors__WEBPACK_IMPORTED_MODULE_11__["categoricalColorSchemes"].category10);
var surveyColors = Object(d3_scale__WEBPACK_IMPORTED_MODULE_13__["scaleOrdinal"])(['#2ca02c', '#ff7f0e', '#d62728', '#7f7f7f']).domain(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(surveyLabels));

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

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(shouldShow).forEach(function (k) {
    if (!shouldShow[k]) {
      delete result[k];
    }
  });

  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default()(result).sort(function (a, b) {
    return cats.indexOf(a.category) > cats.indexOf(b.category) ? 1 : -1;
  });
}

var sources = {
  //    nb_uniq_visitors: 'Visiteur unique', // Non fonctionnel avec les données mensuelles
  nb_visits: 'Visite',
  nb_events: 'Évènement'
};
var periods = {
  day: 'Hier',
  month: "Mois dernier",
  year: new Date().getFullYear().toString() // make sure parent container have a defined height when using
  // responsive component, otherwise height will be 0 and
  // no chart will be rendered.
  // website examples showcase many properties,
  // you'll often use just a few of them.

};

var ActionResponsiveBar = function ActionResponsiveBar(_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_14__["ResponsiveBar"], {
    data: data,
    keys: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(catMapping),
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
      return actionColors(id);
    },
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    animate: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  });
};

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({
    summary: [],
    details: {
      data: [],
      maxPercentage: 100
    }
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      survey = _useState2[0],
      setSurvey = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
      benefits = _useState4[0],
      setBenefits = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
      showActions = _useState6[0],
      setShowActions = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(true),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
      showSurveyDetails = _useState8[0],
      setShowSurveyDetails = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])({}),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState9, 2),
      openfiscaVariables = _useState10[0],
      setOpenfiscaVariables = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])('year'),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState11, 2),
      period = _useState12[0],
      setPeriod = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])('nb_visits'),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState13, 2),
      source = _useState14[0],
      setSource = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(cats.reduce(function (accum, c) {
    accum[c] = true;
    return accum;
  }, {})),
      _useState16 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState15, 2),
      show = _useState16[0],
      setShow = _useState16[1];

  function fetchJson(_x) {
    return _fetchJson.apply(this, arguments);
  }

  function _fetchJson() {
    _fetchJson = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(url) {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()(url);

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchJson.apply(this, arguments);
  }

  function reducePageDataToEventClick(clickEventData, pageData) {
    var newClickData = clickEventData || {
      label: "showDetails",
      nb_events: 0,
      nb_visits: 0
    };
    newClickData.nb_events += pageData.nb_visits;
    newClickData.nb_visits += pageData.nb_visits;
    return newClickData;
  }

  function fetchBenefitPage(_x2) {
    return _fetchBenefitPage.apply(this, arguments);
  }

  function _fetchBenefitPage() {
    _fetchBenefitPage = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(period) {
      var json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetchJson("https://stats.data.gouv.fr/index.php?date=yesterday&expanded=1&filter_limit=100&format=JSON&idSite=165&method=Actions.getPageUrls&module=API&period=".concat(period, "&segment=&token_auth=anonymous"));

            case 2:
              json = _context2.sent;
              return _context2.abrupt("return", json.find(function (obj) {
                return obj.label === "simulation";
              }).subtable.find(function (obj) {
                return obj.label === "resultats";
              }).subtable);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchBenefitPage.apply(this, arguments);
  }

  function fetchBenefitNames() {
    return _fetchBenefitNames.apply(this, arguments);
  }

  function _fetchBenefitNames() {
    _fetchBenefitNames = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      var json;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetchJson("https://mes-aides.1jeune1solution.beta.gouv.fr/api/benefits");

            case 2:
              json = _context3.sent;
              return _context3.abrupt("return", json.reduce(function (accum, aide) {
                accum[aide.label] = accum[aide.label] || [];
                accum[aide.label].push(aide.id);
                return accum;
              }, {}));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchBenefitNames.apply(this, arguments);
  }

  function fetchData(_x3) {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(period) {
      var data, matomoEvents, nameMap, matomoPageVisits, result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([fetchJson("https://stats.data.gouv.fr/index.php?&expanded=1&filter_limit=50&format=JSON&idSite=165&method=Events.getName&module=API&period=".concat(period, "&date=yesterday")), fetchBenefitPage(period), fetchBenefitNames()]);

            case 3:
              data = _context4.sent;
              matomoEvents = data[0];
              nameMap = data[2];
              matomoPageVisits = data[1];
              result = matomoEvents.map(function (aide) {
                if (!(aide.label in nameMap)) return aide;
                showDetails = matomoPageVisits.filter(function (page) {
                  return nameMap[aide.label].includes(page.label.substring(1));
                }).reduce(reducePageDataToEventClick, {});
                aide.subtable.push(showDetails);
              });
              setBenefits(result);
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              setBenefits([]);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return _fetchData.apply(this, arguments);
  }

  function fetchSurveyData(_x4) {
    return _fetchSurveyData.apply(this, arguments);
  }

  function _fetchSurveyData() {
    _fetchSurveyData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(period) {
      var res, json, summary, details, maxPercentage, _survey;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("https://mes-aides.1jeune1solution.beta.gouv.fr/documents/stats.json");

            case 3:
              res = _context5.sent;
              _context5.next = 6;
              return res.json();

            case 6:
              json = _context5.sent;
              summary = surveyIds.map(function (id) {
                return {
                  key: id,
                  category: surveyLabels[id].short,
                  value: json.survey.summary[id]
                };
              });
              details = json.survey.details.map(function (d) {
                var data = surveyIds.map(function (id) {
                  return {
                    id: d.id,
                    key: id,
                    category: surveyLabels[id].single,
                    value: d[id],
                    percentage: Math.round(d[id] / d.total * 1000) / 10 || 0
                  };
                });
                return {
                  id: d.id,
                  data: data,
                  total: d.total
                };
              });
              maxPercentage = Math.min(100, 1.1 * Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(details.map(function (d) {
                return d.total <= 10 ? 0 : Math.max.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(d.data.map(function (p) {
                  return p.percentage;
                })));
              }))));
              _survey = {
                summary: summary,
                details: {
                  data: details,
                  maxPercentage: maxPercentage
                },
                count: json.survey.summary.total
              };
              setSurvey(_survey);
              _context5.next = 17;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              setBenefits([]);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 14]]);
    }));
    return _fetchSurveyData.apply(this, arguments);
  }

  function fetchOpenfiscaVariables() {
    return _fetchOpenfiscaVariables.apply(this, arguments);
  }

  function _fetchOpenfiscaVariables() {
    _fetchOpenfiscaVariables = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setOpenfiscaVariables({});

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _fetchOpenfiscaVariables.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    fetchData(period);
    fetchSurveyData();
    fetchOpenfiscaVariables();
  }, []);
  var handlePeriodChange = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function (e) {
    setPeriod(e.target.value);
    fetchData(e.target.value);
  });
  var handleSourceChange = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function (e) {
    setSource(e.target.value);
  });
  var handleShowChange = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(function (cat, value) {
    setShow(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, show, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, cat, value)));
  });
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "3031525227",
    __self: this
  }, "div.jsx-3031525227{font-family:sans;}.chart.jsx-3031525227{height:300px;}.list.jsx-3031525227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.doubleCell.jsx-3031525227{max-width:600px;}.cell.jsx-3031525227{width:345px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}h3.jsx-3031525227{margin:0;}h4.jsx-3031525227 small.jsx-3031525227{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnUm9CLEFBR2tDLEFBSUosQUFHQSxBQUtHLEFBSUosQUFNSCxBQUlLLFNBSGxCLEdBTmlCLENBWmpCLENBc0JBLEVBZEEsQ0FaQSx5REFPbUIsWUFVTyw2Q0FUMUIsaUNBVWtDLG1IQUNsQyIsImZpbGUiOiIvaG9tZS90aG9tYXMvcmVwb3MvbWVzLWFpZGVzLXN0YXRzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y2F0ZWdvcmljYWxDb2xvclNjaGVtZXN9IGZyb20gJ0BuaXZvL2NvbG9ycydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBzY2FsZU9yZGluYWwgfSBmcm9tICdkMy1zY2FsZSdcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInXG5pbXBvcnQgJ2lmcmFtZS1yZXNpemVyJ1xuXG5cbmNvbnN0IHN1cnZleUxhYmVscyA9IHtcbiAgICBhc2tlZDoge1xuICAgICAgICBsZWdlbmQ6IFwiQXUgbW9pbnMgdW5lIHByZXN0YXRpb24gZGUgbGEgc2ltdWxhdGlvbiBhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIHLDqXVzc2llIChjJ2VzdCDDoCBkaXJlIHF1ZSBsJ3VzYWdlciBhIMOpdMOpIGF1IGJvdXQgZGUgbGEgZMOpbWFyY2hlKVwiLFxuICAgICAgICBzaG9ydDogJ0RlbWFuZGUgcsOpdXNzaWUnLFxuICAgICAgICBzaW5nbGU6ICdELiByw6l1c3NpZSdcbiAgICB9LFxuICAgIGZhaWxlZDoge1xuICAgICAgICBsZWdlbmQ6IFwiQXUgbW9pbnMgdW5lIHByZXN0YXRpb24gZGUgbGEgc2ltdWxhdGlvbiBhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIG1haXMgbCd1c2FnZXIgPGI+TidBIFBBUzwvYj4gcsOpdXNzaSDDoCBhbGxlciBhdSBib3V0IGRlIGxhIGTDqW1hcmNoZVwiLFxuICAgICAgICBzaG9ydDogJ0RlbWFuZGUgw6ljaG91w6llJyxcbiAgICAgICAgc2luZ2xlOiAnRC4gw6ljaG91w6llJ1xuICAgIH0sXG4gICAgbm90aGluZzoge1xuICAgICAgICBsZWdlbmQ6IFwiQXVjdW5lIHByZXN0YXRpb24gbidhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIGFsb3JzIHF1J2VsbGVzIG5lIHNvbnQgcGFzIHBlcsOndWVzXCIsXG4gICAgICAgIHNob3J0OiAnQXVjdW5lIGRlbWFuZGUnLFxuICAgICAgICBzaW5nbGU6ICdSaWVuIGZhaXQnXG4gICAgfSxcbiAgICBhbHJlYWR5OiB7XG4gICAgICAgIGxlZ2VuZDpcIlRvdXRlcyBsZXMgcHJlc3RhdGlvbnMgYWZmaWNow6llcyDDqXRhaWVudCBkw6lqw6AgcGVyw6d1ZXNcIixcbiAgICAgICAgc2hvcnQ6ICdEw6lqw6AgcGVyw6d1ZXMnLFxuICAgICAgICBzaW5nbGU6ICdEw6lqw6AgcGVyw6d1ZSdcbiAgICB9XG59XG5cbmNvbnN0IGdsb2JhbFN1cnZleVJlc3VsdHMgPSBbXG4gICAgeyBjYXRlZ29yeTogJ2Fza2VkJywgdmFsdWU6IDMwNSB9LFxuICAgIHsgY2F0ZWdvcnk6ICdmYWlsZWQnLCB2YWx1ZTogMTEwIH0sXG4gICAgeyBjYXRlZ29yeTogJ25vdGhpbmcnLCB2YWx1ZTogMTMzIH0sXG4gICAgeyBjYXRlZ29yeTogJ2FscmVhZHknLCB2YWx1ZTogMjIgfSxcbl1cbmNvbnN0IHN1cnZleUlkcyA9IE9iamVjdC5rZXlzKHN1cnZleUxhYmVscylcblxuY29uc3QgY2F0TWFwcGluZyA9IHtcbiAgICBzaG93OiB7IGNhdDogJ0FmZmljaMOpJyB9LFxuXG4gICAgY2xpY2s6IHsgY2F0OiAnQWZmaWNow6kgZMOpdGFpbHMnIH0sXG4gICAgZm9ybTogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnRm9ybXVsYWlyZScgfSxcbiAgICBpbnN0cnVjdGlvbnM6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0luc3RydWN0aW9ucycgfSxcbiAgICBsaW5rOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdMaWVuJyB9LFxuICAgIG1zYTogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnTVNBJyB9LFxuICAgICdzaG93LWxvY2F0aW9ucyc6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0FnZW5jZScgfSxcbiAgICB0ZWxlc2VydmljZTogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnVMOpbMOpc2VydmljZScgfSxcbiAgICAnbGluay1pbmVsaWdpYmxlJzogeyBjYXQ6ICdBY3Rpb25uw6kgaW7DqWxpZy4nLCBuYW1lOiAnTGllbiBzYW5zIMOpbGlnaWJpbGl0w6knIH0sXG5cbiAgICAnc2hvdy11bmV4cGVjdGVkJzogeyBjYXQ6ICdJbmNvbXByaXMnfSxcblxuICAgIGNsb3NlOiB7IGNhdDogJ0V4cGxpcXXDqScsIG5hbWU6ICdGZXJtw6knfSxcbiAgICAncmV0b3VyLWxvZ2VtZW50JzogIHtjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnUmV0b3VyIHBhZ2UgbG9nZW1lbnQnfSxcbiAgICAnc2ltdWxhdGlvbi1jYWYnOiAge2NhdDogJ0V4cGxpcXXDqScsIG5hbWU6ICdTaW11bGF0ZXVyIENBRid9LFxuICAgIGVtYWlsOiB7IGNhdDogJ0V4cGxpcXXDqScsIG5hbWU6ICdFbWFpbCd9LFxufVxuXG5jb25zdCBjYXRzID0gW1xuICAgICdBZmZpY2jDqScsXG4gICAgJ0FmZmljaMOpIGTDqXRhaWxzJyxcbiAgICAnQWN0aW9ubsOpJyxcbiAgICAnQWN0aW9ubsOpIGluw6lsaWcuJyxcbiAgICAnSW5jb21wcmlzJyxcbiAgICAnRXhwbGlxdcOpJ1xuXVxuY29uc3QgYWN0aW9uQ29sb3JzID0gc2NhbGVPcmRpbmFsKGNhdGVnb3JpY2FsQ29sb3JTY2hlbWVzLmNhdGVnb3J5MTApXG5jb25zdCBzdXJ2ZXlDb2xvcnMgPSBzY2FsZU9yZGluYWwoW1xuICAgICcjMmNhMDJjJyxcbiAgICAnI2ZmN2YwZScsXG4gICAgJyNkNjI3MjgnLFxuICAgICcjN2Y3ZjdmJyxcbl0pLmRvbWFpbihPYmplY3Qua2V5cyhzdXJ2ZXlMYWJlbHMpKVxuXG5mdW5jdGlvbiBhcHBseShwcm9wLCBiYXNlLCBzaG91bGRTaG93KSB7XG4gICAgbGV0IHJlc3VsdCA9IGJhc2Uuc3VidGFibGUucmVkdWNlKChhY2N1bSwgdGFibGUpID0+IHtcbiAgICAgICAgaWYgKCFjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICAgIH1cblxuICAgICAgICBhY2N1bVtjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXS5jYXRdID0gYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XSB8fCB7XG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XG4gICAgICAgIH1cbiAgICAgICAgYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XVt0YWJsZS5sYWJlbF0gPSB0YWJsZVtwcm9wXVxuICAgICAgICByZXR1cm4gYWNjdW1cbiAgICB9LCB7fSlcblxuICAgIE9iamVjdC5rZXlzKHNob3VsZFNob3cpLmZvckVhY2goayA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkU2hvd1trXSkge1xuICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrXVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlc3VsdCkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gY2F0cy5pbmRleE9mKGEuY2F0ZWdvcnkpID4gY2F0cy5pbmRleE9mKGIuY2F0ZWdvcnkpID8gMSA6IC0xXG4gICAgfSlcbn1cblxuY29uc3Qgc291cmNlcyA9IHtcbi8vICAgIG5iX3VuaXFfdmlzaXRvcnM6ICdWaXNpdGV1ciB1bmlxdWUnLCAvLyBOb24gZm9uY3Rpb25uZWwgYXZlYyBsZXMgZG9ubsOpZXMgbWVuc3VlbGxlc1xuICAgIG5iX3Zpc2l0czogJ1Zpc2l0ZScsXG4gICAgbmJfZXZlbnRzOiAnw4l2w6huZW1lbnQnXG59XG5cbmNvbnN0IHBlcmlvZHMgPSB7XG4gICAgZGF5OiAnSGllcicsXG4gICAgbW9udGg6IFwiTW9pcyBkZXJuaWVyXCIsXG4gICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksXG59XG5cbi8vIG1ha2Ugc3VyZSBwYXJlbnQgY29udGFpbmVyIGhhdmUgYSBkZWZpbmVkIGhlaWdodCB3aGVuIHVzaW5nXG4vLyByZXNwb25zaXZlIGNvbXBvbmVudCwgb3RoZXJ3aXNlIGhlaWdodCB3aWxsIGJlIDAgYW5kXG4vLyBubyBjaGFydCB3aWxsIGJlIHJlbmRlcmVkLlxuLy8gd2Vic2l0ZSBleGFtcGxlcyBzaG93Y2FzZSBtYW55IHByb3BlcnRpZXMsXG4vLyB5b3UnbGwgb2Z0ZW4gdXNlIGp1c3QgYSBmZXcgb2YgdGhlbS5cbmNvbnN0IEFjdGlvblJlc3BvbnNpdmVCYXIgPSAoeyBkYXRhIC8qIHNlZSBkYXRhIHRhYiAqLyB9KSA9PiAoXG4gICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAga2V5cz17T2JqZWN0LmtleXMoY2F0TWFwcGluZyl9XG4gICAgICAgIGluZGV4Qnk9XCJjYXRlZ29yeVwiXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgY29sb3JzPXsoeyBpZCB9KSA9PiBhY3Rpb25Db2xvcnMoaWQpfVxuICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICBhbmltYXRlPXtmYWxzZX1cbiAgICAvPlxuKVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtzdXJ2ZXksIHNldFN1cnZleV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHN1bW1hcnk6IFtdLFxuICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICBkYXRhOltdLFxuICAgICAgICAgICAgbWF4UGVyY2VudGFnZTogMTAwLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW2JlbmVmaXRzLCBzZXRCZW5lZml0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Nob3dBY3Rpb25zLCBzZXRTaG93QWN0aW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2hvd1N1cnZleURldGFpbHMsIHNldFNob3dTdXJ2ZXlEZXRhaWxzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtvcGVuZmlzY2FWYXJpYWJsZXMsIHNldE9wZW5maXNjYVZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKCd5ZWFyJyk7XG4gICAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKCduYl92aXNpdHMnKTtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShjYXRzLnJlZHVjZSgoYWNjdW0sIGMpID0+IHtcbiAgICAgICAgYWNjdW1bY10gPSB0cnVlXG4gICAgICAgIHJldHVybiBhY2N1bVxuICAgIH0sIHt9KSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSnNvbih1cmwpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZHVjZVBhZ2VEYXRhVG9FdmVudENsaWNrKGNsaWNrRXZlbnREYXRhLCBwYWdlRGF0YSkge1xuICAgICAgICBjb25zdCBuZXdDbGlja0RhdGEgPSBjbGlja0V2ZW50RGF0YSB8fCB7XG4gICAgICAgICAgICBsYWJlbDogXCJzaG93RGV0YWlsc1wiLFxuICAgICAgICAgICAgbmJfZXZlbnRzOiAwLFxuICAgICAgICAgICAgbmJfdmlzaXRzOiAwLFxuICAgICAgICB9XG4gICAgICAgIG5ld0NsaWNrRGF0YS5uYl9ldmVudHMgKz0gcGFnZURhdGEubmJfdmlzaXRzXG4gICAgICAgIG5ld0NsaWNrRGF0YS5uYl92aXNpdHMgKz0gcGFnZURhdGEubmJfdmlzaXRzXG4gICAgICAgIHJldHVybiBuZXdDbGlja0RhdGFcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEJlbmVmaXRQYWdlKHBlcmlvZCkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgZmV0Y2hKc29uKGBodHRwczovL3N0YXRzLmRhdGEuZ291di5mci9pbmRleC5waHA/ZGF0ZT15ZXN0ZXJkYXkmZXhwYW5kZWQ9MSZmaWx0ZXJfbGltaXQ9MTAwJmZvcm1hdD1KU09OJmlkU2l0ZT0xNjUmbWV0aG9kPUFjdGlvbnMuZ2V0UGFnZVVybHMmbW9kdWxlPUFQSSZwZXJpb2Q9JHtwZXJpb2R9JnNlZ21lbnQ9JnRva2VuX2F1dGg9YW5vbnltb3VzYClcbiAgICAgICAgcmV0dXJuIGpzb24uZmluZCgob2JqKSA9PiBvYmoubGFiZWwgPT09IFwic2ltdWxhdGlvblwiKS5zdWJ0YWJsZS5maW5kKChvYmopID0+IG9iai5sYWJlbCA9PT0gXCJyZXN1bHRhdHNcIikuc3VidGFibGVcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEJlbmVmaXROYW1lcygpIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGZldGNoSnNvbihcImh0dHBzOi8vbWVzLWFpZGVzLjFqZXVuZTFzb2x1dGlvbi5iZXRhLmdvdXYuZnIvYXBpL2JlbmVmaXRzXCIpXG4gICAgICAgIHJldHVybiBqc29uLnJlZHVjZSgoYWNjdW0sIGFpZGUpID0+IHtcbiAgICAgICAgICAgIGFjY3VtW2FpZGUubGFiZWxdID0gYWNjdW1bYWlkZS5sYWJlbF0gfHwgW11cbiAgICAgICAgICAgIGFjY3VtW2FpZGUubGFiZWxdLnB1c2goYWlkZS5pZClcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICB9LCB7fSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEocGVyaW9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGZldGNoSnNvbihgaHR0cHM6Ly9zdGF0cy5kYXRhLmdvdXYuZnIvaW5kZXgucGhwPyZleHBhbmRlZD0xJmZpbHRlcl9saW1pdD01MCZmb3JtYXQ9SlNPTiZpZFNpdGU9MTY1Jm1ldGhvZD1FdmVudHMuZ2V0TmFtZSZtb2R1bGU9QVBJJnBlcmlvZD0ke3BlcmlvZH0mZGF0ZT15ZXN0ZXJkYXlgKSxcbiAgICAgICAgICAgICAgICBmZXRjaEJlbmVmaXRQYWdlKHBlcmlvZCksXG4gICAgICAgICAgICAgICAgZmV0Y2hCZW5lZml0TmFtZXMoKSxcbiAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgIGNvbnN0IG1hdG9tb0V2ZW50cyA9IGRhdGFbMF1cbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXAgPSBkYXRhWzJdXG4gICAgICAgICAgICBjb25zdCBtYXRvbW9QYWdlVmlzaXRzID0gZGF0YVsxXVxuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBtYXRvbW9FdmVudHMubWFwKGFpZGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghKGFpZGUubGFiZWwgaW4gbmFtZU1hcCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhaWRlXG5cbiAgICAgICAgICAgICAgICBzaG93RGV0YWlscyA9IG1hdG9tb1BhZ2VWaXNpdHMuZmlsdGVyKChwYWdlKSA9PiBuYW1lTWFwW2FpZGUubGFiZWxdLmluY2x1ZGVzKHBhZ2UubGFiZWwuc3Vic3RyaW5nKDEpKSkucmVkdWNlKHJlZHVjZVBhZ2VEYXRhVG9FdmVudENsaWNrLCB7fSlcbiAgICAgICAgICAgICAgICBhaWRlLnN1YnRhYmxlLnB1c2goc2hvd0RldGFpbHMpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBzZXRCZW5lZml0cyhyZXN1bHQpXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2V0QmVuZWZpdHMoW10pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFN1cnZleURhdGEocGVyaW9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbWVzLWFpZGVzLjFqZXVuZTFzb2x1dGlvbi5iZXRhLmdvdXYuZnIvZG9jdW1lbnRzL3N0YXRzLmpzb25cIilcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBzdXJ2ZXlJZHMubWFwKGlkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGlkLFxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogc3VydmV5TGFiZWxzW2lkXS5zaG9ydCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGpzb24uc3VydmV5LnN1bW1hcnlbaWRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IGpzb24uc3VydmV5LmRldGFpbHMubWFwKGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAgc3VydmV5SWRzLm1hcChpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogc3VydmV5TGFiZWxzW2lkXS5zaW5nbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZFtpZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiBNYXRoLnJvdW5kKGRbaWRdL2QudG90YWwqMTAwMCkvMTAgfHwgMFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGQuaWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBkLnRvdGFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IG1heFBlcmNlbnRhZ2UgPSBNYXRoLm1pbigxMDAsIDEuMSAqTWF0aC5tYXgoLi4uZGV0YWlscy5tYXAoZCA9PiBkLnRvdGFsIDw9IDEwID8gIDAgOiAgTWF0aC5tYXgoLi4uZC5kYXRhLm1hcChwID0+IHAucGVyY2VudGFnZSApKSkpKVxuXG4gICAgICAgICAgICBsZXQgc3VydmV5ID0ge1xuICAgICAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICBtYXhQZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY291bnQ6IGpzb24uc3VydmV5LnN1bW1hcnkudG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFN1cnZleShzdXJ2ZXkpXG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2V0QmVuZWZpdHMoW10pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE9wZW5maXNjYVZhcmlhYmxlcygpIHtcbiAgICAgIHNldE9wZW5maXNjYVZhcmlhYmxlcyh7fSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZmV0Y2hEYXRhKHBlcmlvZClcbiAgICAgIGZldGNoU3VydmV5RGF0YSgpXG4gICAgICBmZXRjaE9wZW5maXNjYVZhcmlhYmxlcygpXG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSB1c2VDYWxsYmFjayhlID0+IHtcbiAgICAgICAgc2V0UGVyaW9kKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICBmZXRjaERhdGEoZS50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgICBjb25zdCBoYW5kbGVTb3VyY2VDaGFuZ2UgPSB1c2VDYWxsYmFjayhlID0+IHtcbiAgICAgICAgc2V0U291cmNlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlU2hvd0NoYW5nZSA9IHVzZUNhbGxiYWNrKChjYXQsIHZhbHVlKSA9PiB7XG4gICAgICAgIHNldFNob3coey4uLnNob3csIFtjYXRdOiB2YWx1ZX0pXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2hhcnQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kb3VibGVDZWxsIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2VsbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM0NXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoNCBzbWFsbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxoMT5TdGF0aXN0aXF1ZXMgZCdpbXBhY3QgZXQgZCdhaWRlIMOgIGwnYW3DqWxpb3JhdGlvbiBkdSBwcm9kdWl0IE1lcyBBaWRlczwvaDE+XG5cbiAgICAgICAgICA8aDI+UsOpc3VsdGF0cyBkZSBzb25kYWdlIDcgam91cnMgYXByw6hzIGxlcyBzaW11bGF0aW9ucyAoc3VyIHtzdXJ2ZXkuY291bnR9IHLDqXBvbnNlcyk8L2gyPlxuXG4gICAgICAgICAgPGgzPkxlIHNvbmRhZ2U8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUG91ciBjaGFxdWUgcHJlc3RhdGlvbiBhZmZpY2jDqWUgc3VyIGxhIHBhZ2UgZGUgcsOpc3VsdGF0cywgbGVzIHLDqXBvbmRhbnRzIHBldXZlbnQgY2hvaXNpciBwYXJtaSBsYSBsaXN0ZSBkZSByw6lwb25zZXMgc3VpdmFudGVzJm5ic3A7OlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5KJ2VuIGLDqW7DqWZpY2lhaXMgZMOpasOgPC9saT5cbiAgICAgICAgICAgIDxsaT5KJ2FpIGZhaXQgdW5lIGRlbWFuZGU8L2xpPlxuICAgICAgICAgICAgPGxpPkplIG4nYWkgcGFzIHLDqXVzc2kgw6AgZmFpcmUgdW5lIGRlbWFuZGU8L2xpPlxuICAgICAgICAgICAgPGxpPkplIG4nYWkgcmllbiBmYWl0PC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBFbiBjYXMgZCfDqWNoZWMgKGRlbWFuZMOpIMOpY2hvdcOpZSBvdSBhdWN1bmUgYWN0aW9uKSwgbGVzIHLDqXBvbmRhbnRzIG9udCBsYSBwb3NzaWJpbGl0w6kgZCdham91dGVyIHVuIGNvbW1lbnRhaXJlLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxoMz5Sw6lzdW3DqSBkdSBzb25kYWdlPC9oMz5cbiAgICAgICAgICAgIHsgc3VydmV5LnN1bW1hcnkubWFwKHYgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2LmtleX0+PHNwYW4gc3R5bGU9e3tjb2xvcjpzdXJ2ZXlDb2xvcnModi5jYXRlZ29yeSl9fT7il7w8L3NwYW4+Jm5ic3A7PHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdXJ2ZXlMYWJlbHNbdi5rZXldLmxlZ2VuZCB9fT48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0IGRvdWJsZUNlbGxcIj5cbiAgICAgICAgICA8UmVzcG9uc2l2ZUJhclxuICAgICAgICAgICAgbGFiZWw9e2QgPT4gYCR7ZC52YWx1ZX0gKCR7TWF0aC5yb3VuZCgxMDAqZC52YWx1ZSAvIHN1cnZleS5jb3VudCl9JSlgIH1cbiAgICAgICAgICAgIGRhdGE9e3N1cnZleS5zdW1tYXJ5fVxuICAgICAgICAgICAgaW5kZXhCeT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgIGtleXM9e1tcInZhbHVlXCJdfVxuICAgICAgICAgICAgaXNJbnRlcmFjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICBtYXJnaW49e3sgdG9wOiAxNSwgcmlnaHQ6IDEwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxuICAgICAgICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgICAgICAgY29sb3JzPXsoe2RhdGF9KSA9PiBzdXJ2ZXlDb2xvcnMoZGF0YS5jYXRlZ29yeSkgfVxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e2ZhbHNlfVxuICAgICAgICAvPjwvZGl2PlxuICAgICAgICA8aDM+RMOpdGFpbHMgZGVzIHLDqXN1bHRhdHMgZHUgc29uZGFnZSBwYXIgcHJlc3RhdGlvbiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dTdXJ2ZXlEZXRhaWxzKCFzaG93U3VydmV5RGV0YWlscyl9PkFmZmljaGVyL0NhY2hlcjwvYnV0dG9uPjwvaDM+XG4gICAgICAgIHsgc2hvd1N1cnZleURldGFpbHMgJiYgKDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgeyBzdXJ2ZXkuZGV0YWlscy5kYXRhLm1hcChrID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIiBrZXk9e2suaWR9PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7b3BlbmZpc2NhVmFyaWFibGVzW2suaWRdICYmIG9wZW5maXNjYVZhcmlhYmxlc1trLmlkXS5sYWJlbCB8fCBrLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnN1ciB7ay50b3RhbH0gcsOpcG9uc2VzPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlzTGVmdD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiB2YWx1ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtOdW1iZXIodmFsdWUpfSAlYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtkID0+IGQuZGF0YS52YWx1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ay5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlPXtzdXJ2ZXkuZGV0YWlscy5tYXhQZXJjZW50YWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Qnk9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cz17W1wicGVyY2VudGFnZVwiXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ludGVyYWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49e3sgdG9wOiAxNSwgcmlnaHQ6IDEwLCBib3R0b206IDUwLCBsZWZ0OiA2MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnM9eyh7ZGF0YX0pID0+IHN1cnZleUNvbG9ycyhkYXRhLmNhdGVnb3J5KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I9e3sgZnJvbTogJ2NvbG9yJywgbW9kaWZpZXJzOiBbIFsgJ2RhcmtlcicsIDEuNiBdIF0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2Pil9XG5cblxuICAgICAgICAgICAgICAgICAgPGgyPkNvbXBvcnRlbWVudHMgdXRpbGlzYXRldXIgc3VyIGxhIHBhZ2UgZGUgcsOpc3VsdGF0cyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dBY3Rpb25zKCFzaG93QWN0aW9ucyl9PkFmZmljaGVyL0NhY2hlcjwvYnV0dG9uPjwvaDI+XG4gICAgICAgICAgICB7IHNob3dBY3Rpb25zICYmICg8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBMZXMgZ3JhcGhpcXVlcyBzdWl2YW50cyByZXByw6lzZW50ZW50IGxlcyB0YXV4IGRlIGNvbnZlcnNpb24gc3VyIGxhIHBhZ2UgZGUgcHLDqXNlbnRhdGlvbiBkZSByw6lzdWx0YXRzIHN1ciBsZSBzaW11bGF0ZXVyLlxuICAgICAgICAgICAgICAgICAgICBEaWZmw6lyZW50cyDDqXbDqG5lbWVudHMgc29udCBjYXB0dXLDqXMgcG91ciBtaWV1eCDDqXZhbHVlciBsJ2ltcGFjdCBkdSBzaW11bGF0ZXVyIHN1ciBsZSBub24tcmVjb3VycyBhdXggZGlzcG9zaXRpZnMgcHLDqXNlbnTDqXMgYXV4IHVzYWdlcnMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFDDqXJpb2RlIGRlIHLDqWbDqXJlbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlUGVyaW9kQ2hhbmdlfSBkZWZhdWx0VmFsdWU9e3BlcmlvZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwZXJpb2RzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2t9IHZhbHVlPXtrfT57cGVyaW9kc1trXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlIGRlcyBkb25uw6llc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZVNvdXJjZUNoYW5nZX0gZGVmYXVsdFZhbHVlPXtzb3VyY2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlcykubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtrfSB2YWx1ZT17a30+e3NvdXJjZXNba119PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRzLm1hcChjYXQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17Y2F0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57c2hvd1tjYXRdfTxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtzaG93W2NhdF19IG9uQ2hhbmdlPXtlID0+IGhhbmRsZVNob3dDaGFuZ2UoY2F0LCBlLnRhcmdldC5jaGVja2VkKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhjYXRNYXBwaW5nKS5tYXAoY2F0SWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0TWFwcGluZ1tjYXRJZF0uY2F0ID09PSBjYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17Y2F0SWR9PjxzcGFuIHN0eWxlPXt7Y29sb3I6YWN0aW9uQ29sb3JzKGNhdElkKX19PuKXvDwvc3Bhbj4mbmJzcDt7Y2F0TWFwcGluZ1tjYXRJZF0ubmFtZSB8fCBjYXRNYXBwaW5nW2NhdElkXS5jYXR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtiZW5lZml0cy5tYXAoYiA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGwgPSBiLmxhYmVsXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhcHBseShzb3VyY2UsIGIsIHNob3cpXG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsfSBjbGFzc05hbWU9XCJjZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2x9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uUmVzcG9uc2l2ZUJhciBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PikgfVxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Statistiques d'impact et d'aide \xE0 l'am\xE9lioration du produit Mes Aides"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "R\xE9sultats de sondage 7 jours apr\xE8s les simulations (sur ", survey.count, " r\xE9ponses)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "Le sondage"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Pour chaque prestation affich\xE9e sur la page de r\xE9sultats, les r\xE9pondants peuvent choisir parmi la liste de r\xE9ponses suivantes\xA0:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "J'en b\xE9n\xE9ficiais d\xE9j\xE0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "J'ai fait une demande"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Je n'ai pas r\xE9ussi \xE0 faire une demande"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "Je n'ai rien fait")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "En cas d'\xE9chec (demand\xE9 \xE9chou\xE9e ou aucune action), les r\xE9pondants ont la possibilit\xE9 d'ajouter un commentaire."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "R\xE9sum\xE9 du sondage"), survey.summary.map(function (v) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: v.key,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      style: {
        color: surveyColors(v.category)
      },
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, "\u25FC"), "\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: surveyLabels[v.key].legend
      },
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }));
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "chart doubleCell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_14__["ResponsiveBar"], {
    label: function label(d) {
      return "".concat(d.value, " (").concat(Math.round(100 * d.value / survey.count), "%)");
    },
    data: survey.summary,
    indexBy: "category",
    keys: ["value"],
    isInteractive: false,
    margin: {
      top: 15,
      right: 10,
      bottom: 50,
      left: 60
    },
    padding: 0.3,
    colors: function colors(_ref3) {
      var data = _ref3.data;
      return surveyColors(data.category);
    },
    borderColor: {
      from: 'color',
      modifiers: [['darker', 1.6]]
    },
    animate: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "D\xE9tails des r\xE9sultats du sondage par prestation ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowSurveyDetails(!showSurveyDetails);
    },
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "Afficher/Cacher")), showSurveyDetails && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, survey.details.data.map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: k.id,
      className: "jsx-3031525227" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, openfiscaVariables[k.id] && openfiscaVariables[k.id].label || k.id, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, "sur ", k.total, " r\xE9ponses")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "jsx-3031525227" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_14__["ResponsiveBar"], {
      axisLeft: {
        format: function format(value) {
          return "".concat(Number(value), " %");
        }
      },
      label: function label(d) {
        return d.data.value;
      },
      data: k.data,
      maxValue: survey.details.maxPercentage,
      indexBy: "category",
      keys: ["percentage"],
      isInteractive: false,
      margin: {
        top: 15,
        right: 10,
        bottom: 50,
        left: 60
      },
      padding: 0.3,
      colors: function colors(_ref4) {
        var data = _ref4.data;
        return surveyColors(data.category);
      },
      borderColor: {
        from: 'color',
        modifiers: [['darker', 1.6]]
      },
      animate: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "Comportements utilisateur sur la page de r\xE9sultats ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowActions(!showActions);
    },
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "Afficher/Cacher")), showActions && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Les graphiques suivants repr\xE9sentent les taux de conversion sur la page de pr\xE9sentation de r\xE9sultats sur le simulateur. Diff\xE9rents \xE9v\xE8nements sont captur\xE9s pour mieux \xE9valuer l'impact du simulateur sur le non-recours aux dispositifs pr\xE9sent\xE9s aux usagers."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "P\xE9riode de r\xE9f\xE9rence", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
    onChange: handlePeriodChange,
    defaultValue: period,
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(periods).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, periods[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, "Source des donn\xE9es", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
    onChange: handleSourceChange,
    defaultValue: source,
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(sources).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, sources[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, cats.map(function (cat) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
      key: cat,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, show[cat], react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
      type: "checkbox",
      checked: show[cat],
      onChange: function onChange(e) {
        return handleShowChange(cat, e.target.checked);
      },
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }), cat)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(catMapping).map(function (catId) {
      if (catMapping[catId].cat === cat) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: catId,
          className: "jsx-3031525227",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: actionColors(catId)
          },
          className: "jsx-3031525227",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
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

    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: l,
      className: "jsx-3031525227" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, l), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "jsx-3031525227" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ActionResponsiveBar, {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437
      },
      __self: this
    })));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.049c17e8fffd15a78fc1.hot-update.js.map