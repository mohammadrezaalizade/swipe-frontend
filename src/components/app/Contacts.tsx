import React from "react";
import ContentLayout from "./layouts/ContentLayout";
import ContactsLabel from "./ui/ContactsLabel";
import HeadLine from "./ui/HeadLine";
import Input from "./ui/Input";

const mockUser = {
  profile:
    "https://images.unsplash.com/photo-1670681160553-7695645afc40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  location: "USA, LA",
  name: "Mohammareza Alizadeh",
  status: "online",
};

const Contacts = () => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <Input />
      <HeadLine title="Friends" />
      <ContentLayout>
        <ContactsLabel
          location={mockUser.location}
          name={mockUser.name}
          profileURL={mockUser.profile}
          status="online"
        />
        <ContactsLabel
          location={mockUser.location}
          name={mockUser.name}
          profileURL={mockUser.profile}
          status="offline"
        />
      </ContentLayout>
    </div>
  );
};

export default Contacts;
