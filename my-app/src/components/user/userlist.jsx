"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserDetailsModal from "./userModal"; // Import UserDetailsModal component

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: "Kristin Watson",
    role: "Product Manager",
    phone: "+1 (555) 123-4567",
    email: "kristin.watson@example.com",
    avatar: "/professional-woman.png",
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Software Engineer",
    phone: "+1 (555) 234-5678",
    email: "wade.warren@example.com",
    avatar: "/professional-man.png",
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "UI/UX Designer",
    phone: "+1 (555) 345-6789",
    email: "esther.howard@example.com",
    avatar: "/woman-designer.png",
  },
  {
    id: 4,
    name: "Cameron Williamson",
    role: "Marketing Manager",
    phone: "+1 (555) 456-7890",
    email: "cameron.w@example.com",
    avatar: "/business-man.png",
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    role: "Sales Representative",
    phone: "+1 (555) 567-8901",
    email: "brooklyn.s@example.com",
    avatar: "/woman-sales.jpg",
  },
  {
    id: 6,
    name: "Savannah Nguyen",
    role: "Customer Support",
    phone: "+1 (555) 678-9012",
    email: "savannah.n@example.com",
    avatar: "/woman-support.jpg",
  },
  {
    id: 7,
    name: "Leslie Alexander",
    role: "Data Analyst",
    phone: "+1 (555) 789-0123",
    email: "leslie.alex@example.com",
    avatar: "/woman-analyst.jpg",
  },
  {
    id: 8,
    name: "Guy Hawkins",
    role: "DevOps Engineer",
    phone: "+1 (555) 890-1234",
    email: "guy.hawkins@example.com",
    avatar: "/man-engineer.png",
  },
  {
    id: 9,
    name: "Robert Fox",
    role: "Product Designer",
    phone: "+1 (555) 901-2345",
    email: "robert.fox@example.com",
    avatar: "/man-designer.png",
  },
  {
    id: 10,
    name: "Jacob Jones",
    role: "Backend Developer",
    phone: "+1 (555) 012-3456",
    email: "jacob.jones@example.com",
    avatar: "/man-developer.png",
  },
  {
    id: 11,
    name: "Eleanor Pena",
    role: "HR Manager",
    phone: "+1 (555) 123-4568",
    email: "eleanor.pena@example.com",
    avatar: "/woman-hr.png",
  },
  {
    id: 12,
    name: "Courtney Henry",
    role: "Content Writer",
    phone: "+1 (555) 234-5679",
    email: "courtney.h@example.com",
    avatar: "/woman-writer.jpg",
  },
];

export function UserList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter users based on search query
  const filteredUsers = mockUsers.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.role.toLowerCase().includes(query) ||
      user.phone.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Reset to page 1 when search query or items per page changes
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  // Modal handlers
  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleEditUser = (user) => {
    console.log("[v0] Edit user:", user);
    // Add edit logic here
    handleCloseModal();
  };

  const handleDeleteUser = (user) => {
    console.log("[v0] Delete user:", user);
    // Add delete logic here
    handleCloseModal();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User List</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/dashboard" className="hover:text-gray-700">
            Dashboard
          </Link>
          <span>›</span>
          <Link href="/users" className="hover:text-gray-700">
            User
          </Link>
          <span>›</span>
          <span className="text-gray-900">All User</span>
        </div>
      </div>

      {/* Search and Add Button */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-transparent"
        >
          <Plus className="mr-2 h-4 w-4" />
          <Link href={"/admin/user/adduser"}>Add User</Link>
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  User
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.role}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{user.phone}</td>
                    <td className="px-6 py-4 text-gray-900">{user.email}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleViewUser(user)}
                          className="rounded p-2 text-blue-500 hover:bg-blue-50"
                          aria-label="View user"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          className="rounded p-2 text-green-500 hover:bg-green-50"
                          aria-label="Edit user"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          className="rounded p-2 text-red-500 hover:bg-red-50"
                          aria-label="Delete user"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No users found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredUsers.length > 0 && (
          <div className="flex items-center justify-between border-t px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              {/* <Select
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
              </Select> */}
              <span className="text-sm text-gray-600">
                Showing {startIndex + 1} to{" "}
                {Math.min(endIndex, filteredUsers.length)} of{" "}
                {filteredUsers.length} entries
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {getPageNumbers().map((page, index) => (
                <Button
                  key={index}
                  variant={page === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    typeof page === "number" && handlePageChange(page)
                  }
                  disabled={page === "..."}
                  className="h-8 w-8 p-0"
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Component */}
      <UserDetailsModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
}
