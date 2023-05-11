import Expedited from "@/components/join/Expedited";
import Experience from "@/components/join/Experience";
import MainCardButtons from "@/components/join/MainCardButtons";
import { Button, Step, Container, StepLabel, StepContent, Fade, Grid,  Slide, Typography, Stepper } from "@mui/material"
import { useState } from "react"
import { FormattedMessage } from "react-intl"

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
        setIsExpedited(!isExpedited)
    }

    const onSubmit = () => {
        if(!validation.email || !validation.password) {
            window.alert('Please fix the above errors') // temp
            return null
        }

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
                <Expedited
                    user={user}
                    validation={validation}
                    textFieldStyles={textFieldStyles}
                    onChange={onChange}
                    openExpeditedHandler={openExpeditedHandler}
                    onSubmit={onSubmit}
                    isExpedited={isExpedited}
                />
                <MainCardButtons 
                    isExpedited={isExpedited}
                    openExperience={openExperience}
                    openExperienceHandler={openExperienceHandler}
                    openExpeditedHandler={openExpeditedHandler}
                />
                <Experience 
                    openExperience={openExperience}
                />
            </Grid>
        </Container>
    )
}

export default JoinPage
