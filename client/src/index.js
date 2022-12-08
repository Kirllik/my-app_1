import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import UserStore from "./store/UserStore";

export const Context = createContext(null) //Создание Contextа


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{    /*Проброс контекста в приложение */
        user: new UserStore()     /*прокидываем объекта стора*/
    }}>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </Context.Provider>
);


