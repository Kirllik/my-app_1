import React, {useEffect, useState} from 'react';
import {Container, Image, Spinner} from "react-bootstrap";
import star from "../assets/star.svg";
import s from "../CSS/PrоductPage.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {BASKET_ROUTE} from "../utils/consts";
import {fetchProductOne} from "../http/ProductAPI";

const ProductPage = () => {

    const {id} = useParams()

    const [device, setDevice] = useState({info: []})

    const [addInCart, setAdInCart] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetchProductOne(id).then(data => setDevice(data))
    }, [])

    console.log("device = ", device)

    if (device.price === undefined) {
        console.log("true")
        return <div className={s.center}><Spinner animation="border" variant="primary"/></div>
    }

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
                <Image width={300} height={300}
                       src={process.env.REACT_APP_API_URL + device.img}/> {/*//Изображение товара*/}
                <div className={s.div_vlog}>
                    <span className={s.price}>{device.price.toLocaleString('ru-RU')}</span> {/*Цена*/}

                    <a className={addInCart ? `${s.basket} ${s.inbasket}` : s.basket}
                       title={addInCart ? "Перейти в корзину" : "Добавить в корзину"}
                       onClick={() => {
                           {/*Если был клик на корзину, то роутим на страницу корзины, иначе переводим setAdInCart в false  */
                           }
                           addInCart ? navigate(BASKET_ROUTE) : setAdInCart(true)
                       }}
                    >
                        {addInCart ? <i className={s.i}>1</i> : <></>}
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