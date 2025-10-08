import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, MessageSquare } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        <div className="flex gap-5 items-center justify-end flex-1">
          <div className="relative w-8 cursor-pointer">
            <Bell size={22}></Bell>
            <span className="absolute bg-orange-400 text-white w-4 h-4  animate-ping rounded-full flex justify-center items-center text-xs -top-1 right-[5px]"></span>
            <span className="absolute bg-orange-400 text-white w-4 h-4   rounded-full flex justify-center items-center text-xs -top-1 right-[5px]">
              1
            </span>
          </div>

          <div className="relative w-8 cursor-pointer">
            <MessageSquare size={22}></MessageSquare>
            <span className="absolute bg-orange-400 text-white w-4 h-4  animate-ping rounded-full flex justify-center items-center text-xs -top-1 right-[5px]"></span>
            <span className="absolute bg-orange-400 text-white w-4 h-4   rounded-full flex justify-center items-center text-xs -top-1 right-[5px]">
              1
            </span>
          </div>

          {/* Admin */}
          <div className="flex gap-2">
            <div className="profile-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                alt="admin-image"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold">Webnuxt</h4>
              <p className="text-sm ">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
