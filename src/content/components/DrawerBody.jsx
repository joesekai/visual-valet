import { Fragment } from "preact";
import { useState } from "preact/hooks";
import { values } from "lodash-es";

import Tab from "./Tab";
import { TABS } from "../constants";
import InsectSVG from "./svg/InsectSVG";
import MessageLayout from "./MessageLayout";

export default function DrawerBody() {
  const [selectedTab, setSelectedTab] = useState(TABS.RECENT.key);

  return (
    <Fragment>
      <input
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="text"
        placeholder="Search for an Icon or Image ✨"
      />
      <div class="w-full h-full max-w-md">
        <div class="flex justify-between space-x-4">
          {values(TABS).map((tab) => (
            <Tab
              key={tab.key}
              Icon={tab.icon}
              label={tab.label}
              isSelected={selectedTab === tab.key}
              handleClick={() => setSelectedTab(tab.key)}
            />
          ))}
        </div>
        <div class="h-full">
          <MessageLayout
            SVG={InsectSVG}
            title="Oops! We're cricketing a blank here!"
            description="chirp... chirp... chirp..."
          />
        </div>
      </div>
    </Fragment>
  );
}
