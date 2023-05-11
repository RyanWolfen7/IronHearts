import { Button, Step, Container, StepLabel, StepContent, Fade, Grid,  Slide, Typography, Stepper } from "@mui/material"
import { FormattedMessage } from "react-intl"

const MainCardButtons = ({
    isExpedited,
    openExperience,
    openExperienceHandler,
    openExpeditedHandler
}) => {

    return (
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
    )
}

export default MainCardButtons