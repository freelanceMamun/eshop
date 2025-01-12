import mongoose, { Schema } from 'mongoose';

const productScheama = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sortdescription: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    tags: {
      type: Array,
    },
    catagoris: {
      type: Array,
    },
    colors: {
      type: Array,
    },
    size: {
      type: Array,
    },
    Gallery: {
      type: Array,
      required: true,
    },
    FeatcherImage: {
      type: String,
      required: true,
    },
    hoverImage: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model('products', productScheama);

export { productModel };
