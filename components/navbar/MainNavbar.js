import { AppBar, Button, Container, Grid, Toolbar, Typography, Box } from "@mui/material"
import { useRouter } from "next/router"
import { FormattedMessage } from "react-intl"
import Image from 'next/image'
import Logo from '../../public/logo2.png'

const MainNavbar = ({

}) => {
    const Route = useRouter()
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid 
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <div style={{ position: 'relative', width: '25vw', height: '7rem', margin: 5 }}>
                                    <Image 
                                        src={Logo}
                                        alt="Iron Hearts"
                                        layout="fill"
                                        object-fit="contain"
                                        objectPosition="center"
                                    />
                                </div>
                            </Box>
                            {/* <Typography
                                variant="h2"
                                noWrap
                                color="inherit"
                                onClick={() => Route.push('/')}
                                sx={{ ":hover": { cursor: "pointer" }}}
                            >
                                <FormattedMessage id="title"/>
                            </Typography> */}
                        </Grid>
                        <Grid item>
                            <Button color="inherit" size="large" onClick={() => Route.push('/about')}> <FormattedMessage id="about"/> </Button>
                            <Button color="inherit" size="large" onClick={() => Route.push('/store')}> <FormattedMessage id="store"/> </Button>
                            <Button color="inherit" size="large" onClick={() => Route.push('/news')}> <FormattedMessage id="news"/> </Button>
                            <Button color="inherit" size="large" onClick={() => Route.push('/login')}> <FormattedMessage id="login"/> </Button>
                        </Grid>
                    </Grid>                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default MainNavbar
