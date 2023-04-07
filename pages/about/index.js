import { FormattedMessage } from "react-intl"
import { Container, Grid, Typography } from "@mui/material"

const About = ({

}) => {

    return (
        <Container fixed>
            <Grid container textAlign="center" placeItems="center">
                <Typography variant="h2">
                    <FormattedMessage id="ourStory"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="aboutIntro"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="aboutIntro2"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="about2"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="about3"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="about4"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="about5"/>
                </Typography>
                <Typography variant="body1">
                    <FormattedMessage id="about6"/>
                </Typography>
            </Grid>
            
        </Container>
    )
}

export default About
