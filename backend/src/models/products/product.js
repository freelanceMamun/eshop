import mongoose from "mongoose";
import slugify from "slugify";

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const variantSchema = new mongoose.Schema(
  {
    color: String,
    size: String,
    stock: { type: Number, default: 0 },
    price: Number,
    image: String,
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: [true, "Product description is required"],
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    subCategory: {
      type: String,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    discountPrice: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: 0,
    },

    variants: [variantSchema], // color/size combinations

    images: [
      {
        public_id: String, // Cloudinary ID (optional)
        url: {
          type: String,
          required: true,
        },
      },
    ],

    // Ratings & Reviews
    ratings: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    reviews: [reviewSchema],

    // Seller Info
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // SEO & Metadata
    keywords: [String],

    isFeatured: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "archived"],
      default: "active",
    },
  },
  { timestamps: true }
);

//
// 🧠 Auto-generate slug before saving
//
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

//
// 🧮 Calculate average rating
//
productSchema.methods.calculateAverageRating = function () {
  if (this.reviews.length === 0) return 0;
  const avg =
    this.reviews.reduce((acc, item) => item.rating + acc, 0) /
    this.reviews.length;
  this.ratings = avg;
  this.numReviews = this.reviews.length;
  return this.save();
};

export default mongoose.model("Product", productSchema);
