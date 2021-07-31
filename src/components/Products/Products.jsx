import React from 'react'
import {Grid, Button} from '@material-ui/core'
import './Products.css'
import Product from './Product/Product'
import useStyles from './styles'
import { useState } from 'react';


const Products = ({productList, funcAddToCart, searchTerm}) => {
    const classes = useStyles()
    const [number, setnumber] = useState(12)

    const loadMore = () => {
        setnumber(number + 12)
    }

    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {
                    productList.filter(item => {
                        if(searchTerm === ""){
                            return item
                        }else if(item.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return item
                        }
                    })
                    .slice(0,number).map((item)=>(
                        <Grid item key={item.productName} xs={12} sm={6} md={4} lg={3}> 
                            <Product  product={item} funcAddToCart={funcAddToCart}/>
                        </Grid>
                    ))
                }
            </Grid>
            <Button className={classes.button} onClick={() => loadMore()}  >Load More</Button>
        </main>
    )
}

export default Products