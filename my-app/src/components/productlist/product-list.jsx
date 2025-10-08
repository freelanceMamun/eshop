"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Eye, Pencil, Trash2, Plus, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

// Mock product data
const mockProducts = [
  {
    id: 1,
    name: "Dog Food, Chicken & Chicken Liver Recipe...",
    productId: "#7712309",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "$28,672.36",
    image: "/green-tea-product.jpg",
    category: "Dog Food",
  },
  {
    id: 2,
    name: "Grain Free Dry Dog Food | Rachael Ray® Nutrish®",
    productId: "#7712309",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "$28,672.36",
    image: "/cereal-box-product.jpg",
    category: "Dog Food",
  },
  {
    id: 3,
    name: "Weruva Pumpkin Patch Up! Pumpkin With Ginger...",
    productId: "#7712309",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "$28,672.36",
    image: "/purple-snack-product.jpg",
    category: "Supplements",
  },
  {
    id: 4,
    name: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
    productId: "#7712309",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "$28,672.36",
    image: "/red-beverage-product.jpg",
    category: "Treats",
  },
  {
    id: 5,
    name: "Milk-Bone Mini's Flavor Snacks Dog Treats, 15 Ounce",
    productId: "#7712310",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "In stock",
    startDate: "$28,672.36",
    image: "/artisanal-coffee-beans.png",
    category: "Treats",
  },
  {
    id: 6,
    name: "Weruva Pumpkin Patch Up! Dog & Cat Food...",
    productId: "#7712311",
    price: 1452.5,
    quantity: 1638,
    sale: 20,
    stock: "Out of stock",
    startDate: "$28,672.36",
    image: "/green-tea-product.jpg",
    category: "Supplements",
  },
  {
    id: 7,
    name: "Premium Cat Food, Salmon Recipe",
    productId: "#7712312",
    price: 1250.0,
    quantity: 850,
    sale: 15,
    stock: "In stock",
    startDate: "$18,750.00",
    image: "/cereal-box-product.jpg",
    category: "Cat Food",
  },
  {
    id: 8,
    name: "Organic Dog Treats, Peanut Butter Flavor",
    productId: "#7712313",
    price: 850.0,
    quantity: 2100,
    sale: 30,
    stock: "In stock",
    startDate: "$25,500.00",
    image: "/purple-snack-product.jpg",
    category: "Treats",
  },
  {
    id: 9,
    name: "Cat Litter, Clumping Formula",
    productId: "#7712314",
    price: 650.0,
    quantity: 1200,
    sale: 10,
    stock: "Low stock",
    startDate: "$7,800.00",
    image: "/red-beverage-product.jpg",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Dog Dental Chews, Large Size",
    productId: "#7712315",
    price: 950.0,
    quantity: 750,
    sale: 25,
    stock: "In stock",
    startDate: "$23,750.00",
    image: "/artisanal-coffee-beans.png",
    category: "Treats",
  },
  {
    id: 11,
    name: "Premium Kitten Food, Chicken Formula",
    productId: "#7712316",
    price: 1100.0,
    quantity: 950,
    sale: 18,
    stock: "In stock",
    startDate: "$19,800.00",
    image: "/green-tea-product.jpg",
    category: "Cat Food",
  },
  {
    id: 12,
    name: "Dog Shampoo, Oatmeal & Aloe",
    productId: "#7712317",
    price: 450.0,
    quantity: 1500,
    sale: 12,
    stock: "In stock",
    startDate: "$6,750.00",
    image: "/cereal-box-product.jpg",
    category: "Accessories",
  },
];
import { useRouter } from "next/navigation";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const router = useRouter();

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(mockProducts.map((p) => p.category)));
    return ["all", ...cats];
  }, []);

  // Filter products by search query and category
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.productId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when search or category changes
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const getStockBadgeColor = (stock) => {
    if (stock === "In stock") return "bg-green-100 text-green-700";
    if (stock === "Low stock") return "bg-yellow-100 text-yellow-700";
    return "bg-orange-100 text-orange-700";
  };

  //  view Product function
  const ViewProductHandel = (productId) => {
    router.push(`/admin/ecommarce/${productId}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Info Tip Banner */}
      {/* <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-gray-700">
          <span className="font-medium">Tip search by Product ID:</span> Each
          product is provided with a unique ID, which you can rely on to find
          the exact product you need.
        </p>
      </div> */}

      {/* Controls Bar */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          {/* Items per page selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Showing</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={handleItemsPerPageChange}
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-600">entries</span>
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Add New Button */}
        <Button
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
        >
          <Plus className="w-4 h-4 mr-2" />
          <Link href={"/admin/ecommarce/add"}>Add Product</Link>
        </Button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Product ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Quantity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Sale
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Stock
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Start date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 line-clamp-2">
                          {product.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.productId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      ${product.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.quantity.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.sale}
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant="secondary"
                        className={getStockBadgeColor(product.stock)}
                      >
                        {product.stock}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {product.startDate}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => ViewProductHandel(product.id)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {/* view Product */}
                          <Eye className="w-4 h-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                          <Pencil className="w-4 h-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <p className="text-gray-500">No products found</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredProducts.length)} of{" "}
            {filteredProducts.length} entries
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNumber;
              if (totalPages <= 5) {
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNumber = totalPages - 4 + i;
              } else {
                pageNumber = currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNumber)}
                  className="w-10"
                >
                  {pageNumber}
                </Button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className="text-gray-500">...</span>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
