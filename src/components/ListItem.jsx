import React from "react";

const ListItem = ({ data }) => {
  const { postName, lastDateToApply, numberOfPosts } = data;
  return (
    <li className="p-3 sm:p-4 border border-secondary rounded-lg">
      <div className="flex justify-between items-center">
        <div className="inline-flex flex-col">
          <h2 className="font-semibold">{postName}</h2>
          <span className="font-light italic text-primary-black">Last date : {lastDateToApply}</span>
        </div>

        <div className="">
            <button className="px-2 py-2 text-sm font-semibold bg-secondary text-white whitespace-nowrap rounded-md ">View Details</button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
