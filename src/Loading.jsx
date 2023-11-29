import React from "react";
import { LuLoader } from "react-icons/lu";
function Loading() {
  return (
    <div className="flex items-start justify-center grow">
      <div className="text-green-700 text-4xl font-semibold">
        <LuLoader className="animate-spin" />
      </div>
    </div>
  );
}
export default Loading;
