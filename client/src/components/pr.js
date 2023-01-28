import React, {useEffect, useState} from "@types/react";
import {useNavigate, useParams} from "react-router-dom";
import {Container, Image} from "react-bootstrap";
import s from "../CSS/PrоductPage.module.css";
import star from "../assets/star.svg";
import {BASKET_ROUTE} from "../utils/consts";

const ProductPage = () => {
    /* const device = {
         id: 1,
         name: "Nordman SX3",
         price: 5000,
         rating: 5,
         img: 'https://img.exist.ru/img.jpg?Key=7981c580-72e7-47ea-bd14-35239db4029d_304&Size=1600x1400&MethodType=36'
     }
     const description = [
         {id: 1, title: "Диаметр", description: 17},
         {id: 2, title: "Размерность", description: "205/50"},
         {id: 3, title: "Индекс нагрузки ", description: 93},
         {id: 4, title: "Индекс скорости ", description: "V"},
     ]*/

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    const [AdInCart, setAdInCart] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

    })

    return (
        <Container className="mt-4">
            <div className="d-flex ">
                <h2>{device.name}</h2>
                <div className={s.rating}>
                    {/*Отрисовка звездочек рейтинга*/}
                    {Array.from({length: device.rating}, (_, i) =>
                        <Image key={i} width={16} height={16} src={star}/>)}
                </div>
            </div>

            <div className={s.div_corn}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/> {/*Изображение товара*/}
                <div className={s.div_vlog}>
                    <span className={s.price}>{device.price.toLocaleString('ru-RU')}</span> {/*Цена*/}

                    <a className={AdInCart ? `${s.basket} ${s.inbasket}` : s.basket} title={"Добавить в корзину"}
                       onClick={() => {
                           {/*Если был клик на корзину, то роутим на страницу корзины, иначе переводим setAdInCart в false  */
                           }
                           AdInCart ? navigate(BASKET_ROUTE) : setAdInCart(true)
                       }}
                    >
                        {AdInCart ? <i className={s.i}>1</i> : <></>}
                    </a>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column"}}>
                <h5>Параметры</h5>
                {device.info.map(info =>
                    <div className={s.div_block} key={info.id}>   {/**/}
                        <div className={s.d}>
                            <div className={s.dots}>
                                <span className={s.spec}>{info.title}</span>
                            </div>
                            <span className={s.spec2}>{info.description}</span>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default ProductPage;