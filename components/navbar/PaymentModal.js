import { Box, Button, Card, CardContent, Grid, Modal, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef } from "react";


const PaymentModal = ({ open, handleClose }) => {
    const modalRef = useRef();
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target.closest('.MuiCard-root'))) {
            handleClose();
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submit login form");
    };

    const handlePaypalClick = () => {
        console.log("Pay with PayPal");
        window.location.href = 'https://www.paypal.com/donate/?hosted_button_id=YY5HDGQU52UW8'
    };

    const handleVenmoClick = () => {
        console.log("Pay with Venmo");
    };

    return (
        <Modal open={open} onClose={handleClose} ref={modalRef} onClick={handleOutsideClick}>
            <Grid container placeContent="center">
                <Grid item width="100%" height="100%" margin={isSmallScreen ? '10% 0' : "10% 25%"}>
                    <Card>
                        <CardContent sx={{ pt: 5 }}>
                            <Typography
                                color="primary"
                                variant="h4"
                                textAlign="center"
                                mb={5}
                            >
                                Support Iron Hearts By Donating
                            </Typography>
                            <Grid
                                container
                                direction="column"
                                gap={3}
                                color="#000"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item width="45%">
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        onClick={handlePaypalClick}
                                    >
                                        PayPal
                                    </Button>
                                </Grid>
                                <Grid item width="45%">
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        onClick={handlePaypalClick}
                                    >
                                        Coffee
                                    </Button>
                                </Grid>
                                <Grid item width="45%">
                                    <Button
                                        type="button"
                                        variant="outlined"
                                        color="primary"
                                        fullWidth
                                        onClick={handleVenmoClick}
                                    >
                                        Venmo
                                    </Button>
                                </Grid>
                                <Grid item width="100%">
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography>
                                            Thank you so much!
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default PaymentModal;
