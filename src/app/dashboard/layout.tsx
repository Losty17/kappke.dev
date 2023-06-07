"use client";

import Sidebar from "./_layout_sections/Sidebar";
import Topbar from "./_layout_sections/Topbar";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-neutral-300 text-neutral-100 h-screen p-4">
      <div className="desktop:w-4/5 m-auto flex flex-row gap-4 h-full">
        <Sidebar />
        <div className="flex flex-col gap-4 w-full">
          <Topbar />
          {children}
        </div>
      </div>
    </section>
  );
};
