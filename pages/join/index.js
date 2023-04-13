import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, CardContent, Container, Divider, Fade, Grid, IconButton, InputAdornment, Slide, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { FormattedMessage } from "react-intl"

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

const JoinPage = ({

}) => {
    const [user, setUser] = useState({ email: '', password: '', name: '', age: '', faction: '', mos: '', bio: '' })
    const [validation, setValidation] = useState({email: false, password: false})
    const [isExpedited, setIsExpedited] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [experienceStep, setExperienceStep] = useState(0) // starts off at 0 for false
    
    const onChange = (event) => {
        const validationRegex = {email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, password: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{16,})\S+$/}
        const updatedInput = { [event.target.id]: event.target.value };
        setUser({...user, ...updatedInput})
        setValidation({...validation, ...{ [event.target.id]: !validationRegex[event.target.id].test(event.target.value)}})
    }

    const onSubmit = () => {

    } 

    return (
        <Container>
            <Grid container textAlign="center" justifyContent="center" sx={{ zIndex: 1, pb: 15 }} gap={5}>
                <Grid item xs={12} sx={{ zIndex: 1, mt: 5 }} >
                    <Typography variant="h2" >
                        <FormattedMessage id="joinHeader" />
                    </Typography>
                </Grid>
                <Slide direction="left" in={isExpedited} mountOnEnter>
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
                                            helperText={validation.password ? 'Needs 1 special character, 1 capitol and 16 characters long' : ''}
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
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>
                <Fade in={(!isExpedited && experienceStep == 0)} unmountOnExit>
                    <Grid item xs={12} container justifyContent="center" textAlign="center" sx={{ zIndex: 1, p: 5, mb: 5 }} gap={5}>
                        <Grid item xs={12} md={5} justifyContent="center" container gap={2}>
                            <Typography variant="body1" width="100%">  <FormattedMessage id="joinHeader2" />  </Typography>
                            <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 3, color: '#000' }}>
                                <Typography variant="h6" fontWeight={700}>
                                    <FormattedMessage id="joinButton" />
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={5} justifyContent="center" container gap={2}>
                            <Typography variant="body1" width="100%">  <FormattedMessage id="joinHeader3" /> </Typography>
                            <Button color="secondary" variant="contained" sx={{ py: 1.5, px: 3, color: '#000' }} onClick={() => setIsExpedited(true)}>
                                <Typography variant="h6" fontWeight={700}>
                                    <FormattedMessage id="joinButton2" />
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
        </Container>
    )
}

export default JoinPage
