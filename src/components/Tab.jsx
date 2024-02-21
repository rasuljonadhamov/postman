import React from "react";

const Tab = ({ title, onClick, active, id }) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={` text-gray-500 border-b ${
        active ? " text-black border-red-400 " : " border-transparent "
      } pb-2 hover:text-black cursor-pointer transition-all`}
    >
      {" "}
      {title}{" "}
    </li>
  );
};

export default Tab;
