import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import { products } from "../../constants/constants";

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((el) => (
                    //full width on mobile devices
                    <Grid item key={el.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={el} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;