import React from 'react'

import { Card, CardContent, Button, CardMedia, Typography, CardActions } from '@material-ui/core'

import useStyles from './itemStyles'

const CartItem = ({item, addToCart, removeFromCart, deleteFromCart}) => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardMedia component="img" image={item.imageLink} alt={item.productName} className={classes.media} />
            <CardContent>
                <Typography className={classes.title} variant="h4"> {item.productName} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => removeFromCart(item.productName)}>-</Button>
                    <Typography> {item.amount} </Typography>
                    <Button type="button" size="small" onClick={() => addToCart(item)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => deleteFromCart(item.productName)} >Remove</Button>
                <Typography className={classes.price} variant="h5"> ${item.priceSale * item.amount} </Typography>
            </CardActions>
        </Card>
    )
}

export default CartItem
