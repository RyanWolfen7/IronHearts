import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Card, Step, CardContent, Container, StepLabel, StepContent, Fade, Grid, IconButton, InputAdornment, Slide, TextField, Typography, Stepper } from "@mui/material"
import { useState } from "react"
import { FormattedMessage } from "react-intl"
import Expedited from "../components/join/Expedited"

const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#000",
        },
        "&:hover fieldset": {
            borderColor: "#000",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#000",
        },
        "& .MuiInputBase-input": {
            color: "#000",
        },
    },
    background: "#fff",
    width: "100%",
};

const JoinPage = ({

}) => {
    const [user, setUser] = useState({ email: '', password: '', name: '', age: '', faction: '', mos: '', bio: '' })
    const [validation, setValidation] = useState({email: false, password: false})
    const [isExpedited, setIsExpedited] = useState(false)
    const [openExperience, setOpenExperience] = useState(false)
    const [experienceStep, setExperienceStep] = useState(0) // starts off at 0 for false
    
    const onChange = (event) => {
        const validationRegex = {email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, password: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{16,})\S+$/}
        const updatedInput = { [event.target.id]: event.target.value };
        setUser({...user, ...updatedInput})
        setValidation({...validation, ...{ [event.target.id]: !validationRegex[event.target.id].test(event.target.value)}})
    }

    const openExperienceHandler = () => {
        window.alert('This is still a work in progress') // temp
        // setOpenExperience(true)
    }

    const openExpeditedHandler = () => {
        setIsExpedited(isExpedited)
    }

    const onSubmit = () => {

    } 
    // console.log(user)
    return (
        <Container>
            <Grid container textAlign="center" justifyContent="center" sx={{ zIndex: 1, pb: 15 }} gap={5}>
                <Grid item xs={12} sx={{ zIndex: 1, mt: 5 }} >
                    <Typography variant="h2" >
                        <FormattedMessage id="joinHeader" />
                    </Typography>
                </Grid>
                <Slide direction="left" in={isExpedited} mountOnEnter unmountOnExit>
                    <Expedited
                        user={user}
                        validation={validation}
                        textFieldStyles={textFieldStyles}
                        onChange={onChange}
                        openExpeditedHandler={openExpeditedHandler}
                    />
                </Slide>
                <Fade in={(!isExpedited && !openExperience)} mountOnEnter unmountOnExit>
                    <Grid item xs={12} container justifyContent="center" textAlign="center" sx={{ zIndex: 1, p: 5, mb: 5 }} gap={5}>
                        <Grid item xs={12} md={5} justifyContent="center" container gap={2}>
                            <Typography variant="body1" width="100%">  <FormattedMessage id="joinHeader2" />  </Typography>
                            <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 3, color: '#000' }} onClick={openExperienceHandler}>
                                <Typography variant="h6" fontWeight={700}>
                                    <FormattedMessage id="joinButton" />
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={5} justifyContent="center" container gap={2}>
                            <Typography variant="body1" width="100%">  <FormattedMessage id="joinHeader3" /> </Typography>
                            <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 3, color: '#000' }} onClick={openExpeditedHandler}>
                                <Typography variant="h6" fontWeight={700}>
                                    <FormattedMessage id="joinButton2" />
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Fade>
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
            </Grid>
        </Container>
    )
}

export default JoinPage
