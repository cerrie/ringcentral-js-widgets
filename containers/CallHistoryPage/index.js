'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _CallsPanel = require('../../components/CallsPanel');

var _CallsPanel2 = _interopRequireDefault(_CallsPanel);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapToProps(_, _ref) {
  var locale = _ref.locale,
      callHistory = _ref.callHistory,
      regionSettings = _ref.regionSettings,
      connectivityMonitor = _ref.connectivityMonitor,
      dateTimeFormat = _ref.dateTimeFormat;

  return {
    title: _i18n2.default.getString('title', locale.currentLocale),
    currentLocale: locale.currentLocale,
    calls: callHistory.calls,
    areaCode: regionSettings.areaCode,
    countryCode: regionSettings.countryCode,
    disableLinks: !connectivityMonitor.connectivity,
    showSpinner: !(callHistory.ready && locale.ready && regionSettings.ready && dateTimeFormat.ready && connectivityMonitor.ready)
  };
}
function mapToFunctions(_, _ref2) {
  var dateTimeFormat = _ref2.dateTimeFormat,
      onViewContact = _ref2.onViewContact,
      _ref2$dateTimeFormatt = _ref2.dateTimeFormatter,
      dateTimeFormatter = _ref2$dateTimeFormatt === undefined ? function (utcTimestamp) {
    return dateTimeFormat.formatDateTime({
      utcTimestamp: utcTimestamp
    });
  } : _ref2$dateTimeFormatt;

  return {
    dateTimeFormatter: dateTimeFormatter,
    onViewContact: onViewContact
  };
}

var CallsPage = (0, _reactRedux.connect)(mapToProps, mapToFunctions)(_CallsPanel2.default);

exports.default = CallsPage;
//# sourceMappingURL=index.js.map
