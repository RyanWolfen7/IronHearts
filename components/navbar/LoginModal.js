/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Card, CardContent, Grid, Modal, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";
import { useRouter } from "next/router"

const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#000",
        },
        "&:hover fieldset": {
            borderColor: "#000",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#000",
        },
        "& .MuiInputBase-input": {
            color: "#000",
        },
    },
    background: "#fff",
    width: "100%",
};

const LoginModal = ({ open, handleClose }) => {
    const [login, setLogin] = useState({ email: "", password: "" });
    const modalRef = useRef();
    const Route = useRouter()
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const onChange = (event) => {
        const updatedInput = { [event.target.id]: event.target.value };
        setLogin({ ...login, ...updatedInput });
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target.closest('.MuiCard-root'))) {
            handleClose();
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Submit login form");
    };

    return (
        <Modal open={open} onClose={handleClose} ref={modalRef} onClick={handleOutsideClick}>
            <Grid container placecontent="center">
                <Grid item width="100%" height="100%" margin={isSmallScreen ? '10% 0' : "10% 25%"}>
                    <Card>
                        <CardContent sx={{ p: 5 }}>
                            <Typography
                                color="primary"
                                variant="h4"
                                textAlign="center"
                                mb={5}
                            >
                                Welcome Back Iron Heart
                            </Typography>
                            <form onSubmit={onSubmit}>
                                <Grid
                                    container
                                    direction="column"
                                    gap={3}
                                    color="#000"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item width="100%">
                                        <TextField
                                            id="email"
                                            value={login.email}
                                            variant="outlined"
                                            name="email"
                                            label="Email"
                                            sx={textFieldStyles}
                                            onChange={onChange}
                                        />
                                    </Grid>
                                    <Grid item width="100%">
                                        <TextField
                                            id="password"
                                            value={login.password}
                                            variant="outlined"
                                            name="password"
                                            label="Password"
                                            sx={textFieldStyles}
                                            onChange={onChange}
                                        />
                                    </Grid>
                                    <Grid item width="100%">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item width="100%">
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography>
                                                Don't have an account?
                                            </Typography>
                                            <Button color="primary" onClick={() => Route.push('/join')}>Sign up</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Modal>
    );
};

export default LoginModal;
