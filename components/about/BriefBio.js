import { forwardRef } from "react";

const BriefBio = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="brief-bio"
      className="h-screen flex flex-col justify-center items-center"
    >
      <p className="text-gray-400">BriefBio</p>
    </div>
  );
});

BriefBio.displayName = "BriefBio";

export default BriefBio;
