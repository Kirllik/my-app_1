import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [BrandVisible, setBrandVisible] = useState(false)     //
    const [TypeVisible, setTypeVisible] = useState(false)       ///
    const [ProductVisible, setProductVisible] = useState(false) //// Состояния для отображения модальных окон true-видно, false-скрыто

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            {/*---------------------------------*/}
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            {/*---------------------------------*/}
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить товар
            </Button>

            <hr color="red"/>
            {/*Пропсы -1.Переменная состояния, 2.Функция смены состояния с вызовом в родителе*/}
            <CreateType show={TypeVisible} ofHide={() => setTypeVisible(false)}/>
            <CreateBrand show={BrandVisible} ofHide={() => setBrandVisible(false)}/>
            <CreateProduct show={ProductVisible} ofHide={() => setProductVisible(false)}/>
        </Container>
    );
};

export default Admin;