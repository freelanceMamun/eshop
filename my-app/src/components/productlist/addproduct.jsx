"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X, Check } from "lucide-react";
import Image from "next/image";

// interface UploadedImage {
//   id: string
//   url: string
//   file: File
// }

export default function AddProductForm() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("Male");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedSize, setSelectedSize] = useState("EU - 50");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [productDate, setProductDate] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const sizes = [
    "EU - 38.5",
    "EU - 39",
    "EU - 40",
    "EU - 41.5",
    "EU - 42",
    "EU - 43",
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#EF4444" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Green", hex: "#10B981" },
    { name: "Yellow", hex: "#F59E0B" },
    { name: "Purple", hex: "#A855F7" },
    { name: "Pink", hex: "#EC4899" },
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newImages = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push({
            id: Math.random().toString(36).substr(2, 9),
            url: e.target?.result,
            file: file,
          });
          if (newImages.length === files.length) {
            setUploadedImages((prev) => [...prev, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id) => {
    setUploadedImages((prev) => prev.filter((img) => img.id !== id));
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (colorName) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  const handleTagInput = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (action) => {
    console.log("[v0] Form submitted:", {
      action,
      productName,
      category,
      gender,
      brand,
      description,
      images: uploadedImages.length,
      sizes: selectedSizes,
      colors: selectedColors,
      tags,
      date: productDate,
    });
    // Handle form submission
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Dashboard</span>
          <span>›</span>
          <span>Ecommerce</span>
          <span>›</span>
          <span className="text-gray-400">Add product</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column - Product Information */}
        <div className="rounded-lg bg-white p-6 shadow-sm">
          {/* Product Name */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              Product name <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              maxLength={20}
              className="mb-1"
            />
            <p className="text-xs text-gray-500">
              Do not exceed 20 characters when entering the product name.
            </p>
          </div>

          {/* Category and Gender */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Category <span className="text-red-500">*</span>
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="food">Food & Beverages</SelectItem>
                  <SelectItem value="pet">Pet Supplies</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Gender <span className="text-red-500">*</span>
              </label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Unisex">Unisex</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Brand */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              Brand <span className="text-red-500">*</span>
            </label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Choose category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nike">Nike</SelectItem>
                <SelectItem value="adidas">Adidas</SelectItem>
                <SelectItem value="puma">Puma</SelectItem>
                <SelectItem value="reebok">Reebok</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Colors */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              Product Colors
            </label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  className={`relative h-10 w-10 rounded-full border-2 transition-all ${
                    selectedColors.includes(color.name)
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColors.includes(color.name) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check
                        className={`h-5 w-5 ${
                          color.name === "White" || color.name === "Yellow"
                            ? "text-gray-800"
                            : "text-white"
                        }`}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
            {selectedColors.length > 0 && (
              <p className="mt-2 text-xs text-gray-600">
                Selected: {selectedColors.join(", ")}
              </p>
            )}
          </div>

          {/* Product Tags */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium">
              Product Tags
            </label>
            <Input
              placeholder="Type a tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagInput}
              className="mb-2"
            />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="hover:text-blue-900"
                      aria-label={`Remove ${tag}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Press Enter to add tags. Tags help customers find your product.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={100}
              rows={6}
              className="mb-1 resize-none"
            />
            <p className="text-xs text-gray-500">
              Do not exceed 100 characters when entering the product name.
            </p>
          </div>
        </div>

        {/* Right Column - Upload Images & Additional Details */}
        <div className="space-y-6">
          {/* Upload Images */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Upload images</h2>

            <div className="mb-4 flex gap-4">
              {uploadedImages.slice(0, 2).map((image, index) => (
                <div key={image.id} className="relative">
                  <Image
                    src={image.url || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />
                  <button
                    onClick={() => removeImage(image.id)}
                    className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                  {index === 1 && uploadedImages.length > 2 && (
                    <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                      x{uploadedImages.length - 1}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Upload Area */}
            <div
              className={`relative rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-gray-50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <Upload className="mx-auto mb-3 h-12 w-12 text-blue-500" />
              <p className="text-sm text-gray-600">
                Drop your images here or select{" "}
                <span className="text-blue-500">click to browse</span>
              </p>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              You need to add at least 4 images. Pay attention to the quality of
              the pictures you add, comply with the background color standards.
              Pictures must be in certain dimensions. Notice that the product
              shows all the details
            </p>
          </div>

          {/* Add Size and Product Date */}
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="mb-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Add size
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Product date
                </label>
                <Input
                  type="date"
                  value={productDate}
                  onChange={(e) => setProductDate(e.target.value)}
                  placeholder="mm/dd/yyyy"
                />
              </div>
            </div>

            {/* Size Selection Buttons */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedSizes.includes(size)
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={() => handleSubmit("add")}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Add product
              </Button>
              <Button
                onClick={() => handleSubmit("save")}
                variant="outline"
                className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Save product
              </Button>
              <Button
                onClick={() => handleSubmit("schedule")}
                variant="ghost"
                className="text-gray-600"
              >
                Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
