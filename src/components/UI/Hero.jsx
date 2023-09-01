import classNames from "classnames/bind";
import React from "react";
import styles from "./Hero.module.scss";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
const cx = classNames.bind(styles);

function Hero() {
    return (
        <section className={cx("hero")}>
            <div className={cx("container")}>
                <div className={cx("hero_wrapper")}>
                    {/* //! Hero Content */}
                    <div className={cx("hero_content")}>
                        <h2
                            className={cx("section-title")}
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Exercise is the key to a
                            <span className={cx("highlight")}> Healthy </span>
                            Lifestyle
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className={cx("hero_desc")}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus porro voluptate eligendi
                            consequatur dolor aliquam!
                        </p>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className={cx("hero_btns")}
                        >
                            <button className={cx("hero_btn-dx")}>
                                Get Started
                            </button>
                            <button className={cx("watch__btn")}>
                                <span className={cx("watch__btn-cx")}>
                                    <i class="ri-play-fill"></i>
                                </span>
                                Watch Video
                            </button>
                        </div>
                    </div>
                    {/* //! Hero img */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        className={cx("hero_img")}
                    >
                        <div className={cx("hero__img-wrapper")}>
                            <div className={cx("box-1")}>
                                <div className={cx("box-2")}>
                                    <div className={cx("box-3")}>
                                        <div className={cx("box__img")}>
                                            <img src={heroImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx("heart__rate")}>
                                <h5>Heart Rate</h5>
                                <span>
                                    <i class="ri-heart-pulse-fill"></i>
                                </span>
                                <h5>2567 B</h5>
                            </div>

                            <div className={cx("gym__location")}>
                                <span>
                                    <i class="ri-map-pin-2-fill"></i>
                                </span>
                                <h5>Find a new near you</h5>
                            </div>

                            <div className={cx("dumb__icon")}>
                                <img src={dumbleIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
