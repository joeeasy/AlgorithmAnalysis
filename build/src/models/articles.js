'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var articlesSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  branch: { type: String, required: true },
  volume: { type: Number, required: true },
  issues: { type: Number, required: true },
  pages: { type: Number, required: true },
  publishedDate: { type: String, required: true },
  articleContent: { type: String, required: true },
  abstract: { type: String, required: true },
  thumbnail: { type: Buffer, required: true },
  paper: { type: Buffer, required: true },
  roi: { type: String, required: true }
});

var Article = _mongoose2.default.model('Article', articlesSchema);

exports.default = Article;
//# sourceMappingURL=articles.js.map