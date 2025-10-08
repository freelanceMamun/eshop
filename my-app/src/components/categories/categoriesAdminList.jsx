"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock category data
const mockCategories = [
  {
    id: 1,
    name: "Dried food",
    image: "/green-tea-product.jpg",
    icon: "🥫",
    quantity: 1638,
    sale: 20,
    startDate: "20 Nov 2023",
  },
  {
    id: 2,
    name: "Wet food",
    image: "/cereal-box-product.jpg",
    icon: "🥫",
    quantity: 1638,
    sale: 20,
    startDate: "20 Nov 2023",
  },
  {
    id: 3,
    name: "Supplemental food",
    image: "/purple-snack-product.jpg",
    icon: "💊",
    quantity: 1638,
    sale: 20,
    startDate: "20 Nov 2023",
  },
  {
    id: 4,
    name: "Puppy food",
    image: "/red-beverage-product.jpg",
    icon: "🐾",
    quantity: 1638,
    sale: 20,
    startDate: "20 Nov 2023",
  },
  {
    id: 5,
    name: "Food for adult dogs",
    image: "/artisanal-coffee-beans.png",
    icon: "🦴",
    quantity: 1638,
    sale: 20,
    startDate: "20 Nov 2023",
  },
  {
    id: 6,
    name: "Food for elderly dogs",
    image: "/green-tea-product.jpg",
    icon: "🎒",
    quantity: 1638,
    sale: 20,
    startDate: "20 Nov 2023",
  },
  {
    id: 7,
    name: "Treats & Snacks",
    image: "/cereal-box-product.jpg",
    icon: "🍖",
    quantity: 892,
    sale: 15,
    startDate: "15 Nov 2023",
  },
  {
    id: 8,
    name: "Dental Care",
    image: "/purple-snack-product.jpg",
    icon: "🦷",
    quantity: 456,
    sale: 10,
    startDate: "10 Nov 2023",
  },
  {
    id: 9,
    name: "Organic Food",
    image: "/red-beverage-product.jpg",
    icon: "🌱",
    quantity: 723,
    sale: 25,
    startDate: "05 Nov 2023",
  },
  {
    id: 10,
    name: "Grain-Free Food",
    image: "/artisanal-coffee-beans.png",
    icon: "🌾",
    quantity: 1245,
    sale: 18,
    startDate: "01 Nov 2023",
  },
];

export default function CategoryList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter categories based on search query
  const filteredCategories = mockCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCategories = filteredCategories.slice(startIndex, endIndex);

  // Reset to page 1 when search query changes
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  // Reset to page 1 when items per page changes
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Add Attribute</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/dashboard" className="hover:text-gray-900">
            Dashboard
          </Link>
          <span>›</span>
          <Link href="/categories" className="hover:text-gray-900">
            Category
          </Link>
          <span>›</span>
          <span className="text-gray-400">All category</span>
        </div>
      </div>

      {/* Controls */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
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

          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Button
          variant="outline"
          className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Icon
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Quantity
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Sale
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Start date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentCategories.length > 0 ? (
              currentCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-900">
                        {category.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                      <span className="text-xl">{category.icon}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {category.quantity.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-900">{category.sale}</td>
                  <td className="px-6 py-4 text-gray-900">
                    {category.startDate}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="rounded p-2 text-blue-500 hover:bg-blue-50">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="rounded p-2 text-green-500 hover:bg-green-50">
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button className="rounded p-2 text-red-500 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  No categories found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredCategories.length)} of{" "}
          {filteredCategories.length} entries
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={
                    currentPage === page
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : ""
                  }
                >
                  {page}
                </Button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <span key={page} className="px-2 text-gray-400">
                  ...
                </span>
              );
            }
            return null;
          })}

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
    </div>
  );
}
