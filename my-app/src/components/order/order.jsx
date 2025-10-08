"use client";

import { useState } from "react";
import {
  Search,
  FileDown,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { mockOrders } from "@/utils/order";

import { useRouter } from "next/navigation";

// interface Order {
//   id: string
//   product: {
//     name: string
//     image: string
//   }
//   orderId: string
//   price: number
//   quantity: number
//   payment: number
//   status: "Success" | "Pending" | "Cancel"
//   tracking: string
// }

export function OrderTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const router = useRouter();
  const filteredOrders = mockOrders.filter(
    (order) =>
      order.product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.orderId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, endIndex);

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Success":
        return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
      case "Pending":
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
      case "Cancel":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  const handleExport = () => {
    console.log("Exporting orders...");
  };

  //  Order details function

  const orderDetails = (orderId) => {
    router.push(`/admin/order/${orderId}`);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Order List</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <span>›</span>
            <span>Order</span>
            <span>›</span>
            <span className="text-foreground">Order List</span>
          </div>
        </div>
      </div>

      {/* Search and Export */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 h-10"
          />
        </div>
        <Button
          onClick={handleExport}
          variant="outline"
          className="gap-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
        >
          <FileDown className="h-4 w-4" />
          Export all order
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Product
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Order ID
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Price
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Quantity
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Payment
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Status
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Tracking
                </th>
                <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.length > 0 ? (
                paginatedOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-[#d9e3ec] last:border-0 hover:bg-muted/30"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden bg-muted">
                          <Image
                            src={order.product.image || "/placeholder.svg"}
                            alt={order.product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium text-sm">
                          {order.product.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm">{order.orderId}</td>
                    <td className="p-4 text-sm">
                      $
                      {order.price.toLocaleString("en-US", {
                        minimumFractionDigits: 3,
                      })}
                    </td>
                    <td className="p-4 text-sm">
                      {order.quantity.toLocaleString()}
                    </td>
                    <td className="p-4 text-sm">{order.payment}</td>
                    <td className="p-4">
                      <Badge
                        variant="secondary"
                        className={getStatusColor(order.status)}
                      >
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-blue-500 font-medium">
                        {order.tracking}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            orderDetails(order.orderId);
                          }}
                          className="p-1.5 hover:bg-muted rounded-md transition-colors"
                          aria-label="View order"
                        >
                          <Eye className="h-4 w-4 text-blue-500" />
                        </button>
                        <button
                          className="p-1.5 hover:bg-muted rounded-md transition-colors"
                          aria-label="Edit order"
                        >
                          <Pencil className="h-4 w-4 text-emerald-500" />
                        </button>
                        <button
                          className="p-1.5 hover:bg-muted rounded-md transition-colors"
                          aria-label="Delete order"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="p-8 text-center text-muted-foreground"
                  >
                    No orders found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredOrders.length > 0 && (
          <div className="flex items-center justify-between px-4 py-3 border-t">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(Number(e.target.value))
                }
                className="border rounded-md px-2 py-1 text-sm bg-background"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-muted-foreground">entries</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, filteredOrders.length)} of{" "}
                {filteredOrders.length} entries
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {totalPages <= 5 ? (
                Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="h-8 w-8 p-0"
                    >
                      {page}
                    </Button>
                  )
                )
              ) : (
                <>
                  {currentPage > 2 && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(1)}
                        className="h-8 w-8 p-0"
                      >
                        1
                      </Button>
                      {currentPage > 3 && <span className="px-2">...</span>}
                    </>
                  )}
                  {Array.from({ length: 3 }, (_, i) => {
                    const page =
                      currentPage === 1
                        ? i + 1
                        : currentPage === totalPages
                        ? totalPages - 2 + i
                        : currentPage - 1 + i;
                    if (page > 0 && page <= totalPages) {
                      return (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(page)}
                          className="h-8 w-8 p-0"
                        >
                          {page}
                        </Button>
                      );
                    }
                    return null;
                  })}
                  {currentPage < totalPages - 1 && (
                    <>
                      {currentPage < totalPages - 2 && (
                        <span className="px-2">...</span>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(totalPages)}
                        className="h-8 w-8 p-0"
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}
                </>
              )}

              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
