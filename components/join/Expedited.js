import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Slide, Box, Button, Card, CardContent, Grid, IconButton, InputAdornment, TextField, Typography, Stepper } from "@mui/material"
import { useState } from "react"
import { FormattedMessage } from "react-intl"

const Expedited = ({
    user,
    validation,
    textFieldStyles,
    onChange,
    openExpeditedHandler,
    onSubmit,
    isExpedited 
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Slide direction="left" in={isExpedited} mountOnEnter unmountOnExit>
            <Grid item sx={{ zIndex: 1, mt: 5 }} >
                <Card>
                    <CardContent sx={{ p: 5 }}>
                        <Typography color="primary" variant="h4" textAlign="center" mb={5}>
                            One Step Away!
                        </Typography>
                        <Grid container direction="column" gap={3} color="#000" justifyContent="center" alignItems="center">
                            <Grid item width="100%">
                                <TextField
                                    id="email"
                                    value={user.email}
                                    variant="outlined"
                                    name="email"
                                    label="Email"
                                    helperText={validation.email ? 'Please enter a valid email address' : ''}
                                    error={validation.email}
                                    sx={textFieldStyles}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item width="100%">
                                <TextField
                                    id="password"
                                    value={user.password}
                                    variant="outlined"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    label="Password"
                                    helperText={validation.password ? 'Needs 1 special character, 1 capitol, 1 number, and 16 characters long' : ''}
                                    sx={textFieldStyles}
                                    onChange={onChange}
                                    error={validation.password}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item width="100%">
                                <Button type="submit" variant="contained" color="primary" fullWidth onClick={onSubmit}>
                                    <FormattedMessage id="join" />
                                </Button>
                            </Grid>
                            <Grid item width="100%">
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography>
                                        Change your mind?
                                    </Typography>
                                    <Button color="primary" onClick={openExpeditedHandler}><FormattedMessage id="return" /></Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Slide>
    )
}

export default Expedited 
