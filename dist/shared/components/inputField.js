"use strict";

var _lit = require("lit");
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
var InputField = /*#__PURE__*/function (_LitElement) {
  _inherits(InputField, _LitElement);
  var _super = _createSuper(InputField);
  function InputField() {
    var _this;
    _classCallCheck(this, InputField);
    _this = _super.call(this);
    _this.value = '';
    _this.isFocus = false;
    _this.isFirstTime = true;
    return _this;
  }
  _createClass(InputField, [{
    key: "getLabelCalss",
    value: function getLabelCalss() {
      var _this$value;
      if (((_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.length) > 0 || this.isFocus) {
        this.isFirstTime = false;
        return 'label-up';
      }
      if (this.isFirstTime) {
        return '';
      }
      return 'label-center';
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.value = value;
      this.dispatchEvent(new CustomEvent('updateValue', {
        detail: {
          value: this.value
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return (0, _lit.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["<span id=\"input-field\">\n      <span>\n        <label class=", ">", "</label>\n        <input\n          .value=", "\n          .type=", "\n          @change=", "\n          @focusin=", "\n          @focusout=", "\n        />\n      </span>\n    </span>"])), this.getLabelCalss(), this.label, this.value, this.type, function (e) {
        return _this2.setValue(e.target.value);
      }, function () {
        _this2.isFocus = true;
      }, function () {
        _this2.isFocus = false;
      });
    }
  }]);
  return InputField;
}(_lit.LitElement);
_defineProperty(InputField, "properties", {
  label: {
    type: String
  },
  value: {
    type: String
  },
  type: {
    type: String
  },
  isFocus: {
    type: Boolean,
    sate: true
  },
  isFirstTime: {
    type: Boolean,
    sate: true
  }
});
_defineProperty(InputField, "styles", (0, _lit.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    #input-field {\n      height: 100%;\n      align-items: center;\n      gap: 0 10px;\n    }\n\n    input {\n      height: 39px;\n      max-width: 350px;\n      min-width: 290px;\n      font-size: 1rem;\n      padding-left: 7px;\n      padding-right: 1px;\n      outline: 0;\n      border: none;\n      border-bottom: 1px solid rgb(63, 63, 63);\n    }\n\n    input:focus {\n      border: none;\n      border-bottom: 1px solid rgb(133, 194, 248);\n    }\n\n    span label {\n      position: absolute;\n      margin-top: 10px;\n      margin-left: 7px;\n      padding: 0 2px 0 2px;\n      animation-duration: 0.25s;\n      animation-fill-mode: forwards;\n      color: rgb(171, 171, 171);\n    }\n\n    .label-up {\n      animation-name: outAnimation;\n    }\n\n    .label-center {\n      animation-name: inAnimation;\n    }\n\n    @keyframes inAnimation {\n      from {\n        margin-top: -12px;\n        margin-left: 7px;\n      }\n      to {\n        margin-top: 10px;\n        margin-left: 7px;\n      }\n    }\n\n    @keyframes outAnimation {\n      to {\n        font-size: 0.75em;\n        margin-top: -12px;\n        margin-left: 7px;\n        color: #a2b6d6;\n      }\n    }\n  "]))));
customElements.define('input-field', InputField);