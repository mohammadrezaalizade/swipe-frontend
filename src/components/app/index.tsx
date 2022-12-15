import React, { useState } from "react";
import { ScreenType } from "../../types/screen";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import { AnimatePresence } from "framer-motion";
import Message from "./Message";
import { Chat, Footer, Header } from "./ui/message";
const App = () => {
  const [currentScreen, setCureentScreen] = useState<ScreenType>("MESSAGES");
  return (
    <>
      <AnimatePresence>
        <Message />
      </AnimatePresence>
      <div className="flex bg-gray-50">
        <Sidebar
          cureentScreen={currentScreen}
          setCureentScreen={setCureentScreen}
        />
        <div className=" overflow-y-scroll h-screen w-screen  lg:flex lg:justify-between lg:gap-3">
          <div className="flex flex-1 lg:w-[25vw] lg:max-w-[25vw] gap-2 mb-20 flex-col w-full px-3 py-2">
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
          <div className="hidden lg:flex lg:flex-col w-full  flex-1 border-l border-dashed">
            <Header />
            <Chat />
            <Footer />
          </div>
        </div>
        <TabBar
          cureentScreen={currentScreen}
          setCureentScreen={setCureentScreen}
        />
      </div>
    </>
  );
};

export default App;
