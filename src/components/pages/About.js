import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'
import React from 'react'
import Navbar from '../layout/Navbar'
import ShareIcon from '@mui/icons-material/Share';
import MoreIcon from '@mui/icons-material/More';

const About = () => {
    return (
        <>
            <Navbar />
            <Box backgroundColor={'cornsilk'} p={'25px'}>
                <Typography variant='h3' sx={{ textDecoration: 'underline' }} color='secondary' textAlign='center'>
                    About
                </Typography>
                <Box display={'flex'} flexWrap='wrap' justifyContent={'space-evenly'} height={'60vh'} alignContent='space-evenly'>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="./carousel-images/banner.jpg"
                            alt="Forest Road"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Forest Road
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share<ShareIcon /></Button>
                            <Button size="small">Learn More<MoreIcon /></Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="./carousel-images/banner.jpg"
                            alt="Forest Road"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Forest Road
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display='flex' justifyContent='space-between' width='100%'>
                            <Button size="small" startIcon={<ShareIcon />}>Share</Button>
                            <Button size="small" endIcon={<MoreIcon />}>Learn More</Button></Box>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="./carousel-images/banner.jpg"
                            alt="Forest Road"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Forest Road
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display='flex' justifyContent='space-between' width='100%'>
                                <Button size="medium" endIcon={<ShareIcon/>}>Share</Button>
                                <Button size="medium" endIcon={<MoreIcon/>}>Learn More</Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

            </Box>
        </>
    )
}

export default About