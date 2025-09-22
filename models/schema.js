const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  category: {
    type: String,
    required: true,
    enum: ['electronics', 'fashion', 'home', 'books'],

  },
  price: {
    type: Number,
    required: true,
    min: 1,
  
  },
  inStock: {
    type: Boolean,
    default: true,

  },
  releaseDate: {
    type: Date,

  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',

  }]
});

module.exports = mongoose.model('Product', productSchema);