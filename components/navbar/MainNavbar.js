import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material"
import { FormattedMessage } from "react-intl"

const MainNavbar = ({

}) => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid 
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <Typography
                                variant="h2"
                                noWrap
                                component="a"
                                href="/"
                            >
                                <FormattedMessage id="title"/>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" size="large"> <FormattedMessage id="about"/> </Button>
                            <Button color="inherit" size="large"> <FormattedMessage id="store"/> </Button>
                            <Button color="inherit" size="large"> <FormattedMessage id="news"/> </Button>
                            <Button color="inherit" size="large"> <FormattedMessage id="login"/> </Button>
                        </Grid>
                    </Grid>                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainNavbar
