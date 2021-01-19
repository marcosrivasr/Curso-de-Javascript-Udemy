"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reaction = Reaction;

function Reaction() {
  this.likes = 0;

  this.newLike = function () {
    this.likes++;
    return this.likes;
  };
}