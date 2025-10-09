import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    // 🧍 Basic Info
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
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    // 👑 Role Management
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },

    avatar: {
      type: String,
      default: "",
    },

    // 🏠 Address Book
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

    // ❤️ Wishlist
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    // 🛒 Cart
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
        variant: String, // e.g. color or size
      },
    ],

    // 📦 Order History (Detailed)
    orderHistory: [
      {
        orderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
        orderNumber: String,
        status: {
          type: String,
          enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
          default: "pending",
        },
        totalAmount: {
          type: Number,
          required: true,
        },
        paymentMethod: {
          type: String,
          enum: ["cod", "bkash", "nagad", "stripe", "paypal"],
          default: "cod",
        },
        products: [
          {
            productId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
            },
            name: String,
            quantity: Number,
            price: Number,
            variant: String,
          },
        ],
        shippingAddress: {
          fullName: String,
          phone: String,
          street: String,
          city: String,
          state: String,
          postalCode: String,
          country: String,
        },
        orderedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    // 🔐 Security
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
