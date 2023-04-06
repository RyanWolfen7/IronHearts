import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material"

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
                                Iron Hearts
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button color="inherit" size="large"> About </Button>
                            <Button color="inherit" size="large"> Store </Button>
                            <Button color="inherit" size="large"> News </Button>
                            <Button color="inherit" size="large"> Login </Button>
                        </Grid>
                    </Grid>                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainNavbar
