import React from 'react'
import { API } from '../config'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Cards = ({ item }) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={`${API}/${item.product_image}`}
                    alt={item.product_name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.product_name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Rs. {item.product_price}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Link to={`/product/${item._id}`}>
                        <Button size="medium" endIcon={<Search />} fullWidth color={'secondary'} variant={'contained'}>View Details</Button>
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards