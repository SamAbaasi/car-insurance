import { ReactElement, useState } from "react"

export function useMultiStepsForm (steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0)
    function next() {
        setCurrentStep(i => {
            if(i >= steps.length - 1) return 1;
            return i + 1
        })
    }
    function back() {
        setCurrentStep(i => {
            if(i <= 0) return 1;
            return i - 1
        })
    }
    function goTo(index: number) {
        setCurrentStep(index)
    }
    return {
        currentStep,
        step: steps[currentStep],
        steps,
        next,
        back,
        goTo,
        firstStep: currentStep === 0,
        lastStep: currentStep === steps.length - 1,
    }
}