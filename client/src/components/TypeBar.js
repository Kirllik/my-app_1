import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Dropdown, ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Товары
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {device.types.map(type =>
                    <Dropdown.Item
                        key={type.id}
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        /* href="#/action-1"*/
                    >
                        {type.name}
                    </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>

    );
});

export default TypeBar;