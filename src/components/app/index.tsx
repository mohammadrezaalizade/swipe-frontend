import React from "react";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Settings from "./Settings";

const App = () => {
  return (
    <div className="px-3 py-2 overflow-y-scroll h-screen w-screen bg-gray-50">
      {/* <Messages /> */}
      {/* <Contacts /> */}
      {/* <Notifications /> */}
      <Settings />
    </div>
  );
};

export default App;
