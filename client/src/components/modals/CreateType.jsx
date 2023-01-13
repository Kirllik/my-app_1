import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, ofHide}) => {

    return (
        <Modal
            show={show}
            onHide={ofHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название типа"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={ofHide} >Close</Button>
                <Button variant="outline-success" >Add type</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;