import { AppBar, Button, Container, Grid, Toolbar, Box, useMediaQuery } from "@mui/material"
import { useRouter } from "next/router"
import { FormattedMessage } from "react-intl"
import Image from "next/legacy/image"
import Logo from '../../public/logo2.png'
import styles from '../../styles/navbar.module.css'

const MainNavbar = ({

}) => {
    const Route = useRouter()
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const buttonSize = isSmallScreen ? 'small' : "xlarge";
    const loggedIn = false

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid 
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item  xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <div className={styles.logoWrapper} onClick={() => Route.push('/')}>
                                    <Image 
                                        src={Logo}
                                        alt="Iron Hearts"
                                        layout="fill"
                                        object-fit="contain"
                                        objectPosition="center"
                                    />
                                </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} justifyContent="center" container>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/about')}> <FormattedMessage id="about"/> </Button>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/lore')}> <FormattedMessage id="lore"/> </Button>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/news')}> <FormattedMessage id="news"/> </Button>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/roadmap')}> <FormattedMessage id="roadmap"/> </Button>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/store')}> <FormattedMessage id="store"/> </Button>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/support')}> <FormattedMessage id="support"/> </Button>
                            <Button color="inherit" size={buttonSize} onClick={() => Route.push('/login')}> <FormattedMessage id={"join"}/> </Button>
                        </Grid>
                    </Grid>                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainNavbar
