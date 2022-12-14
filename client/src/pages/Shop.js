import React from 'react';
import TypeBar from "../components/TypeBar";
import {Col, Container, Row} from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";

const Shop = () => {
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
};

export default Shop;