import { Button, Container, Divider, Grid, Typography } from "@mui/material"
import { FormattedMessage } from "react-intl"
import { useRouter } from "next/router"

const DonationSuccessPage = ({
    isLoggedIn
}) => {
    const Route = useRouter();

    return (
        <Container fixed>
            <Grid container textAlign="center" justifyContent="center" sx={{ zIndex: 1, pb: 15 }} gap={5}>
                <Grid item xs={12} sx={{ zIndex: 1 }}>
                    <Divider sx={{ bgcolor: 'white', my: '16px'}} />
                </Grid>
                <Grid item sx={{ zIndex: 1 }} >
                    <Typography variant="h2" >
                        <FormattedMessage id="successHeader"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ zIndex: 1 }}>
                    <Divider sx={{ bgcolor: 'white', my: '16px'}} />
                </Grid>
                <Grid item sx={{ zIndex: 1, px: 5 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="successBody1"/>
                    </Typography>
                </Grid>
                <Grid item sx={{ zIndex: 1 }} >
                    <Typography variant="h6" >
                        <FormattedMessage id="successHeader2"/>
                    </Typography>
                </Grid>
                {!isLoggedIn && <><Grid item xs={12} sm={3} sx={{ zIndex: 1 }}>
                    <Grid container gap={5} justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                <FormattedMessage id="discordText" />
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 5, color: '#000' }} onClick={() => window.open('https://discord.com/invite/JpRBNx9C', '_blank')}>
                                <Typography variant="h6" fontWeight={700}>
                                    <FormattedMessage id="Discord" />
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid><Grid item xs={12} sm={3} sx={{ zIndex: 1 }}>
                        <Grid container gap={5} textAlign="center" justifyContent="center">
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <FormattedMessage id="joinText" />
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 5, color: '#000' }} onClick={() => Route.push('/join')}>
                                    <Typography variant="h6" fontWeight={700}>
                                        <FormattedMessage id="join" />
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid></>}
            </Grid>
        </Container>
    )
}




export default DonationSuccessPage
