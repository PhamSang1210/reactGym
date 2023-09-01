import classNames from "classnames/bind";
import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import avatar1 from "../../assets/img/avatar01.png";
import avatar2 from "../../assets/img/avatar02.png";

import test from "./test.css";
const cx = classNames.bind(styles);

const Person = [
    {
        $name: "Jesica Fernandes",
        $nameParent: "slide__item",
        $nameChildren: "slide__img",
        image: avatar1,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam iusto nam possimus asperiores architecto error dignissimos minus unde sapiente vero, ipsum odit illo placeat suscipit quis explicabo voluptatibus porro!",
    },
    {
        $name: "Jesica Fernandes",
        $nameParent: "slide__item",
        $nameChildren: "slide__img",
        image: avatar2,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam iusto nam possimus asperiores architecto error dignissimos minus unde sapiente vero, ipsum odit illo placeat suscipit quis explicabo voluptatibus porro!",
    },
    {
        $name: "Jesica Fernandes",
        $nameParent: "slide__item",
        $nameChildren: "slide__img",
        image: avatar2,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ipsam iusto nam possimus asperiores architecto error dignissimos minus unde sapiente vero, ipsum odit illo placeat suscipit quis explicabo voluptatibus porro!",
    },
];

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container sliders">
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper test_object"
                >
                    {Person.map((item, index) => (
                        <SwiperSlide>
                            <div className={item.$nameParent}>
                                <div className={item.$nameChildren}>
                                    <img src={item.image} alt={item.$name} />
                                </div>
                                <h4>{item.$name}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Testimonials;
