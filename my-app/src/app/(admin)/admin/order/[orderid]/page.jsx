"use client";

import { ChevronLeft, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// interface OrderItem {
//   id: string
//   productName: string
//   customerName: string
//   image: string
//   quantity: number
//   price: number
// }

const mockOrderItems = [
  {
    id: "1",
    productName: "Organic Cereal Box",
    customerName: "Kristin Watson",
    image: "/cereal-box-product.jpg",
    quantity: 1,
    price: 50.47,
  },
  {
    id: "2",
    productName: "Artisanal Coffee Beans",
    customerName: "Kristin Watson",
    image: "/artisanal-coffee-beans.png",
    quantity: 1,
    price: 50.47,
  },
  {
    id: "3",
    productName: "Purple Snack Pack",
    customerName: "Kristin Watson",
    image: "/purple-snack-product.jpg",
    quantity: 1,
    price: 50.47,
  },
];

export default function OrderDetails({ orderId }) {
  const subtotal = 70.13;
  const shipping = 10.0;
  const tax = 5.0;
  const total = 90.58;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="">
        {/* Back Button */}
        <Link href="/orders">
          <Button
            variant="ghost"
            className="mb-6 gap-2 hover:bg-transparent px-0"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Orders
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Order Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Items List */}
            <div className="bg-white  shadow-md shadow-stone-300  rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">All item</h2>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Sort</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {mockOrderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 pb-6 border-b last:border-0 last:pb-0"
                  >
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.productName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">
                          Product name
                        </p>
                        <p className="text-sm font-medium">
                          {item.customerName}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Quantity</p>
                        <p className="text-sm font-medium">{item.quantity}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Price</p>
                        <p className="text-sm font-medium">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart Totals */}
            <div className="bg-white shadow-md shadow-stone-300  rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6">Cart Totals</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (GST):</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base pt-4 border-t">
                  <span className="font-semibold">Total price:</span>
                  <span className="font-semibold text-orange-500">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Summary */}
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white shadow-md shadow-stone-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6">Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Order ID</span>
                  <span className="font-semibold">#192847</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium">20 Nov 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total</span>
                  <span className="font-semibold text-orange-500">$948.5</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white shadow-md shadow-stone-300  rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3">Shipping Address</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                3517 W. Gray St. Utica, Pennsylvania 57867
              </p>
            </div>

            {/* Payment Method */}
            <div className="bg-white shadow-md shadow-stone-300  rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3">Payment Method</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Pay on Delivery (Cash/Card). Cash on delivery (COD) available.
                Card/Net banking acceptance subject to device availability.
              </p>
            </div>

            {/* Expected Delivery */}
            <div className="bg-white shadow-md shadow-stone-300 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3">
                Expected Date Of Delivery
              </h3>
              <p className="text-sm text-emerald-600 font-medium mb-4">
                20 Nov 2023
              </p>
              <Button
                variant="outline"
                className="w-full gap-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
              >
                <Truck className="h-4 w-4" />
                Track order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
