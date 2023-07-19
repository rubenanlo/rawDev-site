import { forwardRef } from "react";
import ExperienceSnapshot from "components/about/experience/ExperienceSnapshot";
import ExperienceTimeline from "components/about/experience/ExperienceTimeline";

const Experience = forwardRef(({ experience: { timeline } }, ref) => {
  console.log("🚀 ~ file: Experience.js:6 ~ Experience ~ timeline:", timeline);
  return (
    <div id="experience" ref={ref}>
      <main className="isolate">
        <ExperienceSnapshot />
        <ExperienceTimeline timeline={timeline} />
      </main>
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
