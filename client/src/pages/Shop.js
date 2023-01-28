import React, {useContext, useEffect} from 'react';
import TypeBar from "../components/TypeBar";
import {Col, Container, Row} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import {Context} from "../index";
import {fetchBrands, fetchProducts, fetchTypes} from "../http/ProductAPI";
import {observer} from "mobx-react-lite";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchProducts().then(data => device.setProducts(data.rows))
    },[])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar/>
                </Col>

                <Col md={9}>
                    <BrandBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;