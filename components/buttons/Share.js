import { Snackbar, Button, Card, CardContent, Grid, List, ListItemButton, ListItemIcon, Modal, TextField, Typography, useMediaQuery } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Facebook, Twitter  } from "@mui/icons-material";
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useRouter } from "next/router"

const ShareButton = ({}) => {
    const modalRef = useRef();
    const [open, setOpen] = useState(false);
    const Route = useRouter();
    const [snack, setSnack] = useState({ open: false, text: '' });
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target.closest('.MuiCard-root'))) {
            setOpen(false);
        }
    };

    const handleShare = (event) => {
        switch(event.target.id){
            case 'facebook':
                window.open('https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fironhearts.studio', '_blank')
                break;
            case 'twitter':
                window.open('https://twitter.com/intent/tweet/?text=Iron%20Hearts%20is%20a%20mix%20of%20Mash%2C%20Mobile%20Suit%20Gundam%2C%20and%20Game%20of%20Thrones%20with%20themes%20of%20the%20American%20Revolution.%20It%20is%20a%20tale%20of%20humanity%20in%20all%20of%20its%20glory%2C%20compassion%2C%20and%20horror.%20Told%20from%20the%20perspective%20of%20both%20sides%20of%20the%20conflict%2C%20the%20lines%20between%20right%20and%20wrong%2C%20truth%20and%20lies%2C%20and%20the%20very%20notion%20of%20&#x27;Enemy&#x27;%20become%20blurred.&amp;url=https%3A%2F%2Fironhearts.studio', '_blank')
                break;
            case 'pintrest':
                window.open('https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fironhearts.studio&amp;media=https%3A%2F%2Fironhearts.studio&amp;description=Iron%20Hearts%20is%20a%20mix%20of%20Mash%2C%20Mobile%20Suit%20Gundam%2C%20and%20Game%20of%20Thrones%20with%20themes%20of%20the%20American%20Revolution.%20It%20is%20a%20tale%20of%20humanity%20in%20all%20of%20its%20glory%2C%20compassion%2C%20and%20horror.%20Told%20from%20the%20perspective%20of%20both%20sides%20of%20the%20conflict%2C%20the%20lines%20between%20right%20and%20wrong%2C%20truth%20and%20lies%2C%20and%20the%20very%20notion%20of%20&#x27;Enemy&#x27;%20become%20blurred.', '_blank')
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fironhearts.studio&amp;title=Iron%20Hearts%20is%20a%20mix%20of%20Mash%2C%20Mobile%20Suit%20Gundam%2C%20and%20Game%20of%20Thrones%20with%20themes%20of%20the%20American%20Revolution.%20It%20is%20a%20tale%20of%20humanity%20in%20all%20of%20its%20glory%2C%20compassion%2C%20and%20horror.%20Told%20from%20the%20perspective%20of%20both%20sides%20of%20the%20conflict%2C%20the%20lines%20between%20right%20and%20wrong%2C%20truth%20and%20lies%2C%20and%20the%20very%20notion%20of%20&#x27;Enemy&#x27;%20become%20blurred.&amp;summary=Iron%20Hearts%20is%20a%20mix%20of%20Mash%2C%20Mobile%20Suit%20Gundam%2C%20and%20Game%20of%20Thrones%20with%20themes%20of%20the%20American%20Revolution.%20It%20is%20a%20tale%20of%20humanity%20in%20all%20of%20its%20glory%2C%20compassion%2C%20and%20horror.%20Told%20from%20the%20perspective%20of%20both%20sides%20of%20the%20conflict%2C%20the%20lines%20between%20right%20and%20wrong%2C%20truth%20and%20lies%2C%20and%20the%20very%20notion%20of%20&#x27;Enemy&#x27;%20become%20blurred.&amp;source=https%3A%2F%2Fironhearts.studio', '_blank')
                break;
            case 'reddit':
                window.open('https://reddit.com/submit/?url=https%3A%2F%2Fironhearts.studio&amp;resubmit=true&amp;title=Iron%20Hearts%20is%20a%20mix%20of%20Mash%2C%20Mobile%20Suit%20Gundam%2C%20and%20Game%20of%20Thrones%20with%20themes%20of%20the%20American%20Revolution.%20It%20is%20a%20tale%20of%20humanity%20in%20all%20of%20its%20glory%2C%20compassion%2C%20and%20horror.%20Told%20from%20the%20perspective%20of%20both%20sides%20of%20the%20conflict%2C%20the%20lines%20between%20right%20and%20wrong%2C%20truth%20and%20lies%2C%20and%20the%20very%20notion%20of%20&#x27;Enemy&#x27;%20become%20blurred.', '_blank')
                break;
            case 'whatsapp':
                window.open('whatsapp://send?text=Iron%20Hearts%20is%20a%20mix%20of%20Mash%2C%20Mobile%20Suit%20Gundam%2C%20and%20Game%20of%20Thrones%20with%20themes%20of%20the%20American%20Revolution.%20It%20is%20a%20tale%20of%20humanity%20in%20all%20of%20its%20glory%2C%20compassion%2C%20and%20horror.%20Told%20from%20the%20perspective%20of%20both%20sides%20of%20the%20conflict%2C%20the%20lines%20between%20right%20and%20wrong%2C%20truth%20and%20lies%2C%20and%20the%20very%20notion%20of%20&#x27;Enemy&#x27;%20become%20blurred.%20https%3A%2F%2Fironhearts.studio', '_blank')
                break;
            default:
                // Check if the document is focused
                if (window.document.hasFocus()) {
                    // Execute the DOM-related action
                    let textToCopy = "https://www.ironhearts.studio";
                    navigator.clipboard.writeText(textToCopy)
                    .then(() => { setSnack({ open: true, text: "Text copied to clipboard successfully!"}) })
                    .catch((error) => { setSnack({ open: true, text: `Failed to copy text: ${error}`}) });
                } else {
                    // Focus the document before executing the action
                    window.focus();
                }
                break;
        }
        setOpen(false)
    }

    return (
        <div>
            <Button id="share" color="secondary" variant="contained" sx={{ py: 1.5, px: 3, color: '#000' }} onClick={() => setOpen(true)} startIcon={<SendIcon/>}>
                <Typography variant="h6" fontWeight={700}>
                    <FormattedMessage id="share"/>
                </Typography>
            </Button>
            <Snackbar 
                open={snack.open}
                autoHideDuration={3000}
                onClose={() => setSnack({open: false, text: ''})}
                message={snack.text}
            />
            <Modal open={open} onClose={() => setOpen(false)} ref={modalRef}  onClick={handleOutsideClick}>
                <Grid container >
                    <Grid item width="100%" height="100%" margin={isSmallScreen ? '10% 0' : "10% 25%"}>
                        <Card>
                            <CardContent sx={{ p: 5 }}>
                                <Typography
                                    color="primary"
                                    variant="h4"
                                    textAlign="center"
                                    mb={5}
                                >
                                    Thank you for putting us out there!
                                </Typography>
                                <Grid container gap={2} justifyContent="center">
                                    <Button id="facebook" color="secondary" variant="contained" onClick={handleShare} startIcon={<Facebook />}>
                                        <FormattedMessage id="facebook"/>
                                    </Button>
                                    <Button  id="twitter" color="secondary" variant="contained" onClick={handleShare} startIcon={<Twitter />}>
                                        <FormattedMessage id="twitter"/>
                                    </Button>
                                    <Button  id="pintrest" color="secondary" variant="contained" onClick={handleShare} startIcon={<PinterestIcon />}>
                                        <FormattedMessage id="pintrest"/>
                                    </Button>
                                    <Button  id="linkedin" color="secondary" variant="contained" onClick={handleShare} startIcon={<LinkedInIcon />}>
                                        <FormattedMessage id="linkedin"/>
                                    </Button>
                                    <Button id="reddit" color="secondary" variant="contained" onClick={handleShare}  startIcon={<RedditIcon />}>
                                        <FormattedMessage id="reddit"/>
                                    </Button>
                                    <Button id="whatsapp" color="secondary" variant="contained" onClick={handleShare}  startIcon={<WhatsAppIcon />}>
                                        <FormattedMessage id="whatsapp"/>
                                    </Button>
                                    <Button id="copy" color="secondary" variant="contained" onClick={handleShare}  startIcon={<IosShareIcon />}>
                                        <FormattedMessage id="copy"/>
                                    </Button>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Modal>
        </div>
    )
}

export default ShareButton
