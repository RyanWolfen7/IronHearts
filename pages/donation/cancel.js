import ShareButton from "@/components/buttons/Share"
import { useRouter } from "next/router"
import { FormattedMessage } from "react-intl"
import { Container, Grid, Typography, Divider, Button } from "@mui/material"

const DonationCancelPage = ({

}) => {
    const Route = useRouter()

    return (
        <Container fixed>
            <Grid container textAlign="center" justifyContent="center" sx={{ zIndex: 1, pb: 15 }} gap={5}>
                <Grid item xs={12} sx={{ zIndex: 1 }}>
                    <Divider sx={{ bgcolor: 'white', my: '16px'}} />
                </Grid>
                <Grid item sx={{ zIndex: 1 }} >
                    <Typography variant="h2" >
                        <FormattedMessage id="cancelHeader"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ zIndex: 1 }}>
                    <Divider sx={{ bgcolor: 'white', my: '16px'}} />
                </Grid>
                <Grid item sx={{ zIndex: 1, px: 5 }}>
                    <Typography variant="body1">
                        <FormattedMessage id="cancelBody1"/>
                    </Typography>
                </Grid>
                <Grid item sx={{ zIndex: 1, px: 5, my: 8 }}>
                    <Typography variant="h5">
                        <FormattedMessage id="cancelHeader2"/>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3} sx={{ zIndex: 1}}>
                    <Grid container gap={5}  justifyContent="center">
                        <Grid item xs={12}> 
                            <Typography variant="h6">
                                <FormattedMessage id="joining"/>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 5, color: '#000' }} onClick={() => Route.push('/join')}>
                                <Typography variant="h6" fontWeight={700}>
                                    <FormattedMessage id="join"/>
                                </Typography>
                            </Button>
                        </Grid>  
                    </Grid>                    
                </Grid>
                <Grid item xs={12} sm={3} sx={{ zIndex: 1}}>
                    <Grid container gap={5} textAlign="center"  justifyContent="center">
                        <Typography variant="h6">
                            <FormattedMessage id="sharing"/>
                        </Typography>
                        <ShareButton />
                    </Grid>
                </Grid>
            </Grid>

        </Container>
    )
}

export default DonationCancelPage
