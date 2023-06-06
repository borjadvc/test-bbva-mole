"use strict";

var _lit = require("lit");
var _helper = require("../constants/helper.js");
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
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable lit-a11y/click-events-have-key-events */
var ButtonView = /*#__PURE__*/function (_LitElement) {
  _inherits(ButtonView, _LitElement);
  var _super = _createSuper(ButtonView);
  function ButtonView() {
    _classCallCheck(this, ButtonView);
    return _super.apply(this, arguments);
  }
  _createClass(ButtonView, [{
    key: "getButtonClass",
    value: function getButtonClass() {
      if (_helper.ButtonTypes[this.type]) {
        return _helper.ButtonTypes[this.type]["class"];
      }
      return _helper.ButtonTypes["default"]["class"];
    }
  }, {
    key: "emitClick",
    value: function emitClick() {
      this.dispatchEvent(new CustomEvent('btnClick'));
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _lit.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<span\n      class=\"button button--view ", "\"\n      @click=", "\n      >", "</span\n    >"])), this.getButtonClass(), this.emitClick, this.buttonLabel);
    }
  }]);
  return ButtonView;
}(_lit.LitElement);
_defineProperty(ButtonView, "properties", {
  buttonLabel: {
    type: String
  },
  type: {
    type: String
  }
});
_defineProperty(ButtonView, "styles", (0, _lit.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    :host {\n      display: inline-block;\n      position: relative;\n      height: fit-content;\n      border-radius: 20px;\n    }\n\n    .button {\n      display: flex;\n      width: 270px;\n      height: 45px;\n      justify-content: center;\n      align-items: center;\n      padding: 0px 15px;\n      border-radius: 6px;\n    }\n\n    .button--view {\n      background-color: #1262a8;\n      color: #fff;\n      text-transform: uppercase;\n    }\n  "]))));
customElements.define('button-view', ButtonView);