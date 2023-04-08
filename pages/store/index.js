import { Container, Grid, Typography } from "@mui/material"
import { FormattedMessage } from "react-intl"

const Shop = ({}) => {

    return (
        <Container fixed>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                height: "100vh",  // set height to full viewport height
                zIndex: 1,
                pb: 15,
                position: "relative"  // add position relative to center absolute child
                }}
            >
                <Grid item xs={12} sm={8} md={6} sx={{ zIndex: 1, position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <Typography variant="h2" textAlign="center">
                    <FormattedMessage id="Coming Soon" />
                </Typography>
                </Grid>
            </Grid>
            </Container>
    )
}

export default Shop
