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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nivo_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nivo/colors */ "./node_modules/@nivo/colors/dist/nivo-colors.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.esm.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! iframe-resizer */ "./node_modules/iframe-resizer/index.js");
/* harmony import */ var iframe_resizer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(iframe_resizer__WEBPACK_IMPORTED_MODULE_14__);








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

var surveyIds = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(surveyLabels);

var catMapping = {
  show: {
    cat: 'Affiché'
  },
  showDetails: {
    cat: 'Détails affichés'
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
var cats = ['Affiché', 'Détails affichés', 'Actionné', 'Actionné inélig.', 'Incompris', 'Expliqué'];
var actionColors = Object(d3_scale__WEBPACK_IMPORTED_MODULE_12__["scaleOrdinal"])(_nivo_colors__WEBPACK_IMPORTED_MODULE_10__["categoricalColorSchemes"].category10);
var surveyColors = Object(d3_scale__WEBPACK_IMPORTED_MODULE_12__["scaleOrdinal"])(['#2ca02c', '#ff7f0e', '#d62728', '#7f7f7f']).domain(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(surveyLabels));

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

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(shouldShow).forEach(function (k) {
    if (!shouldShow[k]) {
      delete result[k];
    }
  });

  return cats.map(function (c) {
    return result[c];
  }).filter(function (c) {
    return c;
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
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_13__["ResponsiveBar"], {
    data: data,
    keys: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(catMapping),
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
      lineNumber: 115
    },
    __self: this
  });
};

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({
    summary: [],
    details: {
      data: [],
      maxPercentage: 100
    }
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      survey = _useState2[0],
      setSurvey = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
      benefits = _useState4[0],
      setBenefits = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(true),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
      showActions = _useState6[0],
      setShowActions = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(true),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
      showSurveyDetails = _useState8[0],
      setShowSurveyDetails = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState9, 2),
      openfiscaVariables = _useState10[0],
      setOpenfiscaVariables = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('year'),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState11, 2),
      period = _useState12[0],
      setPeriod = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])('nb_visits'),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState13, 2),
      source = _useState14[0],
      setSource = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(cats.reduce(function (accum, c) {
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
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()(url);

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
    clickEventData.nb_events += pageData.nb_visits;
    clickEventData.nb_visits += pageData.nb_visits;
    return clickEventData;
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
                var showDetails = matomoPageVisits.filter(function (page) {
                  var cleanName = page.label.substring(1); // benefit names are prefixed with /

                  return nameMap[aide.label].includes(cleanName);
                }).reduce(reducePageDataToEventClick, {
                  label: "showDetails",
                  nb_events: 0,
                  nb_visits: 0
                });
                aide.subtable.push(showDetails);
                return aide;
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
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("https://mes-aides.1jeune1solution.beta.gouv.fr/documents/stats.json");

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

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
    fetchData(period);
    fetchSurveyData();
    fetchOpenfiscaVariables();
  }, []);
  var handlePeriodChange = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (e) {
    setPeriod(e.target.value);
    fetchData(e.target.value);
  });
  var handleSourceChange = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (e) {
    setSource(e.target.value);
  });
  var handleShowChange = Object(react__WEBPACK_IMPORTED_MODULE_9__["useCallback"])(function (cat, value) {
    setShow(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, show, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, cat, value)));
  });
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "3031525227",
    __self: this
  }, "div.jsx-3031525227{font-family:sans;}.chart.jsx-3031525227{height:300px;}.list.jsx-3031525227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.doubleCell.jsx-3031525227{max-width:600px;}.cell.jsx-3031525227{width:345px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}h3.jsx-3031525227{margin:0;}h4.jsx-3031525227 small.jsx-3031525227{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnUm9CLEFBR2tDLEFBSUosQUFHQSxBQUtHLEFBSUosQUFNSCxBQUlLLFNBSGxCLEdBTmlCLENBWmpCLENBc0JBLEVBZEEsQ0FaQSx5REFPbUIsWUFVTyw2Q0FUMUIsaUNBVWtDLG1IQUNsQyIsImZpbGUiOiIvaG9tZS90aG9tYXMvcmVwb3MvbWVzLWFpZGVzLXN0YXRzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y2F0ZWdvcmljYWxDb2xvclNjaGVtZXN9IGZyb20gJ0BuaXZvL2NvbG9ycydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBzY2FsZU9yZGluYWwgfSBmcm9tICdkMy1zY2FsZSdcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInXG5pbXBvcnQgJ2lmcmFtZS1yZXNpemVyJ1xuXG5cbmNvbnN0IHN1cnZleUxhYmVscyA9IHtcbiAgICBhc2tlZDoge1xuICAgICAgICBsZWdlbmQ6IFwiQXUgbW9pbnMgdW5lIHByZXN0YXRpb24gZGUgbGEgc2ltdWxhdGlvbiBhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIHLDqXVzc2llIChjJ2VzdCDDoCBkaXJlIHF1ZSBsJ3VzYWdlciBhIMOpdMOpIGF1IGJvdXQgZGUgbGEgZMOpbWFyY2hlKVwiLFxuICAgICAgICBzaG9ydDogJ0RlbWFuZGUgcsOpdXNzaWUnLFxuICAgICAgICBzaW5nbGU6ICdELiByw6l1c3NpZSdcbiAgICB9LFxuICAgIGZhaWxlZDoge1xuICAgICAgICBsZWdlbmQ6IFwiQXUgbW9pbnMgdW5lIHByZXN0YXRpb24gZGUgbGEgc2ltdWxhdGlvbiBhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIG1haXMgbCd1c2FnZXIgPGI+TidBIFBBUzwvYj4gcsOpdXNzaSDDoCBhbGxlciBhdSBib3V0IGRlIGxhIGTDqW1hcmNoZVwiLFxuICAgICAgICBzaG9ydDogJ0RlbWFuZGUgw6ljaG91w6llJyxcbiAgICAgICAgc2luZ2xlOiAnRC4gw6ljaG91w6llJ1xuICAgIH0sXG4gICAgbm90aGluZzoge1xuICAgICAgICBsZWdlbmQ6IFwiQXVjdW5lIHByZXN0YXRpb24gbidhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIGFsb3JzIHF1J2VsbGVzIG5lIHNvbnQgcGFzIHBlcsOndWVzXCIsXG4gICAgICAgIHNob3J0OiAnQXVjdW5lIGRlbWFuZGUnLFxuICAgICAgICBzaW5nbGU6ICdSaWVuIGZhaXQnXG4gICAgfSxcbiAgICBhbHJlYWR5OiB7XG4gICAgICAgIGxlZ2VuZDpcIlRvdXRlcyBsZXMgcHJlc3RhdGlvbnMgYWZmaWNow6llcyDDqXRhaWVudCBkw6lqw6AgcGVyw6d1ZXNcIixcbiAgICAgICAgc2hvcnQ6ICdEw6lqw6AgcGVyw6d1ZXMnLFxuICAgICAgICBzaW5nbGU6ICdEw6lqw6AgcGVyw6d1ZSdcbiAgICB9XG59XG5cbmNvbnN0IGdsb2JhbFN1cnZleVJlc3VsdHMgPSBbXG4gICAgeyBjYXRlZ29yeTogJ2Fza2VkJywgdmFsdWU6IDMwNSB9LFxuICAgIHsgY2F0ZWdvcnk6ICdmYWlsZWQnLCB2YWx1ZTogMTEwIH0sXG4gICAgeyBjYXRlZ29yeTogJ25vdGhpbmcnLCB2YWx1ZTogMTMzIH0sXG4gICAgeyBjYXRlZ29yeTogJ2FscmVhZHknLCB2YWx1ZTogMjIgfSxcbl1cbmNvbnN0IHN1cnZleUlkcyA9IE9iamVjdC5rZXlzKHN1cnZleUxhYmVscylcblxuY29uc3QgY2F0TWFwcGluZyA9IHtcbiAgICBzaG93OiB7IGNhdDogJ0FmZmljaMOpJyB9LFxuICAgIHNob3dEZXRhaWxzOiB7IGNhdDogJ0TDqXRhaWxzIGFmZmljaMOpcycgfSxcbiAgICBmb3JtOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdGb3JtdWxhaXJlJyB9LFxuICAgIGluc3RydWN0aW9uczogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnSW5zdHJ1Y3Rpb25zJyB9LFxuICAgIGxpbms6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0xpZW4nIH0sXG4gICAgbXNhOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdNU0EnIH0sXG4gICAgJ3Nob3ctbG9jYXRpb25zJzogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnQWdlbmNlJyB9LFxuICAgIHRlbGVzZXJ2aWNlOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdUw6lsw6lzZXJ2aWNlJyB9LFxuICAgICdsaW5rLWluZWxpZ2libGUnOiB7IGNhdDogJ0FjdGlvbm7DqSBpbsOpbGlnLicsIG5hbWU6ICdMaWVuIHNhbnMgw6lsaWdpYmlsaXTDqScgfSxcblxuICAgICdzaG93LXVuZXhwZWN0ZWQnOiB7IGNhdDogJ0luY29tcHJpcyd9LFxuXG4gICAgY2xvc2U6IHsgY2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ0Zlcm3DqSd9LFxuICAgICdyZXRvdXItbG9nZW1lbnQnOiAge2NhdDogJ0V4cGxpcXXDqScsIG5hbWU6ICdSZXRvdXIgcGFnZSBsb2dlbWVudCd9LFxuICAgICdzaW11bGF0aW9uLWNhZic6ICB7Y2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ1NpbXVsYXRldXIgQ0FGJ30sXG4gICAgZW1haWw6IHsgY2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ0VtYWlsJ30sXG59XG5cbmNvbnN0IGNhdHMgPSBbXG4gICAgJ0FmZmljaMOpJyxcbiAgICAnRMOpdGFpbHMgYWZmaWNow6lzJyxcbiAgICAnQWN0aW9ubsOpJyxcbiAgICAnQWN0aW9ubsOpIGluw6lsaWcuJyxcbiAgICAnSW5jb21wcmlzJyxcbiAgICAnRXhwbGlxdcOpJ1xuXVxuY29uc3QgYWN0aW9uQ29sb3JzID0gc2NhbGVPcmRpbmFsKGNhdGVnb3JpY2FsQ29sb3JTY2hlbWVzLmNhdGVnb3J5MTApXG5jb25zdCBzdXJ2ZXlDb2xvcnMgPSBzY2FsZU9yZGluYWwoW1xuICAgICcjMmNhMDJjJyxcbiAgICAnI2ZmN2YwZScsXG4gICAgJyNkNjI3MjgnLFxuICAgICcjN2Y3ZjdmJyxcbl0pLmRvbWFpbihPYmplY3Qua2V5cyhzdXJ2ZXlMYWJlbHMpKVxuXG5mdW5jdGlvbiBhcHBseShwcm9wLCBiYXNlLCBzaG91bGRTaG93KSB7XG4gICAgbGV0IHJlc3VsdCA9IGJhc2Uuc3VidGFibGUucmVkdWNlKChhY2N1bSwgdGFibGUpID0+IHtcbiAgICAgICAgaWYgKCFjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgICAgIH1cblxuICAgICAgICBhY2N1bVtjYXRNYXBwaW5nW3RhYmxlLmxhYmVsXS5jYXRdID0gYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XSB8fCB7XG4gICAgICAgICAgICBjYXRlZ29yeTogY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XG4gICAgICAgIH1cbiAgICAgICAgYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XVt0YWJsZS5sYWJlbF0gPSB0YWJsZVtwcm9wXVxuICAgICAgICByZXR1cm4gYWNjdW1cbiAgICB9LCB7fSlcblxuICAgIE9iamVjdC5rZXlzKHNob3VsZFNob3cpLmZvckVhY2goayA9PiB7XG4gICAgICAgIGlmICghc2hvdWxkU2hvd1trXSkge1xuICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrXVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBjYXRzLm1hcChjID0+IHJlc3VsdFtjXSkuZmlsdGVyKGMgPT4gYylcbn1cblxuY29uc3Qgc291cmNlcyA9IHtcbi8vICAgIG5iX3VuaXFfdmlzaXRvcnM6ICdWaXNpdGV1ciB1bmlxdWUnLCAvLyBOb24gZm9uY3Rpb25uZWwgYXZlYyBsZXMgZG9ubsOpZXMgbWVuc3VlbGxlc1xuICAgIG5iX3Zpc2l0czogJ1Zpc2l0ZScsXG4gICAgbmJfZXZlbnRzOiAnw4l2w6huZW1lbnQnXG59XG5cbmNvbnN0IHBlcmlvZHMgPSB7XG4gICAgZGF5OiAnSGllcicsXG4gICAgbW9udGg6IFwiTW9pcyBkZXJuaWVyXCIsXG4gICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCksXG59XG5cbi8vIG1ha2Ugc3VyZSBwYXJlbnQgY29udGFpbmVyIGhhdmUgYSBkZWZpbmVkIGhlaWdodCB3aGVuIHVzaW5nXG4vLyByZXNwb25zaXZlIGNvbXBvbmVudCwgb3RoZXJ3aXNlIGhlaWdodCB3aWxsIGJlIDAgYW5kXG4vLyBubyBjaGFydCB3aWxsIGJlIHJlbmRlcmVkLlxuLy8gd2Vic2l0ZSBleGFtcGxlcyBzaG93Y2FzZSBtYW55IHByb3BlcnRpZXMsXG4vLyB5b3UnbGwgb2Z0ZW4gdXNlIGp1c3QgYSBmZXcgb2YgdGhlbS5cbmNvbnN0IEFjdGlvblJlc3BvbnNpdmVCYXIgPSAoeyBkYXRhIC8qIHNlZSBkYXRhIHRhYiAqLyB9KSA9PiAoXG4gICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAga2V5cz17T2JqZWN0LmtleXMoY2F0TWFwcGluZyl9XG4gICAgICAgIGluZGV4Qnk9XCJjYXRlZ29yeVwiXG4gICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgY29sb3JzPXsoeyBpZCB9KSA9PiBhY3Rpb25Db2xvcnMoaWQpfVxuICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICBhbmltYXRlPXtmYWxzZX1cbiAgICAvPlxuKVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtzdXJ2ZXksIHNldFN1cnZleV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHN1bW1hcnk6IFtdLFxuICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICBkYXRhOltdLFxuICAgICAgICAgICAgbWF4UGVyY2VudGFnZTogMTAwLFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgW2JlbmVmaXRzLCBzZXRCZW5lZml0c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Nob3dBY3Rpb25zLCBzZXRTaG93QWN0aW9uc10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2hvd1N1cnZleURldGFpbHMsIHNldFNob3dTdXJ2ZXlEZXRhaWxzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtvcGVuZmlzY2FWYXJpYWJsZXMsIHNldE9wZW5maXNjYVZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW3BlcmlvZCwgc2V0UGVyaW9kXSA9IHVzZVN0YXRlKCd5ZWFyJyk7XG4gICAgY29uc3QgW3NvdXJjZSwgc2V0U291cmNlXSA9IHVzZVN0YXRlKCduYl92aXNpdHMnKTtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShjYXRzLnJlZHVjZSgoYWNjdW0sIGMpID0+IHtcbiAgICAgICAgYWNjdW1bY10gPSB0cnVlXG4gICAgICAgIHJldHVybiBhY2N1bVxuICAgIH0sIHt9KSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoSnNvbih1cmwpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZHVjZVBhZ2VEYXRhVG9FdmVudENsaWNrKGNsaWNrRXZlbnREYXRhLCBwYWdlRGF0YSkge1xuICAgICAgICBjbGlja0V2ZW50RGF0YS5uYl9ldmVudHMgKz0gcGFnZURhdGEubmJfdmlzaXRzXG4gICAgICAgIGNsaWNrRXZlbnREYXRhLm5iX3Zpc2l0cyArPSBwYWdlRGF0YS5uYl92aXNpdHNcbiAgICAgICAgcmV0dXJuIGNsaWNrRXZlbnREYXRhXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCZW5lZml0UGFnZShwZXJpb2QpIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGZldGNoSnNvbihgaHR0cHM6Ly9zdGF0cy5kYXRhLmdvdXYuZnIvaW5kZXgucGhwP2RhdGU9eWVzdGVyZGF5JmV4cGFuZGVkPTEmZmlsdGVyX2xpbWl0PTEwMCZmb3JtYXQ9SlNPTiZpZFNpdGU9MTY1Jm1ldGhvZD1BY3Rpb25zLmdldFBhZ2VVcmxzJm1vZHVsZT1BUEkmcGVyaW9kPSR7cGVyaW9kfSZzZWdtZW50PSZ0b2tlbl9hdXRoPWFub255bW91c2ApXG4gICAgICAgIHJldHVybiBqc29uLmZpbmQoKG9iaikgPT4gb2JqLmxhYmVsID09PSBcInNpbXVsYXRpb25cIikuc3VidGFibGUuZmluZCgob2JqKSA9PiBvYmoubGFiZWwgPT09IFwicmVzdWx0YXRzXCIpLnN1YnRhYmxlXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCZW5lZml0TmFtZXMoKSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBmZXRjaEpzb24oXCJodHRwczovL21lcy1haWRlcy4xamV1bmUxc29sdXRpb24uYmV0YS5nb3V2LmZyL2FwaS9iZW5lZml0c1wiKVxuICAgICAgICByZXR1cm4ganNvbi5yZWR1Y2UoKGFjY3VtLCBhaWRlKSA9PiB7XG4gICAgICAgICAgICBhY2N1bVthaWRlLmxhYmVsXSA9IGFjY3VtW2FpZGUubGFiZWxdIHx8IFtdXG4gICAgICAgICAgICBhY2N1bVthaWRlLmxhYmVsXS5wdXNoKGFpZGUuaWQpXG4gICAgICAgICAgICByZXR1cm4gYWNjdW1cbiAgICAgICAgfSwge30pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHBlcmlvZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBmZXRjaEpzb24oYGh0dHBzOi8vc3RhdHMuZGF0YS5nb3V2LmZyL2luZGV4LnBocD8mZXhwYW5kZWQ9MSZmaWx0ZXJfbGltaXQ9NTAmZm9ybWF0PUpTT04maWRTaXRlPTE2NSZtZXRob2Q9RXZlbnRzLmdldE5hbWUmbW9kdWxlPUFQSSZwZXJpb2Q9JHtwZXJpb2R9JmRhdGU9eWVzdGVyZGF5YCksXG4gICAgICAgICAgICAgICAgZmV0Y2hCZW5lZml0UGFnZShwZXJpb2QpLFxuICAgICAgICAgICAgICAgIGZldGNoQmVuZWZpdE5hbWVzKCksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgY29uc3QgbWF0b21vRXZlbnRzID0gZGF0YVswXVxuICAgICAgICAgICAgY29uc3QgbmFtZU1hcCA9IGRhdGFbMl1cbiAgICAgICAgICAgIGNvbnN0IG1hdG9tb1BhZ2VWaXNpdHMgPSBkYXRhWzFdXG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG1hdG9tb0V2ZW50cy5tYXAoYWlkZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEoYWlkZS5sYWJlbCBpbiBuYW1lTWFwKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFpZGVcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dEZXRhaWxzID0gbWF0b21vUGFnZVZpc2l0cy5maWx0ZXIoKHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xlYW5OYW1lID0gcGFnZS5sYWJlbC5zdWJzdHJpbmcoMSkgLy8gYmVuZWZpdCBuYW1lcyBhcmUgcHJlZml4ZWQgd2l0aCAvXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lTWFwW2FpZGUubGFiZWxdLmluY2x1ZGVzKGNsZWFuTmFtZSlcbiAgICAgICAgICAgICAgICB9KS5yZWR1Y2UocmVkdWNlUGFnZURhdGFUb0V2ZW50Q2xpY2ssIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwic2hvd0RldGFpbHNcIixcbiAgICAgICAgICAgICAgICAgICAgbmJfZXZlbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYl92aXNpdHM6IDAsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBhaWRlLnN1YnRhYmxlLnB1c2goc2hvd0RldGFpbHMpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWlkZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0QmVuZWZpdHMocmVzdWx0KVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNldEJlbmVmaXRzKFtdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTdXJ2ZXlEYXRhKHBlcmlvZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL21lcy1haWRlcy4xamV1bmUxc29sdXRpb24uYmV0YS5nb3V2LmZyL2RvY3VtZW50cy9zdGF0cy5qc29uXCIpXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gc3VydmV5SWRzLm1hcChpZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHN1cnZleUxhYmVsc1tpZF0uc2hvcnQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBqc29uLnN1cnZleS5zdW1tYXJ5W2lkXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBqc29uLnN1cnZleS5kZXRhaWxzLm1hcChkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gIHN1cnZleUlkcy5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHN1cnZleUxhYmVsc1tpZF0uc2luZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRbaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogTWF0aC5yb3VuZChkW2lkXS9kLnRvdGFsKjEwMDApLzEwIHx8IDBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkLmlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogZC50b3RhbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBtYXhQZXJjZW50YWdlID0gTWF0aC5taW4oMTAwLCAxLjEgKk1hdGgubWF4KC4uLmRldGFpbHMubWFwKGQgPT4gZC50b3RhbCA8PSAxMCA/ICAwIDogIE1hdGgubWF4KC4uLmQuZGF0YS5tYXAocCA9PiBwLnBlcmNlbnRhZ2UgKSkpKSlcblxuICAgICAgICAgICAgbGV0IHN1cnZleSA9IHtcbiAgICAgICAgICAgICAgICBzdW1tYXJ5LFxuICAgICAgICAgICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgbWF4UGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvdW50OiBqc29uLnN1cnZleS5zdW1tYXJ5LnRvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTdXJ2ZXkoc3VydmV5KVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNldEJlbmVmaXRzKFtdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hPcGVuZmlzY2FWYXJpYWJsZXMoKSB7XG4gICAgICBzZXRPcGVuZmlzY2FWYXJpYWJsZXMoe30pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGZldGNoRGF0YShwZXJpb2QpXG4gICAgICBmZXRjaFN1cnZleURhdGEoKVxuICAgICAgZmV0Y2hPcGVuZmlzY2FWYXJpYWJsZXMoKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlUGVyaW9kQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgICAgIHNldFBlcmlvZChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgZmV0Y2hEYXRhKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0pXG4gICAgY29uc3QgaGFuZGxlU291cmNlQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgICAgIHNldFNvdXJjZShlLnRhcmdldC52YWx1ZSlcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZVNob3dDaGFuZ2UgPSB1c2VDYWxsYmFjaygoY2F0LCB2YWx1ZSkgPT4ge1xuICAgICAgICBzZXRTaG93KHsuLi5zaG93LCBbY2F0XTogdmFsdWV9KVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2FucztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZG91YmxlQ2VsbCB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNlbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDQgc21hbGwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8aDE+U3RhdGlzdGlxdWVzIGQnaW1wYWN0IGV0IGQnYWlkZSDDoCBsJ2Ftw6lsaW9yYXRpb24gZHUgcHJvZHVpdCBNZXMgQWlkZXM8L2gxPlxuXG4gICAgICAgICAgPGgyPlLDqXN1bHRhdHMgZGUgc29uZGFnZSA3IGpvdXJzIGFwcsOocyBsZXMgc2ltdWxhdGlvbnMgKHN1ciB7c3VydmV5LmNvdW50fSByw6lwb25zZXMpPC9oMj5cblxuICAgICAgICAgIDxoMz5MZSBzb25kYWdlPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFBvdXIgY2hhcXVlIHByZXN0YXRpb24gYWZmaWNow6llIHN1ciBsYSBwYWdlIGRlIHLDqXN1bHRhdHMsIGxlcyByw6lwb25kYW50cyBwZXV2ZW50IGNob2lzaXIgcGFybWkgbGEgbGlzdGUgZGUgcsOpcG9uc2VzIHN1aXZhbnRlcyZuYnNwOzpcbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+SidlbiBiw6luw6lmaWNpYWlzIGTDqWrDoDwvbGk+XG4gICAgICAgICAgICA8bGk+SidhaSBmYWl0IHVuZSBkZW1hbmRlPC9saT5cbiAgICAgICAgICAgIDxsaT5KZSBuJ2FpIHBhcyByw6l1c3NpIMOgIGZhaXJlIHVuZSBkZW1hbmRlPC9saT5cbiAgICAgICAgICAgIDxsaT5KZSBuJ2FpIHJpZW4gZmFpdDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRW4gY2FzIGQnw6ljaGVjIChkZW1hbmTDqSDDqWNob3XDqWUgb3UgYXVjdW5lIGFjdGlvbiksIGxlcyByw6lwb25kYW50cyBvbnQgbGEgcG9zc2liaWxpdMOpIGQnYWpvdXRlciB1biBjb21tZW50YWlyZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8aDM+UsOpc3Vtw6kgZHUgc29uZGFnZTwvaDM+XG4gICAgICAgICAgICB7IHN1cnZleS5zdW1tYXJ5Lm1hcCh2ID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17di5rZXl9PjxzcGFuIHN0eWxlPXt7Y29sb3I6c3VydmV5Q29sb3JzKHYuY2F0ZWdvcnkpfX0+4pe8PC9zcGFuPiZuYnNwOzxzcGFuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3VydmV5TGFiZWxzW3Yua2V5XS5sZWdlbmQgfX0+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydCBkb3VibGVDZWxsXCI+XG4gICAgICAgICAgPFJlc3BvbnNpdmVCYXJcbiAgICAgICAgICAgIGxhYmVsPXtkID0+IGAke2QudmFsdWV9ICgke01hdGgucm91bmQoMTAwKmQudmFsdWUgLyBzdXJ2ZXkuY291bnQpfSUpYCB9XG4gICAgICAgICAgICBkYXRhPXtzdXJ2ZXkuc3VtbWFyeX1cbiAgICAgICAgICAgIGluZGV4Qnk9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICBrZXlzPXtbXCJ2YWx1ZVwiXX1cbiAgICAgICAgICAgIGlzSW50ZXJhY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgbWFyZ2luPXt7IHRvcDogMTUsIHJpZ2h0OiAxMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cbiAgICAgICAgICAgIHBhZGRpbmc9ezAuM31cbiAgICAgICAgICAgIGNvbG9ycz17KHtkYXRhfSkgPT4gc3VydmV5Q29sb3JzKGRhdGEuY2F0ZWdvcnkpIH1cbiAgICAgICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XG4gICAgICAgICAgICBhbmltYXRlPXtmYWxzZX1cbiAgICAgICAgLz48L2Rpdj5cbiAgICAgICAgPGgzPkTDqXRhaWxzIGRlcyByw6lzdWx0YXRzIGR1IHNvbmRhZ2UgcGFyIHByZXN0YXRpb24gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U3VydmV5RGV0YWlscyghc2hvd1N1cnZleURldGFpbHMpfT5BZmZpY2hlci9DYWNoZXI8L2J1dHRvbj48L2gzPlxuICAgICAgICB7IHNob3dTdXJ2ZXlEZXRhaWxzICYmICg8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgIHsgc3VydmV5LmRldGFpbHMuZGF0YS5tYXAoayA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCIga2V5PXtrLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgICAgICAge29wZW5maXNjYVZhcmlhYmxlc1trLmlkXSAmJiBvcGVuZmlzY2FWYXJpYWJsZXNbay5pZF0ubGFiZWwgfHwgay5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5zdXIge2sudG90YWx9IHLDqXBvbnNlczwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNwb25zaXZlQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpc0xlZnQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogdmFsdWUgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7TnVtYmVyKHZhbHVlKX0gJWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17ZCA9PiBkLmRhdGEudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2suZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZT17c3VydmV5LmRldGFpbHMubWF4UGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleEJ5PVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXM9e1tcInBlcmNlbnRhZ2VcIl19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbnRlcmFjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPXt7IHRvcDogMTUsIHJpZ2h0OiAxMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPXswLjN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXsoe2RhdGF9KSA9PiBzdXJ2ZXlDb2xvcnMoZGF0YS5jYXRlZ29yeSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj4pfVxuXG5cbiAgICAgICAgICAgICAgICAgIDxoMj5Db21wb3J0ZW1lbnRzIHV0aWxpc2F0ZXVyIHN1ciBsYSBwYWdlIGRlIHLDqXN1bHRhdHMgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWN0aW9ucyghc2hvd0FjdGlvbnMpfT5BZmZpY2hlci9DYWNoZXI8L2J1dHRvbj48L2gyPlxuICAgICAgICAgICAgeyBzaG93QWN0aW9ucyAmJiAoPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgTGVzIGdyYXBoaXF1ZXMgc3VpdmFudHMgcmVwcsOpc2VudGVudCBsZXMgdGF1eCBkZSBjb252ZXJzaW9uIHN1ciBsYSBwYWdlIGRlIHByw6lzZW50YXRpb24gZGUgcsOpc3VsdGF0cyBzdXIgbGUgc2ltdWxhdGV1ci5cbiAgICAgICAgICAgICAgICAgICAgRGlmZsOpcmVudHMgw6l2w6huZW1lbnRzIHNvbnQgY2FwdHVyw6lzIHBvdXIgbWlldXggw6l2YWx1ZXIgbCdpbXBhY3QgZHUgc2ltdWxhdGV1ciBzdXIgbGUgbm9uLXJlY291cnMgYXV4IGRpc3Bvc2l0aWZzIHByw6lzZW50w6lzIGF1eCB1c2FnZXJzLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQw6lyaW9kZSBkZSByw6lmw6lyZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZVBlcmlvZENoYW5nZX0gZGVmYXVsdFZhbHVlPXtwZXJpb2R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGVyaW9kcykubWFwKGsgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtrfSB2YWx1ZT17a30+e3BlcmlvZHNba119PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdXJjZSBkZXMgZG9ubsOpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVTb3VyY2VDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17c291cmNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZXMpLm1hcChrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9Pntzb3VyY2VzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0cy5tYXAoY2F0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2NhdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3Nob3dbY2F0XX08aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17c2hvd1tjYXRdfSBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTaG93Q2hhbmdlKGNhdCwgZS50YXJnZXQuY2hlY2tlZCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoY2F0TWFwcGluZykubWFwKGNhdElkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdE1hcHBpbmdbY2F0SWRdLmNhdCA9PT0gY2F0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2NhdElkfT48c3BhbiBzdHlsZT17e2NvbG9yOmFjdGlvbkNvbG9ycyhjYXRJZCl9fT7il7w8L3NwYW4+Jm5ic3A7e2NhdE1hcHBpbmdbY2F0SWRdLm5hbWUgfHwgY2F0TWFwcGluZ1tjYXRJZF0uY2F0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7YmVuZWZpdHMubWFwKGIgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsID0gYi5sYWJlbFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXBwbHkoc291cmNlLCBiLCBzaG93KVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bH0gY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntsfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvblJlc3BvbnNpdmVCYXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4pIH1cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Statistiques d'impact et d'aide \xE0 l'am\xE9lioration du produit Mes Aides"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "R\xE9sultats de sondage 7 jours apr\xE8s les simulations (sur ", survey.count, " r\xE9ponses)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, "Le sondage"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "Pour chaque prestation affich\xE9e sur la page de r\xE9sultats, les r\xE9pondants peuvent choisir parmi la liste de r\xE9ponses suivantes\xA0:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "J'en b\xE9n\xE9ficiais d\xE9j\xE0"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "J'ai fait une demande"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, "Je n'ai pas r\xE9ussi \xE0 faire une demande"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "Je n'ai rien fait")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "En cas d'\xE9chec (demand\xE9 \xE9chou\xE9e ou aucune action), les r\xE9pondants ont la possibilit\xE9 d'ajouter un commentaire."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "R\xE9sum\xE9 du sondage"), survey.summary.map(function (v) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      key: v.key,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
      style: {
        color: surveyColors(v.category)
      },
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }, "\u25FC"), "\xA0", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
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
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "chart doubleCell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_13__["ResponsiveBar"], {
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
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "D\xE9tails des r\xE9sultats du sondage par prestation ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowSurveyDetails(!showSurveyDetails);
    },
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "Afficher/Cacher")), showSurveyDetails && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, survey.details.data.map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      key: k.id,
      className: "jsx-3031525227" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345
      },
      __self: this
    }, openfiscaVariables[k.id] && openfiscaVariables[k.id].label || k.id, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("small", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, "sur ", k.total, " r\xE9ponses")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "jsx-3031525227" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_13__["ResponsiveBar"], {
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
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "Comportements utilisateur sur la page de r\xE9sultats ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowActions(!showActions);
    },
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "Afficher/Cacher")), showActions && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Les graphiques suivants repr\xE9sentent les taux de conversion sur la page de pr\xE9sentation de r\xE9sultats sur le simulateur. Diff\xE9rents \xE9v\xE8nements sont captur\xE9s pour mieux \xE9valuer l'impact du simulateur sur le non-recours aux dispositifs pr\xE9sent\xE9s aux usagers."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "P\xE9riode de r\xE9f\xE9rence", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
    onChange: handlePeriodChange,
    defaultValue: period,
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(periods).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386
      },
      __self: this
    }, periods[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, "Source des donn\xE9es", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
    onChange: handleSourceChange,
    defaultValue: source,
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(sources).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396
      },
      __self: this
    }, sources[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("table", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, cats.map(function (cat) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
      key: cat,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: this
    }, show[cat], react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
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
    }), cat)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(catMapping).map(function (catId) {
      if (catMapping[catId].cat === cat) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: catId,
          className: "jsx-3031525227",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
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

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      key: l,
      className: "jsx-3031525227" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435
      },
      __self: this
    }, l), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      className: "jsx-3031525227" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ActionResponsiveBar, {
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
//# sourceMappingURL=index.js.6e01297e188606d514de.hot-update.js.map