import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = ({show, ofHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([]) //Состояние массива с объектом характеристик

    const addInfo = () => {
        setInfo([
            ...info,  //Разворот старого состояния + добавления объекта с ключами ниже
            {
                title: '',   //Название свойства
                description: '',  //Описание свойства
                number: Date.now()   //Для создания уникального KEY из количество миллисекунд от 1 января 1970
            }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number)) //Отфильтровывание по совпадающему номеру и set в состояние возвращенного объекта. Далее перерендр в связи со сменой переменной состояния
    }

    return (
        <Modal
            show={show}
            onHide={ofHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4 style={{color: "darkblue"}}>Добавить продукт</h4>
                </Modal.Title>
            </Modal.Header>
            {/*---------------------------Dropdown type------------------------------------*/}
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*---------------------Dropdown brand---------------*/}
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>Выберете брэнд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*------------------inputs------------------*/}
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                    <hr/>
                    {/*-------------Add new attribute------------------*/}
                    <Button
                        variant="outline-dark"
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {/*-------------------------------*/}
                    {info.map(i =>
                        <Row key={i.number} className="mt-2">
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите название свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Введите описание свойства"}
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            {/*-------------------------------------------------------------------*/}
            <Modal.Footer>
                <Button variant="outline-danger" onClick={ofHide}>Close</Button>
                <Button variant="outline-success">Add product</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;