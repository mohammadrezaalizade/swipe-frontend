import React from "react";
import ContentLayout from "./layouts/ContentLayout";
import HeadLine from "./ui/HeadLine";
import Input from "./ui/Input";
import NotificationLabel from "./ui/NotificationLabel";
const Notifications = () => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
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
    </div>
  );
};

export default Notifications;
