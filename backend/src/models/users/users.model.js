import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    // Basic Info
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: false,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // hide from queries by default
    },

    // Role Management
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },

    // Profile & Preferences
    avatar: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },

    dateOfBirth: {
      type: Date,
    },

    // Address Book
    addresses: [
      {
        fullName: String,
        phone: String,
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: {
          type: String,
          default: "Bangladesh",
        },
        isDefault: {
          type: Boolean,
          default: false,
        },
      },
    ],

    // E-commerce specific fields
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
        variant: String, // e.g., color/size
      },
    ],

    orderHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],

    // Authentication & Security
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

//
// 🔒 Password Encryption (pre-save hook)
//
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//
// 🔐 Password Comparison Method
//
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//
// 🧾 Virtual Field Example (fullName for front-end use)
//
userSchema.virtual("firstName").get(function () {
  return this.name?.split(" ")[0];
});

const USER = mongoose.model("User", userSchema);

export default USER;
