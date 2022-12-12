import React from "react";
import ContentLayout from "./layouts/ContentLayout";
import HeadLine from "./ui/HeadLine";
import Input from "./ui/Input";
import NotificationLabel from "./ui/NotificationLabel";
import { motion } from "framer-motion";
import { fadeInOut } from "../../utils/animations";
const Notifications = () => {
  return (
    <motion.div
      variants={fadeInOut}
      initial="hide"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-4 overflow-hidden"
      key="NotificationsScreen"
    >
      <Input />
      <HeadLine title="Notifications" />
      <ContentLayout>
        <NotificationLabel
          message="Sanne has accepted your friend request."
          type="USER"
        />
        <NotificationLabel
          message="You need change your password for security reasons."
          type="SECURITY"
        />
        <NotificationLabel
          message="Sara has a birthday today. Wish her all the best."
          type="NEWS"
        />
      </ContentLayout>
    </motion.div>
  );
};

export default Notifications;
