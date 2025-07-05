// app/admin/layout.tsx

export const metadata = {
  title: "Admin Panel",
  description: "Admin area only",
};

function AdminLayout({ children }) {
  return (
    // OVERRIDING main layout
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <div className="flex">
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default AdminLayout;
