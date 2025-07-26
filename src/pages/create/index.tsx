import { CustomStepper } from "~/components/comp-522";
import { Heading } from "./components/heading";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Summary } from "./components/summary";
import React, { useState } from "react";

export function Create() {
  const [value, setValue] = useState(1);

  const handleValue = (v: number) => {
    setValue(v);
  };

  const elements = [
    {
      id: 1,
      element: <Heading />,
    },
    {
      id: 2,
      element: <Experience />,
    },
    {
      id: 3,
      element: <Education />,
    },

    {
      id: 4,
      element: <Skills />,
    },
    {
      id: 5,
      element: <Summary />,
    },
  ];

  return (
    <div>
      <div className="mt-10">
        <CustomStepper value={value} handleValue={handleValue} />
        <div>
          {elements.map((item) => {
            if (item.id === value) {
              return (
                <React.Fragment key={item.id}>{item.element}</React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
