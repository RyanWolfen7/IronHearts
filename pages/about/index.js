import { FormattedMessage } from "react-intl"
import { Box, Button, Container, Divider, Grid, Typography } from "@mui/material"
import PaymentModal from "@/components/navbar/PaymentModal"
import LoginModal from "@/components/navbar/LoginModal"
import { useRouter } from "next/router"
import { useState } from "react"

const About = ({

}) => {
    const Route = useRouter()
    const [openPaymentModal, setOpenPaymentModal] = useState(false)

    const handlePaymentModal = () => {setOpenPaymentModal(!openPaymentModal)};

    return (
        <Container fixed  >
            <PaymentModal open={openPaymentModal} handleClose={handlePaymentModal}/>
            <Grid container textAlign="center" justifyContent="center" sx={{ zIndex: 1, pb: 15 }} gap={5}>
                <Grid item sx={{ zIndex: 1 }} >
                    <Typography variant="h2"  placeItems="center">
                        <FormattedMessage id="ourStory"/>
                    </Typography>
                </Grid>
                <Grid item sx={{ zIndex: 1 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="ourStory2"/>
                    </Typography>
                </Grid>
                <Grid item sx={{ zIndex: 1 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="ourStory3"/>
                    </Typography>
                </Grid>
                <Grid item sx={{ zIndex: 1 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="ourStory4"/>
                    </Typography>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sx={{ zIndex: 1, mt: 2 }}>
                    <Typography variant="h2">
                        <FormattedMessage id="ourTeam"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}  sx={{ zIndex: 1 }}>
                    <Typography variant="h6">
                        <FormattedMessage id="writer"/>
                    </Typography>
                    <Typography variant="body1">
                        Gruntz 
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}  sx={{ zIndex: 1 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="gruntz"/>
                    </Typography>
                    <br/>
                    <Typography variant="body1">
                        <FormattedMessage id="gruntz2"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ zIndex: 1 }}>
                    <Divider sx={{ bgcolor: 'white', my: '16px'}} />
                </Grid>                
                <Grid item xs={12} sm={4}  sx={{ zIndex: 1 }}>
                    <Typography variant="h6">
                        <FormattedMessage id="artist"/>
                    </Typography>
                    <Typography variant="body1">
                        Chiflame 
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}  sx={{ zIndex: 1 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="chi"/>
                    </Typography>
                    <br/>
                    <Typography variant="body1">
                        <FormattedMessage id="chi2"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ zIndex: 1 }}>
                    <Divider sx={{ bgcolor: 'white', my: '16px'}} />
                </Grid>
                <Grid item xs={12} sm={4}  sx={{ zIndex: 1 }}>
                    <Typography variant="h6">
                        <FormattedMessage id="family"/>
                    </Typography>
                    <Typography variant="body1">
                        <FormattedMessage id="you"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ zIndex: 1 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="you2"/>
                    </Typography>
                    <br/>
                    <Grid container gap={2} justifyContent="center">
                        <Grid item xs={3}>
                            <Button color="secondary" variant="contained" onClick={() => Route.push('/join')}>
                                <FormattedMessage id="join"/>
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button color="secondary" variant="contained" onClick={handlePaymentModal}>
                                <FormattedMessage id="support"/>
                            </Button>
                        </Grid>
                    </Grid>  
                </Grid>             
            </Grid>
        </Container>
    )
}

export default About
