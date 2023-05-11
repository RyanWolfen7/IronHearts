import { Button, Step, StepLabel, StepContent, Fade, Grid,  Slide, Typography, Stepper } from "@mui/material"
import { useState } from "react"
import { FormattedMessage } from "react-intl"

const Experience = ({
    openExperience
}) => {
    const [experienceStep, setExperienceStep] = useState(0) // starts off at 0 for false

    return (
        <Fade in={openExperience}  mountOnEnter unmountOnExit>
            <Grid item xs={12} container justifyContent="center" textAlign="center" sx={{ zIndex: 1, p: 5, mb: 5 }} gap={5}>
                <Stepper activeStep={experienceStep} orientation="vertical">
                    <Step> 
                        <StepLabel> Choose Your Faction </StepLabel>
                        <StepContent>
                            One TWO
                        </StepContent>
                    </Step>
                    <Step> 
                        <StepLabel> Create Your Character </StepLabel>
                        <StepContent>
                            One TWO
                        </StepContent>
                    </Step>
                    <Step> 
                        <StepLabel> Finalize  </StepLabel>
                        <StepContent>
                            One TWO
                        </StepContent>
                    </Step>
                </Stepper>
            </Grid>
        </Fade>
    )
}



export default Experience
