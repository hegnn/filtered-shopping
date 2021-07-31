import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles';

const Product = ({ product, funcAddToCart }) => {
    const classes = useStyles()

    return (
        
        <div>
            <Card className={classes.root}>
                <CardMedia component="img" className={classes.media} image={product.imageLink} title={product.productName} />
                
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography noWrap={true} variant="h5" gutterBottom>
                            {product.productName}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            $ {product.priceSale}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => funcAddToCart(product)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
