import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {  //Оборот компонента в observer для того чтоб mobx отслеживал изменения и перерендера
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor:"pointer"}}
                    key={type.id}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    /* href="#/action-1"*/
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;