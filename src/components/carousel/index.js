import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

import sneak1 from '../../images/sneak-peaks/ham1.jpeg'
import sneak2 from '../../images/sneak-peaks/ham2.jpeg'
import sneak3 from '../../images/sneak-peaks/ham3.jpeg'
import sneak4 from '../../images/sneak-peaks/ham4.png'

const Carousel = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10rem",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: false,
  }

  return (
      <SliderWrapper>
        <Slider {...settings}>
          <ImgWrapper>
            <img src={sneak1} />
          </ImgWrapper>
          <ImgWrapper>
            <img src={sneak2} />
          </ImgWrapper>
          <ImgWrapper>
            <img src={sneak3} />
          </ImgWrapper>
          <ImgWrapper>
            <img src={sneak4} />
          </ImgWrapper>
          <ImgWrapper>
            <img src={sneak2} />
          </ImgWrapper>
        </Slider>
      </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  padding-top: 2rem;

  .center .slick-center {
    transition: 200ms;
    -ms-transform: scale(1.12);
    transform: scale(1.12);
    border-radius: 2rem;
  }
`

const ImgWrapper = styled.div`
  padding: 1rem;

  img {
    max-width: 100%;
    // padding: 1rem 1rem 0 1rem;
    // border: 1px solid darkgrey;
    border-radius: 8px;
  }
`

export default Carousel