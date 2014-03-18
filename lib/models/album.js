'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var AlbumSchema = new Schema({
  name: String,
  stickers: Number
});

/**
 * Validations
 */
AlbumSchema.path('stickers').validate(function (num) {
  return num >= 1;
}, 'Stickers must be between 1 and 10');

mongoose.model('Album', AlbumSchema);
