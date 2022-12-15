import React from "react";
import avatar from "../../../../assets/avatars/avatar-female-3.jpg";

interface Props {
  isOwner: boolean;
}

const ChatLable: React.FC<Props> = ({ isOwner }) => {
  return (
    <div className={`flex gap-2 w-full  ${isOwner ? "justify-end" : "justify-start"}`}>
      <div className="flex gap-2 w-full md:max-w-sm">
        {!isOwner && (
          <img className="w-10 h-10 rounded-full" src={avatar} alt="profile" />
        )}
        <div
          className={`flex flex-col gap-1 ${
            isOwner ? "items-end" : "items-start"
          }`}
        >
          <p
            className={`px-2 py-3 rounded-lg text-xs shadow-sm font-normal text-gray-600 ${
              isOwner ? "bg-blue-500 text-white" : "bg-white "
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio unde
            tempore ad tempora at dicta? Repellat doloribus quibusdam magnam
            reprehenderit voluptatem necessitatibus libero quod beatae vitae,
            accusamus iusto, odit in!
          </p>
          <small className="text-[10px] font-semibold text-gray-500">
            2022/09/19
          </small>
        </div>
      </div>
    </div>
  );
};

export default ChatLable;
