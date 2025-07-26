import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "~/components/ui/stepper";

const steps = [
  {
    step: 1,
    title: "Heading",
  },
  {
    step: 2,
    title: "Experience",
  },
  {
    step: 3,
    title: "Education",
  },
  {
    step: 4,
    title: "Skills",
  },
  {
    step: 5,
    title: "Summary",
  },
  {
    step: 6,
    title: "Finalize",
  },
];

interface StepperProps {
  value: number
  handleValue: (v: number)=> void
}

export function CustomStepper({value, handleValue}: StepperProps) {

  return (
    <div className="space-y-8 w-[50%] mx-auto  text-center">
      <Stepper value={value} defaultValue={1}>
        {steps.map(({ step, title }) => (
          <StepperItem
            key={step}
            step={step}
            
            className="relative flex-1 flex-col!"
          >
            <StepperTrigger onClick={()=> handleValue(step)} className="flex-col cursor-pointer  gap-3 rounded">
              <StepperIndicator />
              <div className="space-y-0.5 px-2">
                <StepperTitle>{title}</StepperTitle>
              </div>
            </StepperTrigger>
            {step < steps.length && (
              <StepperSeparator className="absolute  inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
            )}
          </StepperItem>
        ))}
      </Stepper>
    </div>
  );
}
