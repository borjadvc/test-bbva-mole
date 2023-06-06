"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainView = void 0;
var _lit = require("lit");
var _router = require("./shared/helpers/router.js");
require("./shared/components/headerView.js");
require("./home/homeView.js");
require("./game/gameView.js");
var _templateObject, _templateObject2;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var MainView = /*#__PURE__*/function (_LitElement) {
  _inherits(MainView, _LitElement);
  var _super = _createSuper(MainView);
  function MainView() {
    var _this;
    _classCallCheck(this, MainView);
    _this = _super.call(this);
    _this.userName = '';
    return _this;
  }
  _createClass(MainView, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.__observeRouterElement();
      _router.AppRouter.getRouter.call(this);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(MainView.prototype), "disconnectedCallback", this).call(this);
      this.observer.disconnect();
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _lit.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<header-view></header-view>\n      <main id=\"main_view\"><div id=\"router-outlet\"></div></main>"])));
    }
  }, {
    key: "__observeRouterElement",
    value: function __observeRouterElement() {
      var _this2 = this;
      var headerView = this.shadowRoot.querySelector('header-view');
      this.routerOutlet = this.shadowRoot.querySelector('#router-outlet');
      this.observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var addedNode = mutation.addedNodes[0];
          if (addedNode instanceof HTMLElement && addedNode instanceof customElements.get('game-view')) {
            headerView.style.display = 'block';
          } else if (addedNode instanceof customElements.get('home-view')) {
            headerView.style.display = 'none';
            _this2.shadowRoot.querySelector('home-view').addEventListener('user', function (e) {
              _this2.userName = e.detail.userName;
              headerView.userName = _this2.userName;
            });
          }
        });
      });
      this.observer.observe(this.routerOutlet, {
        childList: true,
        subtree: true
      });
    }
  }]);
  return MainView;
}(_lit.LitElement);
exports.MainView = MainView;
_defineProperty(MainView, "properties", {
  userName: {
    type: String
  }
});
_defineProperty(MainView, "styles", (0, _lit.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    #main_view {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-right: -50%;\n      transform: translate(-50%, -50%);\n    }\n\n    navbar-view {\n      display: none;\n    }\n  "]))));
window.customElements.define('main-view', MainView);