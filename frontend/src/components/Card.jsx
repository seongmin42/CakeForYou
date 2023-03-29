import React from "react";
import { useDispatch } from "react-redux";
import ColContainer from "./layout/ColContainer";
import Tmp from "../assets/img/login_image.png";
import GapH from "./layout/GapH";
import Small from "./text/Small";
import MediumSmall from "./text/MediumSmall";
import EmptyHeart from "../assets/img/empty_heart.png";
import { openPortfolio } from "../store/modalSlice";

function Card({
  title,
  sellerId,
  color,
  shape,
  sheetTaste,
  creamTaste,
  situation,
}) {
  const desc = [color, shape, sheetTaste, creamTaste, situation].join(" #");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPortfolio());
  };

  return (
    <ColContainer
      width="222px"
      height="393px"
      border="1px solid"
      borderColor="#D9D9D9"
      onClick={handleClick}
      cursor="pointer"
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src={Tmp}
          alt="img"
          style={{
            width: "222px",
            height: "217px",
            objectFit: "cover",
          }}
        />
        <img
          src={EmptyHeart}
          alt="img"
          style={{
            position: "absolute",
            width: "20px",
            top: "10px",
            right: "10px",
            zIndex: "1",
          }}
        />
      </div>
      <ColContainer
        height="110px"
        align="start"
        paddingLeft="10px"
        paddingRight="10px"
        justify="start"
      >
        <GapH height="14px" />
        <Small color="#A5A6A6" cursor="pointer">
          삼성 케이크
        </Small>
        <GapH height="1px" />
        <MediumSmall cursor="pointer">
          2023 취업을 보장하는 삼성 케이크
        </MediumSmall>
      </ColContainer>
      <ColContainer
        height="62px"
        borderTop="1px solid"
        borderColor="#D9D9D9"
        borderTopColor="#D9D9D9"
        paddingLeft="10px"
        paddingRight="10px"
        justify="start"
      >
        <GapH height="10px" />
        <Small color="#A5A6A6" cursor="pointer">
          3호, 동그라미 시트, 생크림, 바닐라, 파랑
        </Small>
      </ColContainer>
    </ColContainer>
  );
}

export default Card;
