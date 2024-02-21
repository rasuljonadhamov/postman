import React, { useState } from "react";
import Tab from "./Tab";
import ParamsTable from "./ParamsTable";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="mt-4">
      <ul className="flex gap-4">
        <Tab
          id={0}
          title="Params"
          onClick={handleTab}
          active={activeTab === 0}
        />
        <Tab
          id={1}
          title="Headers"
          onClick={handleTab}
          active={activeTab === 1}
        />
        <Tab id={2} title="Body" onClick={handleTab} active={activeTab === 2} />
      </ul>

      {activeTab === 0 && <ParamsTable />}
    </div>
  );
};

export default Tabs;
