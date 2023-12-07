import React from "react";

import { TagProps } from "./types";

const Tag = ({ text }: TagProps) => {
  return (
    <div>
      <span className="bg-green-200 border border-green-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">
        {text}
      </span>
    </div>
  );
};

export default Tag;
