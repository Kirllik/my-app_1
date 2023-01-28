import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.svg"
import {DEVISE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const ProductItem = ({product}) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className={"mt-3"}
             onClick={() => navigate(DEVISE_ROUTE + "/" + product.id)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + product.img}/>
                <div className="mt-1 text-black-50 d-flex justify-content-between align-items-center">

                </div>
                <div className={"d-flex justify-content-end"}>
                    {/* Array.from -- Конструкция для отрисовки 5 звёздочек */}
                    {
                        Array.from({length: product.rating}, (_, i) =>
                            <Image key={i} width={16} height={16} src={star}/>)
                    }
                </div>
                <div>{product.name}</div>
            </Card>
        </Col>
    );
};

export default ProductItem;