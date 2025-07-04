// app/admin/layout.tsx
export const metadata = {
  title: "Admin Panel",
  description: "Admin area only",
};

export default function AdminLayout({ children }) {
  return (
    // OVERRIDING main layout
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <div className="flex">
          <aside className="w-64 h-screen bg-gray-800 text-white p-4">
            Admin Sidebar
          </aside>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
