import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from './itemStyles'

const CartItem = ({item, addToCart, removeFromCart}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.detail}>
                <h3> {item.productName} </h3>
                <div className={classes.cartInfo}>
                    <p>Price: ${item.priceSale} </p>
                    <p>Total: ${item.priceSale * item.amount} </p>
                </div>
                <div className={classes.cartButton}>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => removeFromCart(item.productName)}
                    > 
                        -
                    </Button>
                    <p> {item.amount} </p>
                    <Button 
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.imageLink} alt={item.productName} className={classes.cartImage}></img>
        </div>
    )
}

export default CartItem
