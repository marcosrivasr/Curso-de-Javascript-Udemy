"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = Post;

var _reaction = _interopRequireDefault(require("./reaction.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Post(texto) {
  this.texto = texto;
  if (this.texto) this.reaction = new _reaction.default();

  this.getJSON = function () {
    return this.texto === undefined ? null : {
      texto: this.texto
    };
  };
}