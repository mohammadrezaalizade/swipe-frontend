import React from "react";

interface Props {
  title: string;
}

const HeadLine: React.FC<Props> = ({ title }) => {
  return <h1 className="text-gray-700 font-semibold text-2xl">{title}</h1>;
};

export default HeadLine;
