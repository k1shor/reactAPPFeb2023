import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../layout/Navbar'
import ShareIcon from '@mui/icons-material/Share';
import MoreIcon from '@mui/icons-material/More';
import { getAllProducts, getFilteredProducts } from '../../api/productApi';
import Cards from '../Card'
import CategoriesCheckbox from '../CategoriesCheckbox';
import PricesRadio from '../PricesRadio';

const Products = () => {
    let [sortBy, setSortBy] = useState('product_name')
    let [order, setOrder] = useState('asc')
    let [limit, setLimit] = useState(4)
    let [products, setProducts] = useState([])
    let [myFilter, setMyFilter] = useState({
        filter: {product_price: [], category: []}
    })

    const handleFilter = (filters, filterBy) => {
        let new_filter = {...myFilter}
        new_filter.filter[filterBy]= filters
        setMyFilter(new_filter)
        console.log(myFilter)
    }

    useEffect(() => {
        getFilteredProducts(myFilter,sortBy,order,limit)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProducts(data)
                }
            })
    }, [myFilter])
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Grid container>
                    <Grid item xs={4}>
                        <CategoriesCheckbox handleCategory = {handleFilter}/>

                        <PricesRadio handlePrice = {handleFilter}/>

                       
                    </Grid>
                    <Grid item xs={8}>
                        
                        <Grid container spacing={3}>
                            
                            {
                                products && products.map((product,i)=>{
                                    return <Grid item xs={4}>
                                <Cards item={product} key={i}></Cards>
                            </Grid>
                                })
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Products