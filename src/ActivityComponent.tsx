import { useState, Activity } from "react";
import Active from "./Active";

const ActivityComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <h1>Activity</h1>

        <button onClick={() => setIsOpen((current) => !current)}>Toggle</button>

        <Activity mode={isOpen ? 'visible' : 'hidden'}>
          <Active />
        </Activity>

        {isOpen && (
          <> 2:
            <Active />
          </>
        )}
    </div>
  )
};

export default ActivityComponent;