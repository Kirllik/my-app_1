import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from "../assets/star.svg"

const ProductItem = ({product}) => {

    return (

        <Col md={3} className={"mt-3"}>  {/*способ установки стиля ботстрап в конструкцию className*/}
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} srs={product.img}/>
                <div className="mt-1 text-black-50 d-flex justify-content-between align-items-center">
                    <div>selectedBrand</div>
                    <div className=" align-items-center">
                        <div>{product.rating}</div>
                    </div>
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