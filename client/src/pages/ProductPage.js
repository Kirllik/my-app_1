import React, {useState} from 'react';
import { Container, Image} from "react-bootstrap";
import star from "../assets/star.svg";
import cart from "../assets/cart.png";
import s from "../CSS/ProfilePage.module.css"

const ProductPage = () => {
    const device = {
        id: 1,
        name: "Nordman SX3",
        price: 5000,
        rating: 5,
        img: 'https://img.exist.ru/img.jpg?Key=7981c580-72e7-47ea-bd14-35239db4029d_304&Size=1600x1400&MethodType=36'
    }

    const [AdInCart, setAdInCart] = useState(false)

    const price =String(device.price);
    return (
        <Container className="mt-4">
                <div className="d-flex ">
                    <h2>{device.name}</h2>
                    <div className={s.rating}>
                        {Array.from({length: device.rating}, (_, i) =>
                            <Image key={i} width={16} height={16} src={star}/>)}
                    </div>
                </div>


            <div className={s.div_corn}>
                <Image width={300} height={300} src={device.img}/> {/*Изображение товара*/}
                <div className={s.div_vlog}>
                    <span className={s.price}>{device.price.toLocaleString('ru-RU')}</span> {/*Цена*/}
                    <div className={s.cart}>     {/*Изображение товара*/}
                        <Image className="m-2" width={30} height={30} src={cart} title={"Добавить в корзину"}
                               onClick={()=>setAdInCart(true)}
                        />
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default ProductPage;