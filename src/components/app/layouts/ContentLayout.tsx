import React, { PropsWithChildren } from "react";

const ContentLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" h-full overflow-y-scroll flex flex-col gap-4">
      {children}
    </div>
  );
};

export default ContentLayout;
