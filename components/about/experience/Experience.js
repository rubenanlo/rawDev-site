import { forwardRef } from "react";
import ExperienceSnapshot from "components/about/experience/ExperienceSnapshot";
import ExperienceTimeline from "components/about/experience/ExperienceTimeline";

const Experience = forwardRef(({ experience: { timeline, snapshot } }, ref) => (
  <div id="experience" ref={ref}>
    <main className="isolate">
      <ExperienceSnapshot snapshot={snapshot} />
      <ExperienceTimeline timeline={timeline} />
    </main>
  </div>
));

Experience.displayName = "Experience";

export default Experience;
