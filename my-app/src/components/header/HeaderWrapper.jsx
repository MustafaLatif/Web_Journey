"use client";

import { useState } from "react";
import NavigationBar from "./NavigationBar";
import Drawer from "./Drawer";
import TopBar from "./TopBar";

export default function HeaderWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <>
       <TopBar />

       <NavigationBar onOpenDrawer={() => setOpen(true)} />

       {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        >
<div
  className="fixed top-0 left-0 h-full lg:w-[1400px] bg-white shadow-xl z-50
             text-3xl leading-relaxed"
>
          <div
            className="  h-full "
            onClick={(e) => e.stopPropagation()}
          >
            <Drawer onCloseDrawer={() => setOpen(false)} />
          </div>
          </div>
        </div>
      )}
    </>
  );
}
