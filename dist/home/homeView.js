"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeView = void 0;
var _lit = require("lit");
var _router = require("../shared/helpers/router.js");
var _views = require("../shared/constants/views.js");
require("../shared/components/buttonView.js");
require("../shared/components/inputField.js");
var _templateObject, _templateObject2;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var loginHeaderIcon = new URL('../../../assets/icons/computer-mouse-solid.svg', require('url').pathToFileURL(__filename).toString()).href;
var REGULAR_EXPRESSIONS = /^[a-zA-Z0-9]+$/;
var ERROR_EMPTY_FIELD_MESSAGE = 'The name field must not be empty.';
var ERROR_REGEX_MESSAGE = 'Username should only contain letters and numbers.';
var HomeView = /*#__PURE__*/function (_LitElement) {
  _inherits(HomeView, _LitElement);
  var _super = _createSuper(HomeView);
  function HomeView() {
    var _this;
    _classCallCheck(this, HomeView);
    _this = _super.call(this);
    _this.userName = '';
    _this.buttonName = 'join';
    return _this;
  }
  _createClass(HomeView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return (0, _lit.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <section class=\"login login--section\">\n        <div class=\"login--icon\">\n          <img src=\"", "\" class=\"icon\" alt=\"login-icon\" />\n        </div>\n        <input-field label=\"Name\" type=\"text\"></input-field>\n        <button-view\n          buttonLabel=\"", "\"\n          @click=", "\n        ></button-view>\n      </section>\n    "])), loginHeaderIcon, this.buttonName, function () {
        _this2.__handleRegister();
      });
    }
  }, {
    key: "__handleRegister",
    value: function __handleRegister() {
      var userName = this.shadowRoot.querySelector('input-field').value;
      if (!userName.length) {
        alert(ERROR_EMPTY_FIELD_MESSAGE);
        return;
      }
      if (!REGULAR_EXPRESSIONS.test(userName)) {
        alert(ERROR_REGEX_MESSAGE);
        return;
      }
      this.dispatchEvent(new CustomEvent('user', {
        detail: {
          userName: userName
        }
      }));
      this.__goToGameView();
    }
  }, {
    key: "__goToGameView",
    value: function __goToGameView() {
      _router.AppRouter.go({
        pathname: _views.View.Game.id
      });
      this.selectedViewId = _router.AppRouter.getRootPath();
    }
  }]);
  return HomeView;
}(_lit.LitElement);
exports.HomeView = HomeView;
_defineProperty(HomeView, "properties", {
  userName: {
    type: String
  },
  loginInformationText: {
    type: String
  },
  buttonName: {
    type: String
  }
});
_defineProperty(HomeView, "styles", (0, _lit.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    h1 {\n      color: white;\n    }\n    .login {\n      width: 343px;\n    }\n    .login--section {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .login--icon {\n      width: 50px;\n      height: 50px;\n      border-radius: 3rem;\n      margin-bottom: 2em;\n    }\n    .icon {\n      width: 50%;\n      height: 100%;\n    }\n    button-view {\n      margin-top: 2.25rem;\n    }\n  "]))));
window.customElements.define('home-view', HomeView);