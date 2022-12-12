import React, { useState } from "react";
import { ScreenType } from "../../types/screen";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [currentScreen, setCureentScreen] = useState<ScreenType>("MESSAGES");
  return (
    <div className="flex bg-gray-50">
      <Sidebar
        cureentScreen={currentScreen}
        setCureentScreen={setCureentScreen}
      />
      <div className="px-3 py-2 overflow-y-scroll h-screen w-screen  lg:flex lg:justify-between lg:gap-3">
        <div className="flex flex-1 lg:w-[25vw] lg:max-w-[25vw] gap-2 mb-20 flex-col w-full">
          <AnimatePresence key="MessagesScreen">
            {currentScreen === "MESSAGES" && <Messages />}
          </AnimatePresence>
          <AnimatePresence key="ContactsScreen">
            {currentScreen === "CONTACTS" && <Contacts />}
          </AnimatePresence>
          <AnimatePresence key="NotificationsScreen">
            {currentScreen === "NOTIFICATIONS" && <Notifications />}
          </AnimatePresence>
          <AnimatePresence key="SettingsScreen">
            {currentScreen === "SETTINGS" && <Settings />}
          </AnimatePresence>
        </div>
        <div className="hidden lg:flex lg:col-span-8 w-full  flex-1 border-l border-dashed px-3">
          <h1>Messages</h1>
        </div>
      </div>
      <TabBar
        cureentScreen={currentScreen}
        setCureentScreen={setCureentScreen}
      />
    </div>
  );
};

export default App;
