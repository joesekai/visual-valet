import { useState, useEffect } from "preact/hooks";
import { Toaster } from "react-hot-toast";

import DrawerBody from "./components/DrawerBody";

const iconSelector = "#visual-valet-button > .ToolIcon__icon";
const svgSelector = "#visual-valet-button > .ToolIcon__icon > svg";
const inputSelector = "#visual-valet-button > input";

export default function App() {
  const drawerBtn = document.querySelector("#visual-valet-button");
  const icon = document.querySelector(iconSelector);
  const svg = document.querySelector(svgSelector);
  const input = document.querySelector(inputSelector);
  const canvas = document.querySelector("#root");

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpenDrawer = (event) => {
    if (event) {
      event.preventDefault();
    }

    setIsDrawerOpen(true);

    icon.style = "background: #e3e2fe";
    svg.style = "stroke: #5b57d1";
    input.checked = true;
  };

  const handleCloseDrawer = (event) => {
    if (event) {
      event.preventDefault();
    }

    setIsDrawerOpen(false);

    icon.style = "background: transparent";
    svg.style = "stroke: #3d3d3d";
    input.checked = false;
  };

  useEffect(() => {
    if (!drawerBtn) return;

    const handleClick = () => {
      if (isDrawerOpen) {
        handleCloseDrawer();
      } else {
        handleOpenDrawer();
      }
    };

    drawerBtn.addEventListener("click", handleClick);
    return () => drawerBtn.removeEventListener("click", handleClick);
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleClick = (event) => {
      if (isDrawerOpen) {
        handleCloseDrawer(event);
      }
    };

    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, [isDrawerOpen]);

  if (!isDrawerOpen) {
    return;
  }

  return (
    <div className="absolute top-0 right-0 h-full w-96 bg-white drop-shadow-md z-10 p-5 font-sans antialiased">
      <div className="h-full w-full flex-col flex gap-4">
        <div className="flex w-full justify-between items-center">logo</div>
        <DrawerBody />
        <Toaster />
      </div>
    </div>
  );
}
