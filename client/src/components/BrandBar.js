import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Col className="d-flex flex-wrap">
            {device.brands.map(brand =>
                <Card
                    key={brand.id}
                    className="p-1 m-1"
                    style={{cursor: "pointer"}}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : "info"}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    );
});

export default BrandBar;