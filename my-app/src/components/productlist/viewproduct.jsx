"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Pencil,
  Trash2,
  Package,
  DollarSign,
  Tag,
  Calendar,
  Palette,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock product data with full details
const getProductById = (id) => {
  return {
    id: id,
    name: "Dog Food, Chicken & Chicken Liver Recipe Premium Quality",
    productId: "#7712309",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "2023-11-20",
    category: "Dog Food",
    gender: "All",
    brand: "Premium Pet Foods",
    description:
      "High-quality dog food made with real chicken and chicken liver. Packed with essential nutrients, vitamins, and minerals to support your dog's health and vitality. No artificial preservatives or fillers.",
    images: [
      "/green-tea-product.jpg",
      "/cereal-box-product.jpg",
      "/purple-snack-product.jpg",
      "/red-beverage-product.jpg",
    ],
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"],
    tags: ["Premium", "Chicken", "Grain-Free", "Natural", "High-Protein"],
    sizes: [
      "EU - 38.5",
      "EU - 39",
      "EU - 40",
      "EU - 41.5",
      "EU - 42",
      "EU - 43",
    ],
  };
};

export default function ProductView({ productId }) {
  const product = getProductById(productId);
  const [selectedImage, setSelectedImage] = useState(0);

  const getStockBadgeColor = (stock) => {
    if (stock === "In stock") return "bg-green-100 text-green-700";
    if (stock === "Low stock") return "bg-yellow-100 text-yellow-700";
    return "bg-orange-100 text-orange-700";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className=" mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/products">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back to Products
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-semibold text-gray-900">
                Product Details
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white bg-transparent"
              >
                <Pencil className="w-4 h-4 mr-2" />
                Edit Product
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-500 hover:text-white duration-300 transition-all bg-transparent"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className=" mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Images */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Product Images
              </h2>

              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 border-2 transition-colors ${
                      selectedImage === index
                        ? "border-blue-600"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Product Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Product ID:</span>
                    <span className="text-sm font-medium text-gray-900">
                      {product.productId}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className={getStockBadgeColor(product.stock)}
                  >
                    {product.stock}
                  </Badge>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Description
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Category</p>
                      <p className="text-sm font-medium text-gray-900">
                        {product.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Brand</p>
                      <p className="text-sm font-medium text-gray-900">
                        {product.brand}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Hash className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Gender</p>
                      <p className="text-sm font-medium text-gray-900">
                        {product.gender}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Start Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {product.startDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="w-5 h-5 text-gray-700" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Available Colors
                </h3>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & Inventory */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Pricing & Inventory
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Price</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Quantity</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {product.quantity.toLocaleString()}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Sale</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {product.sale}%
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Total Value</p>
                  <p className="text-xl font-semibold text-green-700">
                    ${(product.price * product.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Available Sizes
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((size, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 text-center text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex items-center gap-2 flex-wrap">
                {product.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-blue-100 text-blue-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
