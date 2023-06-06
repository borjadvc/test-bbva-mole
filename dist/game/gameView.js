"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameView = void 0;
var _lit = require("lit");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
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
var GameView = /*#__PURE__*/function (_LitElement) {
  _inherits(GameView, _LitElement);
  var _super = _createSuper(GameView);
  function GameView() {
    var _this;
    _classCallCheck(this, GameView);
    _this = _super.call(this);
    _this.score = 0;
    _this.cells = Array(9).fill(false);
    _this.playing = false;
    _this.intervalId = null;
    _this.buttonName = 'Play';
    return _this;
  }
  _createClass(GameView, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return (0, _lit.html)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <section class=\"game game--section\">\n        <div class=\"game__score\"><p>Score: ", "</p></div>\n        <div class=\"game__grid\">\n          ", "\n        </div>\n        <div class=\"game__buttons\">\n          ", "\n        </div>\n        <div\n          class=\"game__notification ", "\"\n        >\n          Good Job!\n        </div>\n      </section>\n    "])), this.score, this.cells.map(function (cell, index) {
        return (0, _lit.html)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n              <div\n                class=\"game__cell\"\n                @click=\"", "\"\n                @keyup=\"", "\"\n              >\n                <div\n                  class=\"game__mole ", "\"\n                ></div>\n              </div>\n            "])), function () {
          return _this2._handleCellClick(index);
        }, function () {
          return _this2._handleCellClick(index);
        }, cell ? 'game__mole--show ' : '');
      }), this.playing ? (0, _lit.html)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                <button-view\n                  class=\"game__button-view\"\n                  buttonLabel=\"", "\"\n                  @click=", "\n                ></button-view>\n              "])), this.buttonName, function () {
        _this2._handleStopClick();
      }) : (0, _lit.html)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n                <button-view\n                  class=\"game__button-view\"\n                  buttonLabel=\"", "\"\n                  @click=", "\n                ></button-view>\n              "])), this.buttonName, function () {
        _this2._handlePlayClick();
      }), this.notificationVisible ? 'visible' : '');
    }
  }, {
    key: "_handlePlayClick",
    value: function _handlePlayClick() {
      this.playing = true;
      this.buttonName = 'Stop';
      this.score = 0;
      this._startGameLoop();
    }
  }, {
    key: "_handleStopClick",
    value: function _handleStopClick() {
      this.playing = false;
      this.buttonName = 'Play';
      this._stopGameLoop();
      this.cells = Array(9).fill(false);
    }
  }, {
    key: "_startGameLoop",
    value: function _startGameLoop() {
      var _this3 = this;
      this.intervalId = setInterval(function () {
        _this3._showRandomMole();
      }, 1000);
    }
  }, {
    key: "_stopGameLoop",
    value: function _stopGameLoop() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "_showRandomMole",
    value: function _showRandomMole() {
      this.cells = this.cells.map(function () {
        return Math.random() < 0.5;
      });
    }
  }, {
    key: "_handleCellClick",
    value: function _handleCellClick(index) {
      var _this4 = this;
      if (this.cells[index]) {
        navigator.vibrate(200);
        this.score += 1;
        this.notificationVisible = true;
        setTimeout(function () {
          _this4.notificationVisible = false;
        }, 2000);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(GameView.prototype), "disconnectedCallback", this).call(this);
      this._stopGameLoop();
    }
  }]);
  return GameView;
}(_lit.LitElement);
exports.GameView = GameView;
_defineProperty(GameView, "properties", {
  score: {
    type: Number
  },
  cells: {
    type: Array
  },
  playing: {
    type: Boolean
  },
  intervalId: {
    type: Number
  },
  buttonName: {
    type: String
  }
});
_defineProperty(GameView, "styles", (0, _lit.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n      text-align: center;\n      --mole-image-url: url('../../../assets/images/mole-image.png');\n    }\n    .game,\n    .game--section {\n      display: flex;\n      flex-direction: column;\n      font-size: 1.5em;\n    }\n    .game__score {\n      display: flex;\n      flex-direction: column;\n      text-align: end;\n      align-items: end;\n    }\n    .game__grid {\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 10px;\n      justify-items: center;\n    }\n    .game__cell {\n      display: inline-block;\n      width: 100px;\n      height: 100px;\n      border: 2px solid black;\n      cursor: pointer;\n    }\n    .game__mole {\n      display: none;\n      width: 80px;\n      height: 80px;\n      background-image: var(--mole-image-url);\n      background-size: cover;\n      border-radius: 50%;\n      margin: 10px auto;\n    }\n    .game__mole--show {\n      display: block;\n    }\n    .game__buttons {\n      margin-top: 0.5em;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n    }\n    .game__notification {\n      position: fixed;\n      bottom: -73px;\n      left: 36px;\n      width: 75%;\n      padding: 10px;\n      background-color: rgba(0, 0, 0, 0.8);\n      color: rgb(255, 255, 255);\n      text-align: center;\n      font-size: 0.75em;\n      display: none;\n    }\n\n    .game__notification.visible {\n      display: block;\n    }\n  "]))));
window.customElements.define('game-view', GameView);