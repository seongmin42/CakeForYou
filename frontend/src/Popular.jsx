import React from "react";
import Header from "./components/Header";
import UpDownContainer from "./components/layout/UpDownContainer";
import RowContainer from "./components/layout/RowContainer";
import GapH from "./components/layout/GapH";
import SmallMedium from "./components/text/SmallMedium";
import BoldSmallMedium from "./components/text/BoldSmallMedium";
import Card from "./components/Card";
import PinkSearch from "./assets/img/pink_search.png";

function Popular() {
  return (
    <div>
      <Header />
      <UpDownContainer align="center">
        <GapH height="34px" />
        <RowContainer
          height="61px"
          width="451px"
          border="1px solid"
          borderRadius="30px"
          borderColor="#E3E3E3"
          position="relative"
        >
          <SmallMedium>내 지역 선택</SmallMedium>
          <img
            src={PinkSearch}
            alt="img"
            style={{
              width: "50px",
              position: "absolute",
              right: "26px",
            }}
          />
        </RowContainer>
        <GapH height="24px" />
        <RowContainer width="1194px" justify="start">
          <BoldSmallMedium>인기 케이크</BoldSmallMedium>
        </RowContainer>
        <GapH height="24px" />
        <RowContainer width="1194px" gap="21px">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </RowContainer>
        <GapH height="40px" />
        <RowContainer width="1194px" justify="start">
          <BoldSmallMedium>인기 가게</BoldSmallMedium>
        </RowContainer>
        <GapH height="24px" />
        <RowContainer width="1194px" gap="21px">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </RowContainer>
        <GapH height="83px" />
      </UpDownContainer>
    </div>
  );
}

export default Popular;
