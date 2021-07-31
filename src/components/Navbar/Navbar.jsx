import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography, Drawer } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'
import CartDrawer from '../Cart/Drawer/CartDrawer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'
 
const Navbar = ({ totalItems, cartList, addToCart, removeFromCart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const classes = useStyles()

    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                <img component={Link} to="/" className={classes.image} src={logo} alt="" />
                </Typography>
                
                <Drawer className={classes.drawer} anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
                  <CartDrawer 
                    cartItems={cartList} 
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartClose={setIsCartOpen}
                />
                </Drawer>

                <div className={classes.grow}/>
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit" onClick={() => setIsCartOpen(true)}>
                        <Badge badgeContent={totalItems} color="primary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div>
              </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
