import { useState, useEffect } from "preact/hooks";
import DrawerBody from "./components/DrawerBody";

const iconSelector = "#visual-valet-button > .ToolIcon__icon";
const svgSelector = "#visual-valet-button > .ToolIcon__icon > svg";
export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const drawerBtn = document.querySelector("#visual-valet-button");
    const icon = document.querySelector(iconSelector);
    const svg = document.querySelector(svgSelector);

    if (!drawerBtn) return;

    const handleClick = (event) => {
      event.preventDefault();

      setIsDrawerOpen((status) => {
        if (status) {
          icon.style = "background: transparent";
          svg.style = "stroke: #3d3d3d";
        } else {
          icon.style = "background: #e3e2fe; ";
          svg.style = "stroke: #5b57d1";
        }

        return !status;
      });
    };

    drawerBtn.addEventListener("click", handleClick);

    return () => drawerBtn.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const envrionment = document.querySelector("#root");
    envrionment.addEventListener("click", () => {
      if (isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    });
  }, [isDrawerOpen]);

  if (!isDrawerOpen) {
    return;
  }

  return (
    <div className="absolute top-0 right-0 h-full w-96 bg-white drop-shadow-md z-10 p-5 font-sans antialiased">
      <div className="h-full w-full flex-col flex gap-4">
        <div className="flex w-full justify-between items-center">logo</div>
        <DrawerBody />
      </div>
    </div>
  );
}
