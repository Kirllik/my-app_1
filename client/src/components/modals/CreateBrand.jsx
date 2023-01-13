import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateBrand = ({show, ofHide}) => {
    return (
        <Modal
            show={show}
            onHide={ofHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название брэнда"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={ofHide} >Close</Button>
                <Button variant="outline-success" >Add type</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;