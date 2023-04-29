import { Fragment } from "preact";
import { useState } from "preact/hooks";
import { values, debounce } from "lodash-es";

import Tab from "./Tab";
import { TABS } from "../../constants";
import InsectSVG from "./svg/InsectSVG";
import MessageLayout from "./MessageLayout";
import IconPanel from "./IconPanel";

export default function DrawerBody() {
  const [selectedTab, setSelectedTab] = useState(TABS.RECENT.key);
  const [searchTerm, setSearchTerm] = useState("");

  const deboundedSearch = debounce((value) => {
    setSearchTerm(value);
  }, 300);

  return (
    <Fragment>
      <input
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        type="text"
        placeholder="Search for an Icon or Image ✨"
        onInput={(event) => deboundedSearch(event.target.value)}
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
          <TabPanel selectedTab={selectedTab} searchTerm={searchTerm} />
        </div>
      </div>
    </Fragment>
  );
}

function TabPanel({ selectedTab, searchTerm }) {
  if (selectedTab === TABS.RECENT.key) {
    return (
      <MessageLayout
        SVG={InsectSVG}
        title="Oops! We're cricketing a blank here!"
        description="chirp... chirp... chirp..."
      />
    );
  }

  if (selectedTab === TABS.ICON.key) {
    return <IconPanel searchTerm={searchTerm} />;
  }
}
