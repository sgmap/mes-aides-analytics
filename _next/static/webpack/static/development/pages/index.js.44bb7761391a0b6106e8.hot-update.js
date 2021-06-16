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
  showDetails: {
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

  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_7___default()(result);
  /*.sort((a, b) => {
  return cats.indexOf(a.category) > cats.indexOf(b.category) ? 1 : -1
  })*/
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
      lineNumber: 117
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

                  nameMap[aide.label].includes(cleanName);
                }).reduce(reducePageDataToEventClick, {
                  label: "showDetails",
                  nb_events: 0,
                  nb_visits: 0
                });
                console.log(showDetails);
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
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "3031525227",
    __self: this
  }, "div.jsx-3031525227{font-family:sans;}.chart.jsx-3031525227{height:300px;}.list.jsx-3031525227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.doubleCell.jsx-3031525227{max-width:600px;}.cell.jsx-3031525227{width:345px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}h3.jsx-3031525227{margin:0;}h4.jsx-3031525227 small.jsx-3031525227{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rob21hcy9yZXBvcy9tZXMtYWlkZXMtc3RhdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUm9CLEFBR2tDLEFBSUosQUFHQSxBQUtHLEFBSUosQUFNSCxBQUlLLFNBSGxCLEdBTmlCLENBWmpCLENBc0JBLEVBZEEsQ0FaQSx5REFPbUIsWUFVTyw2Q0FUMUIsaUNBVWtDLG1IQUNsQyIsImZpbGUiOiIvaG9tZS90aG9tYXMvcmVwb3MvbWVzLWFpZGVzLXN0YXRzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y2F0ZWdvcmljYWxDb2xvclNjaGVtZXN9IGZyb20gJ0BuaXZvL2NvbG9ycydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBzY2FsZU9yZGluYWwgfSBmcm9tICdkMy1zY2FsZSdcbmltcG9ydCB7IFJlc3BvbnNpdmVCYXIgfSBmcm9tICdAbml2by9iYXInXG5pbXBvcnQgJ2lmcmFtZS1yZXNpemVyJ1xuXG5cbmNvbnN0IHN1cnZleUxhYmVscyA9IHtcbiAgICBhc2tlZDoge1xuICAgICAgICBsZWdlbmQ6IFwiQXUgbW9pbnMgdW5lIHByZXN0YXRpb24gZGUgbGEgc2ltdWxhdGlvbiBhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIHLDqXVzc2llIChjJ2VzdCDDoCBkaXJlIHF1ZSBsJ3VzYWdlciBhIMOpdMOpIGF1IGJvdXQgZGUgbGEgZMOpbWFyY2hlKVwiLFxuICAgICAgICBzaG9ydDogJ0RlbWFuZGUgcsOpdXNzaWUnLFxuICAgICAgICBzaW5nbGU6ICdELiByw6l1c3NpZSdcbiAgICB9LFxuICAgIGZhaWxlZDoge1xuICAgICAgICBsZWdlbmQ6IFwiQXUgbW9pbnMgdW5lIHByZXN0YXRpb24gZGUgbGEgc2ltdWxhdGlvbiBhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIG1haXMgbCd1c2FnZXIgPGI+TidBIFBBUzwvYj4gcsOpdXNzaSDDoCBhbGxlciBhdSBib3V0IGRlIGxhIGTDqW1hcmNoZVwiLFxuICAgICAgICBzaG9ydDogJ0RlbWFuZGUgw6ljaG91w6llJyxcbiAgICAgICAgc2luZ2xlOiAnRC4gw6ljaG91w6llJ1xuICAgIH0sXG4gICAgbm90aGluZzoge1xuICAgICAgICBsZWdlbmQ6IFwiQXVjdW5lIHByZXN0YXRpb24gbidhIGZhaXQgbCdvYmpldCBkJ3VuZSBkZW1hbmRlIGFsb3JzIHF1J2VsbGVzIG5lIHNvbnQgcGFzIHBlcsOndWVzXCIsXG4gICAgICAgIHNob3J0OiAnQXVjdW5lIGRlbWFuZGUnLFxuICAgICAgICBzaW5nbGU6ICdSaWVuIGZhaXQnXG4gICAgfSxcbiAgICBhbHJlYWR5OiB7XG4gICAgICAgIGxlZ2VuZDpcIlRvdXRlcyBsZXMgcHJlc3RhdGlvbnMgYWZmaWNow6llcyDDqXRhaWVudCBkw6lqw6AgcGVyw6d1ZXNcIixcbiAgICAgICAgc2hvcnQ6ICdEw6lqw6AgcGVyw6d1ZXMnLFxuICAgICAgICBzaW5nbGU6ICdEw6lqw6AgcGVyw6d1ZSdcbiAgICB9XG59XG5cbmNvbnN0IGdsb2JhbFN1cnZleVJlc3VsdHMgPSBbXG4gICAgeyBjYXRlZ29yeTogJ2Fza2VkJywgdmFsdWU6IDMwNSB9LFxuICAgIHsgY2F0ZWdvcnk6ICdmYWlsZWQnLCB2YWx1ZTogMTEwIH0sXG4gICAgeyBjYXRlZ29yeTogJ25vdGhpbmcnLCB2YWx1ZTogMTMzIH0sXG4gICAgeyBjYXRlZ29yeTogJ2FscmVhZHknLCB2YWx1ZTogMjIgfSxcbl1cbmNvbnN0IHN1cnZleUlkcyA9IE9iamVjdC5rZXlzKHN1cnZleUxhYmVscylcblxuY29uc3QgY2F0TWFwcGluZyA9IHtcbiAgICBzaG93OiB7IGNhdDogJ0FmZmljaMOpJyB9LFxuICAgIHNob3dEZXRhaWxzOiB7IGNhdDogJ0FmZmljaMOpIGTDqXRhaWxzJyB9LFxuICAgIGZvcm06IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ0Zvcm11bGFpcmUnIH0sXG4gICAgaW5zdHJ1Y3Rpb25zOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdJbnN0cnVjdGlvbnMnIH0sXG4gICAgbGluazogeyBjYXQ6ICdBY3Rpb25uw6knLCBuYW1lOiAnTGllbicgfSxcbiAgICBtc2E6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ01TQScgfSxcbiAgICAnc2hvdy1sb2NhdGlvbnMnOiB7IGNhdDogJ0FjdGlvbm7DqScsIG5hbWU6ICdBZ2VuY2UnIH0sXG4gICAgdGVsZXNlcnZpY2U6IHsgY2F0OiAnQWN0aW9ubsOpJywgbmFtZTogJ1TDqWzDqXNlcnZpY2UnIH0sXG4gICAgJ2xpbmstaW5lbGlnaWJsZSc6IHsgY2F0OiAnQWN0aW9ubsOpIGluw6lsaWcuJywgbmFtZTogJ0xpZW4gc2FucyDDqWxpZ2liaWxpdMOpJyB9LFxuXG4gICAgJ3Nob3ctdW5leHBlY3RlZCc6IHsgY2F0OiAnSW5jb21wcmlzJ30sXG5cbiAgICBjbG9zZTogeyBjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnRmVybcOpJ30sXG4gICAgJ3JldG91ci1sb2dlbWVudCc6ICB7Y2F0OiAnRXhwbGlxdcOpJywgbmFtZTogJ1JldG91ciBwYWdlIGxvZ2VtZW50J30sXG4gICAgJ3NpbXVsYXRpb24tY2FmJzogIHtjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnU2ltdWxhdGV1ciBDQUYnfSxcbiAgICBlbWFpbDogeyBjYXQ6ICdFeHBsaXF1w6knLCBuYW1lOiAnRW1haWwnfSxcbn1cblxuY29uc3QgY2F0cyA9IFtcbiAgICAnQWZmaWNow6knLFxuICAgICdBZmZpY2jDqSBkw6l0YWlscycsXG4gICAgJ0FjdGlvbm7DqScsXG4gICAgJ0FjdGlvbm7DqSBpbsOpbGlnLicsXG4gICAgJ0luY29tcHJpcycsXG4gICAgJ0V4cGxpcXXDqSdcbl1cbmNvbnN0IGFjdGlvbkNvbG9ycyA9IHNjYWxlT3JkaW5hbChjYXRlZ29yaWNhbENvbG9yU2NoZW1lcy5jYXRlZ29yeTEwKVxuY29uc3Qgc3VydmV5Q29sb3JzID0gc2NhbGVPcmRpbmFsKFtcbiAgICAnIzJjYTAyYycsXG4gICAgJyNmZjdmMGUnLFxuICAgICcjZDYyNzI4JyxcbiAgICAnIzdmN2Y3ZicsXG5dKS5kb21haW4oT2JqZWN0LmtleXMoc3VydmV5TGFiZWxzKSlcblxuZnVuY3Rpb24gYXBwbHkocHJvcCwgYmFzZSwgc2hvdWxkU2hvdykge1xuICAgIGxldCByZXN1bHQgPSBiYXNlLnN1YnRhYmxlLnJlZHVjZSgoYWNjdW0sIHRhYmxlKSA9PiB7XG4gICAgICAgIGlmICghY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0pIHtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICB9XG5cbiAgICAgICAgYWNjdW1bY2F0TWFwcGluZ1t0YWJsZS5sYWJlbF0uY2F0XSA9IGFjY3VtW2NhdE1hcHBpbmdbdGFibGUubGFiZWxdLmNhdF0gfHwge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdE1hcHBpbmdbdGFibGUubGFiZWxdLmNhdFxuICAgICAgICB9XG4gICAgICAgIGFjY3VtW2NhdE1hcHBpbmdbdGFibGUubGFiZWxdLmNhdF1bdGFibGUubGFiZWxdID0gdGFibGVbcHJvcF1cbiAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgfSwge30pXG5cbiAgICBPYmplY3Qua2V5cyhzaG91bGRTaG93KS5mb3JFYWNoKGsgPT4ge1xuICAgICAgICBpZiAoIXNob3VsZFNob3dba10pIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRba11cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQpLyouc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gY2F0cy5pbmRleE9mKGEuY2F0ZWdvcnkpID4gY2F0cy5pbmRleE9mKGIuY2F0ZWdvcnkpID8gMSA6IC0xXG4gICAgfSkqL1xufVxuXG5jb25zdCBzb3VyY2VzID0ge1xuLy8gICAgbmJfdW5pcV92aXNpdG9yczogJ1Zpc2l0ZXVyIHVuaXF1ZScsIC8vIE5vbiBmb25jdGlvbm5lbCBhdmVjIGxlcyBkb25uw6llcyBtZW5zdWVsbGVzXG4gICAgbmJfdmlzaXRzOiAnVmlzaXRlJyxcbiAgICBuYl9ldmVudHM6ICfDiXbDqG5lbWVudCdcbn1cblxuY29uc3QgcGVyaW9kcyA9IHtcbiAgICBkYXk6ICdIaWVyJyxcbiAgICBtb250aDogXCJNb2lzIGRlcm5pZXJcIixcbiAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSxcbn1cblxuLy8gbWFrZSBzdXJlIHBhcmVudCBjb250YWluZXIgaGF2ZSBhIGRlZmluZWQgaGVpZ2h0IHdoZW4gdXNpbmdcbi8vIHJlc3BvbnNpdmUgY29tcG9uZW50LCBvdGhlcndpc2UgaGVpZ2h0IHdpbGwgYmUgMCBhbmRcbi8vIG5vIGNoYXJ0IHdpbGwgYmUgcmVuZGVyZWQuXG4vLyB3ZWJzaXRlIGV4YW1wbGVzIHNob3djYXNlIG1hbnkgcHJvcGVydGllcyxcbi8vIHlvdSdsbCBvZnRlbiB1c2UganVzdCBhIGZldyBvZiB0aGVtLlxuY29uc3QgQWN0aW9uUmVzcG9uc2l2ZUJhciA9ICh7IGRhdGEgLyogc2VlIGRhdGEgdGFiICovIH0pID0+IChcbiAgICA8UmVzcG9uc2l2ZUJhclxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBrZXlzPXtPYmplY3Qua2V5cyhjYXRNYXBwaW5nKX1cbiAgICAgICAgaW5kZXhCeT1cImNhdGVnb3J5XCJcbiAgICAgICAgbWFyZ2luPXt7IHRvcDogMTUsIHJpZ2h0OiAxMCwgYm90dG9tOiA1MCwgbGVmdDogNjAgfX1cbiAgICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgICBjb2xvcnM9eyh7IGlkIH0pID0+IGFjdGlvbkNvbG9ycyhpZCl9XG4gICAgICAgIGJvcmRlckNvbG9yPXt7IGZyb206ICdjb2xvcicsIG1vZGlmaWVyczogWyBbICdkYXJrZXInLCAxLjYgXSBdIH19XG4gICAgICAgIGFuaW1hdGU9e2ZhbHNlfVxuICAgIC8+XG4pXG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW3N1cnZleSwgc2V0U3VydmV5XSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc3VtbWFyeTogW10sXG4gICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICAgIGRhdGE6W10sXG4gICAgICAgICAgICBtYXhQZXJjZW50YWdlOiAxMDAsXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbYmVuZWZpdHMsIHNldEJlbmVmaXRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2hvd0FjdGlvbnMsIHNldFNob3dBY3Rpb25zXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtzaG93U3VydmV5RGV0YWlscywgc2V0U2hvd1N1cnZleURldGFpbHNdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW29wZW5maXNjYVZhcmlhYmxlcywgc2V0T3BlbmZpc2NhVmFyaWFibGVzXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbcGVyaW9kLCBzZXRQZXJpb2RdID0gdXNlU3RhdGUoJ3llYXInKTtcbiAgICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUoJ25iX3Zpc2l0cycpO1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGNhdHMucmVkdWNlKChhY2N1bSwgYykgPT4ge1xuICAgICAgICBhY2N1bVtjXSA9IHRydWVcbiAgICAgICAgcmV0dXJuIGFjY3VtXG4gICAgfSwge30pKVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uKHVybCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkdWNlUGFnZURhdGFUb0V2ZW50Q2xpY2soY2xpY2tFdmVudERhdGEsIHBhZ2VEYXRhKSB7XG4gICAgICAgIGNsaWNrRXZlbnREYXRhLm5iX2V2ZW50cyArPSBwYWdlRGF0YS5uYl92aXNpdHNcbiAgICAgICAgY2xpY2tFdmVudERhdGEubmJfdmlzaXRzICs9IHBhZ2VEYXRhLm5iX3Zpc2l0c1xuICAgICAgICByZXR1cm4gY2xpY2tFdmVudERhdGFcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEJlbmVmaXRQYWdlKHBlcmlvZCkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgZmV0Y2hKc29uKGBodHRwczovL3N0YXRzLmRhdGEuZ291di5mci9pbmRleC5waHA/ZGF0ZT15ZXN0ZXJkYXkmZXhwYW5kZWQ9MSZmaWx0ZXJfbGltaXQ9MTAwJmZvcm1hdD1KU09OJmlkU2l0ZT0xNjUmbWV0aG9kPUFjdGlvbnMuZ2V0UGFnZVVybHMmbW9kdWxlPUFQSSZwZXJpb2Q9JHtwZXJpb2R9JnNlZ21lbnQ9JnRva2VuX2F1dGg9YW5vbnltb3VzYClcbiAgICAgICAgcmV0dXJuIGpzb24uZmluZCgob2JqKSA9PiBvYmoubGFiZWwgPT09IFwic2ltdWxhdGlvblwiKS5zdWJ0YWJsZS5maW5kKChvYmopID0+IG9iai5sYWJlbCA9PT0gXCJyZXN1bHRhdHNcIikuc3VidGFibGVcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaEJlbmVmaXROYW1lcygpIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGZldGNoSnNvbihcImh0dHBzOi8vbWVzLWFpZGVzLjFqZXVuZTFzb2x1dGlvbi5iZXRhLmdvdXYuZnIvYXBpL2JlbmVmaXRzXCIpXG4gICAgICAgIHJldHVybiBqc29uLnJlZHVjZSgoYWNjdW0sIGFpZGUpID0+IHtcbiAgICAgICAgICAgIGFjY3VtW2FpZGUubGFiZWxdID0gYWNjdW1bYWlkZS5sYWJlbF0gfHwgW11cbiAgICAgICAgICAgIGFjY3VtW2FpZGUubGFiZWxdLnB1c2goYWlkZS5pZClcbiAgICAgICAgICAgIHJldHVybiBhY2N1bVxuICAgICAgICB9LCB7fSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEocGVyaW9kKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGZldGNoSnNvbihgaHR0cHM6Ly9zdGF0cy5kYXRhLmdvdXYuZnIvaW5kZXgucGhwPyZleHBhbmRlZD0xJmZpbHRlcl9saW1pdD01MCZmb3JtYXQ9SlNPTiZpZFNpdGU9MTY1Jm1ldGhvZD1FdmVudHMuZ2V0TmFtZSZtb2R1bGU9QVBJJnBlcmlvZD0ke3BlcmlvZH0mZGF0ZT15ZXN0ZXJkYXlgKSxcbiAgICAgICAgICAgICAgICBmZXRjaEJlbmVmaXRQYWdlKHBlcmlvZCksXG4gICAgICAgICAgICAgICAgZmV0Y2hCZW5lZml0TmFtZXMoKSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBjb25zdCBtYXRvbW9FdmVudHMgPSBkYXRhWzBdXG4gICAgICAgICAgICBjb25zdCBuYW1lTWFwID0gZGF0YVsyXVxuICAgICAgICAgICAgY29uc3QgbWF0b21vUGFnZVZpc2l0cyA9IGRhdGFbMV1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbWF0b21vRXZlbnRzLm1hcChhaWRlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIShhaWRlLmxhYmVsIGluIG5hbWVNYXApKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWlkZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0RldGFpbHMgPSBtYXRvbW9QYWdlVmlzaXRzLmZpbHRlcigocGFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbk5hbWUgPSBwYWdlLmxhYmVsLnN1YnN0cmluZygxKSAvLyBiZW5lZml0IG5hbWVzIGFyZSBwcmVmaXhlZCB3aXRoIC9cbiAgICAgICAgICAgICAgICAgICAgbmFtZU1hcFthaWRlLmxhYmVsXS5pbmNsdWRlcyhjbGVhbk5hbWUpXG4gICAgICAgICAgICAgICAgfSkucmVkdWNlKHJlZHVjZVBhZ2VEYXRhVG9FdmVudENsaWNrLCB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcInNob3dEZXRhaWxzXCIsXG4gICAgICAgICAgICAgICAgICAgIG5iX2V2ZW50czogMCxcbiAgICAgICAgICAgICAgICAgICAgbmJfdmlzaXRzOiAwLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2hvd0RldGFpbHMpXG4gICAgICAgICAgICAgICAgYWlkZS5zdWJ0YWJsZS5wdXNoKHNob3dEZXRhaWxzKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpZGVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldEJlbmVmaXRzKHJlc3VsdClcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZXRCZW5lZml0cyhbXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoU3VydmV5RGF0YShwZXJpb2QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9tZXMtYWlkZXMuMWpldW5lMXNvbHV0aW9uLmJldGEuZ291di5mci9kb2N1bWVudHMvc3RhdHMuanNvblwiKVxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHN1cnZleUlkcy5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBzdXJ2ZXlMYWJlbHNbaWRdLnNob3J0LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZToganNvbi5zdXJ2ZXkuc3VtbWFyeVtpZF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzID0ganNvbi5zdXJ2ZXkuZGV0YWlscy5tYXAoZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9ICBzdXJ2ZXlJZHMubWFwKGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBzdXJ2ZXlMYWJlbHNbaWRdLnNpbmdsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkW2lkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IE1hdGgucm91bmQoZFtpZF0vZC50b3RhbCoxMDAwKS8xMCB8fCAwXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGQudG90YWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgbWF4UGVyY2VudGFnZSA9IE1hdGgubWluKDEwMCwgMS4xICpNYXRoLm1heCguLi5kZXRhaWxzLm1hcChkID0+IGQudG90YWwgPD0gMTAgPyAgMCA6ICBNYXRoLm1heCguLi5kLmRhdGEubWFwKHAgPT4gcC5wZXJjZW50YWdlICkpKSkpXG5cbiAgICAgICAgICAgIGxldCBzdXJ2ZXkgPSB7XG4gICAgICAgICAgICAgICAgc3VtbWFyeSxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgIG1heFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb3VudDoganNvbi5zdXJ2ZXkuc3VtbWFyeS50b3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U3VydmV5KHN1cnZleSlcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZXRCZW5lZml0cyhbXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoT3BlbmZpc2NhVmFyaWFibGVzKCkge1xuICAgICAgc2V0T3BlbmZpc2NhVmFyaWFibGVzKHt9KVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmZXRjaERhdGEocGVyaW9kKVxuICAgICAgZmV0Y2hTdXJ2ZXlEYXRhKClcbiAgICAgIGZldGNoT3BlbmZpc2NhVmFyaWFibGVzKClcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGhhbmRsZVBlcmlvZENoYW5nZSA9IHVzZUNhbGxiYWNrKGUgPT4ge1xuICAgICAgICBzZXRQZXJpb2QoZS50YXJnZXQudmFsdWUpXG4gICAgICAgIGZldGNoRGF0YShlLnRhcmdldC52YWx1ZSlcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZVNvdXJjZUNoYW5nZSA9IHVzZUNhbGxiYWNrKGUgPT4ge1xuICAgICAgICBzZXRTb3VyY2UoZS50YXJnZXQudmFsdWUpXG4gICAgfSlcbiAgICBjb25zdCBoYW5kbGVTaG93Q2hhbmdlID0gdXNlQ2FsbGJhY2soKGNhdCwgdmFsdWUpID0+IHtcbiAgICAgICAgc2V0U2hvdyh7Li4uc2hvdywgW2NhdF06IHZhbHVlfSlcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaGFydCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRvdWJsZUNlbGwge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jZWxsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzQ1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0IHNtYWxsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGgxPlN0YXRpc3RpcXVlcyBkJ2ltcGFjdCBldCBkJ2FpZGUgw6AgbCdhbcOpbGlvcmF0aW9uIGR1IHByb2R1aXQgTWVzIEFpZGVzPC9oMT5cblxuICAgICAgICAgIDxoMj5Sw6lzdWx0YXRzIGRlIHNvbmRhZ2UgNyBqb3VycyBhcHLDqHMgbGVzIHNpbXVsYXRpb25zIChzdXIge3N1cnZleS5jb3VudH0gcsOpcG9uc2VzKTwvaDI+XG5cbiAgICAgICAgICA8aDM+TGUgc29uZGFnZTwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQb3VyIGNoYXF1ZSBwcmVzdGF0aW9uIGFmZmljaMOpZSBzdXIgbGEgcGFnZSBkZSByw6lzdWx0YXRzLCBsZXMgcsOpcG9uZGFudHMgcGV1dmVudCBjaG9pc2lyIHBhcm1pIGxhIGxpc3RlIGRlIHLDqXBvbnNlcyBzdWl2YW50ZXMmbmJzcDs6XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPkonZW4gYsOpbsOpZmljaWFpcyBkw6lqw6A8L2xpPlxuICAgICAgICAgICAgPGxpPkonYWkgZmFpdCB1bmUgZGVtYW5kZTwvbGk+XG4gICAgICAgICAgICA8bGk+SmUgbidhaSBwYXMgcsOpdXNzaSDDoCBmYWlyZSB1bmUgZGVtYW5kZTwvbGk+XG4gICAgICAgICAgICA8bGk+SmUgbidhaSByaWVuIGZhaXQ8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEVuIGNhcyBkJ8OpY2hlYyAoZGVtYW5kw6kgw6ljaG91w6llIG91IGF1Y3VuZSBhY3Rpb24pLCBsZXMgcsOpcG9uZGFudHMgb250IGxhIHBvc3NpYmlsaXTDqSBkJ2Fqb3V0ZXIgdW4gY29tbWVudGFpcmUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGgzPlLDqXN1bcOpIGR1IHNvbmRhZ2U8L2gzPlxuICAgICAgICAgICAgeyBzdXJ2ZXkuc3VtbWFyeS5tYXAodiA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Yua2V5fT48c3BhbiBzdHlsZT17e2NvbG9yOnN1cnZleUNvbG9ycyh2LmNhdGVnb3J5KX19PuKXvDwvc3Bhbj4mbmJzcDs8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN1cnZleUxhYmVsc1t2LmtleV0ubGVnZW5kIH19Pjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQgZG91YmxlQ2VsbFwiPlxuICAgICAgICAgIDxSZXNwb25zaXZlQmFyXG4gICAgICAgICAgICBsYWJlbD17ZCA9PiBgJHtkLnZhbHVlfSAoJHtNYXRoLnJvdW5kKDEwMCpkLnZhbHVlIC8gc3VydmV5LmNvdW50KX0lKWAgfVxuICAgICAgICAgICAgZGF0YT17c3VydmV5LnN1bW1hcnl9XG4gICAgICAgICAgICBpbmRleEJ5PVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICAga2V5cz17W1widmFsdWVcIl19XG4gICAgICAgICAgICBpc0ludGVyYWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgICAgICBwYWRkaW5nPXswLjN9XG4gICAgICAgICAgICBjb2xvcnM9eyh7ZGF0YX0pID0+IHN1cnZleUNvbG9ycyhkYXRhLmNhdGVnb3J5KSB9XG4gICAgICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17ZmFsc2V9XG4gICAgICAgIC8+PC9kaXY+XG4gICAgICAgIDxoMz5Ew6l0YWlscyBkZXMgcsOpc3VsdGF0cyBkdSBzb25kYWdlIHBhciBwcmVzdGF0aW9uIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd1N1cnZleURldGFpbHMoIXNob3dTdXJ2ZXlEZXRhaWxzKX0+QWZmaWNoZXIvQ2FjaGVyPC9idXR0b24+PC9oMz5cbiAgICAgICAgeyBzaG93U3VydmV5RGV0YWlscyAmJiAoPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICB7IHN1cnZleS5kZXRhaWxzLmRhdGEubWFwKGsgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiIGtleT17ay5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtvcGVuZmlzY2FWYXJpYWJsZXNbay5pZF0gJiYgb3BlbmZpc2NhVmFyaWFibGVzW2suaWRdLmxhYmVsIHx8IGsuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+c3VyIHtrLnRvdGFsfSByw6lwb25zZXM8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUJhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNMZWZ0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHZhbHVlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke051bWJlcih2YWx1ZSl9ICVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2QgPT4gZC5kYXRhLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtrLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWU9e3N1cnZleS5kZXRhaWxzLm1heFBlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhCeT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzPXtbXCJwZXJjZW50YWdlXCJdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW50ZXJhY3RpdmU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj17eyB0b3A6IDE1LCByaWdodDogMTAsIGJvdHRvbTogNTAsIGxlZnQ6IDYwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz17MC4zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17KHtkYXRhfSkgPT4gc3VydmV5Q29sb3JzKGRhdGEuY2F0ZWdvcnkpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj17eyBmcm9tOiAnY29sb3InLCBtb2RpZmllcnM6IFsgWyAnZGFya2VyJywgMS42IF0gXSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+KX1cblxuXG4gICAgICAgICAgICAgICAgICA8aDI+Q29tcG9ydGVtZW50cyB1dGlsaXNhdGV1ciBzdXIgbGEgcGFnZSBkZSByw6lzdWx0YXRzIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd0FjdGlvbnMoIXNob3dBY3Rpb25zKX0+QWZmaWNoZXIvQ2FjaGVyPC9idXR0b24+PC9oMj5cbiAgICAgICAgICAgIHsgc2hvd0FjdGlvbnMgJiYgKDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIExlcyBncmFwaGlxdWVzIHN1aXZhbnRzIHJlcHLDqXNlbnRlbnQgbGVzIHRhdXggZGUgY29udmVyc2lvbiBzdXIgbGEgcGFnZSBkZSBwcsOpc2VudGF0aW9uIGRlIHLDqXN1bHRhdHMgc3VyIGxlIHNpbXVsYXRldXIuXG4gICAgICAgICAgICAgICAgICAgIERpZmbDqXJlbnRzIMOpdsOobmVtZW50cyBzb250IGNhcHR1csOpcyBwb3VyIG1pZXV4IMOpdmFsdWVyIGwnaW1wYWN0IGR1IHNpbXVsYXRldXIgc3VyIGxlIG5vbi1yZWNvdXJzIGF1eCBkaXNwb3NpdGlmcyBwcsOpc2VudMOpcyBhdXggdXNhZ2Vycy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUMOpcmlvZGUgZGUgcsOpZsOpcmVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9IGRlZmF1bHRWYWx1ZT17cGVyaW9kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBlcmlvZHMpLm1hcChrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17a30gdmFsdWU9e2t9PntwZXJpb2RzW2tdfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3VyY2UgZGVzIGRvbm7DqWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlU291cmNlQ2hhbmdlfSBkZWZhdWx0VmFsdWU9e3NvdXJjZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2VzKS5tYXAoayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e2t9IHZhbHVlPXtrfT57c291cmNlc1trXX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdHMubWFwKGNhdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtjYXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntzaG93W2NhdF19PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Nob3dbY2F0XX0gb25DaGFuZ2U9e2UgPT4gaGFuZGxlU2hvd0NoYW5nZShjYXQsIGUudGFyZ2V0LmNoZWNrZWQpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGNhdE1hcHBpbmcpLm1hcChjYXRJZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRNYXBwaW5nW2NhdElkXS5jYXQgPT09IGNhdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtjYXRJZH0+PHNwYW4gc3R5bGU9e3tjb2xvcjphY3Rpb25Db2xvcnMoY2F0SWQpfX0+4pe8PC9zcGFuPiZuYnNwO3tjYXRNYXBwaW5nW2NhdElkXS5uYW1lIHx8IGNhdE1hcHBpbmdbY2F0SWRdLmNhdH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2JlbmVmaXRzLm1hcChiID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbCA9IGIubGFiZWxcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGFwcGx5KHNvdXJjZSwgYiwgc2hvdylcblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2x9IGNsYXNzTmFtZT1cImNlbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57bH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25SZXNwb25zaXZlQmFyIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+KSB9XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/home/thomas/repos/mes-aides-stats/next/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "Statistiques d'impact et d'aide \xE0 l'am\xE9lioration du produit Mes Aides"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "R\xE9sultats de sondage 7 jours apr\xE8s les simulations (sur ", survey.count, " r\xE9ponses)"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, "Le sondage"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "Pour chaque prestation affich\xE9e sur la page de r\xE9sultats, les r\xE9pondants peuvent choisir parmi la liste de r\xE9ponses suivantes\xA0:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "J'en b\xE9n\xE9ficiais d\xE9j\xE0"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "J'ai fait une demande"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Je n'ai pas r\xE9ussi \xE0 faire une demande"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Je n'ai rien fait")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "En cas d'\xE9chec (demand\xE9 \xE9chou\xE9e ou aucune action), les r\xE9pondants ont la possibilit\xE9 d'ajouter un commentaire."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "R\xE9sum\xE9 du sondage"), survey.summary.map(function (v) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: v.key,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      style: {
        color: surveyColors(v.category)
      },
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, "\u25FC"), "\xA0", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: surveyLabels[v.key].legend
      },
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }));
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "chart doubleCell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
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
      lineNumber: 332
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "D\xE9tails des r\xE9sultats du sondage par prestation ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowSurveyDetails(!showSurveyDetails);
    },
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "Afficher/Cacher")), showSurveyDetails && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, survey.details.data.map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: k.id,
      className: "jsx-3031525227" + " " + "cell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348
      },
      __self: this
    }, openfiscaVariables[k.id] && openfiscaVariables[k.id].label || k.id, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    }, "sur ", k.total, " r\xE9ponses")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "jsx-3031525227" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352
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
        lineNumber: 353
      },
      __self: this
    })));
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "Comportements utilisateur sur la page de r\xE9sultats ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowActions(!showActions);
    },
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "Afficher/Cacher")), showActions && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, "Les graphiques suivants repr\xE9sentent les taux de conversion sur la page de pr\xE9sentation de r\xE9sultats sur le simulateur. Diff\xE9rents \xE9v\xE8nements sont captur\xE9s pour mieux \xE9valuer l'impact du simulateur sur le non-recours aux dispositifs pr\xE9sent\xE9s aux usagers."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227" + " " + "cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "P\xE9riode de r\xE9f\xE9rence", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
    onChange: handlePeriodChange,
    defaultValue: period,
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(periods).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389
      },
      __self: this
    }, periods[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "Source des donn\xE9es", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("select", {
    onChange: handleSourceChange,
    defaultValue: source,
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(sources).map(function (k) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("option", {
      key: k,
      value: k,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399
      },
      __self: this
    }, sources[k]);
  })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", {
    className: "jsx-3031525227",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, cats.map(function (cat) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
      key: cat,
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("label", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411
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
        lineNumber: 411
      },
      __self: this
    }), cat)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_8___default()(catMapping).map(function (catId) {
      if (catMapping[catId].cat === cat) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: catId,
          className: "jsx-3031525227",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          style: {
            color: actionColors(catId)
          },
          className: "jsx-3031525227",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
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
        lineNumber: 437
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
      className: "jsx-3031525227",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438
      },
      __self: this
    }, l), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "jsx-3031525227" + " " + "chart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ActionResponsiveBar, {
      data: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440
      },
      __self: this
    })));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.44bb7761391a0b6106e8.hot-update.js.map