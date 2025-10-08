"use client";

import {
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// interface User {
//   id: number
//   name: string
//   role: string
//   phone: string
//   email: string
//   avatar: string
//   address?: string
//   joinDate?: string
//   status?: string
//   department?: string
// }

// interface UserDetailsModalProps {
//   user: User | null
//   isOpen: boolean
//   onClose: () => void
//   onEdit?: (user: User) => void
//   onDelete?: (user: User) => void
// }

export default function UserDetailsModal({
  user,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Section */}
          <div className="mb-6 flex items-start gap-4">
            <Image
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
              <p className="text-gray-600">{user.role}</p>
              <div className="mt-2 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                {user.status || "Active"}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Email Address
                </p>
                <p className="mt-1 text-gray-900">{user.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="rounded-full bg-green-100 p-2">
                <Phone className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Phone Number
                </p>
                <p className="mt-1 text-gray-900">{user.phone}</p>
              </div>
            </div>

            {/* Department */}
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="rounded-full bg-purple-100 p-2">
                <Briefcase className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Department</p>
                <p className="mt-1 text-gray-900">
                  {user.department || "Engineering"}
                </p>
              </div>
            </div>

            {/* Join Date */}
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <div className="rounded-full bg-orange-100 p-2">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Join Date</p>
                <p className="mt-1 text-gray-900">
                  {user.joinDate || "Jan 15, 2023"}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 rounded-lg border p-4 sm:col-span-2">
              <div className="rounded-full bg-red-100 p-2">
                <MapPin className="h-5 w-5 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="mt-1 text-gray-900">
                  {user.address || "3517 W. Gray St. Utica, Pennsylvania 57867"}
                </p>
              </div>
            </div>

            {/* Role/Permissions */}
            <div className="flex items-start gap-3 rounded-lg border p-4 sm:col-span-2">
              <div className="rounded-full bg-indigo-100 p-2">
                <Shield className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500">
                  Role & Permissions
                </p>
                <p className="mt-1 text-gray-900">
                  Full access to {user.role.toLowerCase()} dashboard and tools
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 border-t px-6 py-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="outline"
            className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
            onClick={() => onEdit?.(user)}
          >
            Edit User
          </Button>
          <Button
            variant="outline"
            className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent"
            onClick={() => onDelete?.(user)}
          >
            Delete User
          </Button>
        </div>
      </div>
    </div>
  );
}
