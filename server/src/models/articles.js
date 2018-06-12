import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: {type:String, required: true},
  author: {type:String, required: true},
  branch: {type:String, required: true},
  volume: {type:Number, required: true},
  issues: {type:Number, required: true},
  pages: {type:Number, required: true},
  publishedDate: {type:String, required: true},
  articleContent: {type:String, required: true},
  abstract: {type:String, required: true},
  thumbnail: {type:Buffer, required: true},
  paper: {type:Buffer, required: true},
  roi: {type: String, required: true}
});

const Article = mongoose.model('Article', articlesSchema);

export default Article;