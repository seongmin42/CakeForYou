import React from "react";
import moment from "moment";
import styled from "styled-components";
import 임시케이크사진 from "../assets/img/login_image.png";
import BoldSmall from "./text/BoldSmall";
import MediumSmall from "./text/MediumSmall";
import BoldMedium from "./text/BoldMedium";

const Box = styled.div`
  width: 100%;
  height: 13.188rem;
  border-radius: 10px;
  border: 1px solid lightgray;
  display: flex;
  margin-bottom: 0.688rem;
  overflow: overlay; //범위초과시 스크롤
`;

const CardImage = styled.img`
  width: 9.25rem;
  height: 9.125rem;
  margin: 30px;
  border-radius: 5px;
`;

const CardDetail = styled.div`
  width: 100%;
`;

const CardDate = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const CakeInfo = styled.div`
  display: flex;
`;

const CakeInfoCircle = styled.span`
  background-color: #fff5e4;
  border-radius: 90px;
  height: 2.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  margin-right: 1rem;
  flex-shrink: 0;
  word-wrap: break-word;
`;
const Button = styled.button`
  display: inline;
  background-color: #ffacac;
  border-radius: 5px;
  border: none;
  margin-right: 1rem;
  width: 11.875rem;
  min-width: 10rem;
  height: 2.8rem;
`;

const CreatedAt = styled.div``;
const PickUpDate = styled.div``;

function OrderListCard({
  createdAt,
  pickUpDate,
  sheetSize,
  sheetTaste,
  sheetShape,
  creamTaste,
  businessName,
}) {
  // createdAt, pickUpDate format 변경
  const formattedCreatedAt = moment(createdAt).format("YYYY-MM-DD HH:mm");
  const formattedPickUpDate = moment(pickUpDate).format("YYYY-MM-DD HH:mm");

  // NO1, NO2, NO3, MINI;
  if (sheetSize === "MINI") sheetSize = "미니";
  else sheetSize = sheetSize.slice(-1).concat("호");

  // VANILLA, CHOCOLATE, EARL_GRAY, RED_VELVET, MATCHA,
  // MOCHA, CHEESE, CARROT, SWEET_POTATO;
  if (sheetTaste === "VANILLA") sheetTaste = "바닐라";
  else if (sheetTaste === "CHOCOLATE") sheetTaste = "초콜릿";
  else if (sheetTaste === "EARL_GRAY") sheetTaste = "얼그레이";
  else if (sheetTaste === "RED_VELVET") sheetTaste = "레드벨벳";
  else if (sheetTaste === "MATCHA") sheetTaste = "말차";
  else if (sheetTaste === "MOCHA") sheetTaste = "모카";
  else if (sheetTaste === "CHEESE") sheetTaste = "치즈";
  else if (sheetTaste === "CARROT") sheetTaste = "당근";
  else if (sheetTaste === "SWEET_POTATO") sheetTaste = "고구마";

  // CIRCLE, HEART, RECTANGLE, OTHERS;
  if (sheetShape === "CIRCLE") sheetShape = "원형";
  else if (sheetShape === "HEART") sheetShape = "하트";
  else if (sheetShape === "RECTANGLE") sheetShape = "사각";
  else if (sheetShape === "OTHERS") sheetShape = "기타";

  // CREAM_CHEESE, WHIPPING_CREAM, CHOCOLATE_CREAM, OREO_CREAM, MATCHA_CREAM,
  // BLACK_SESAME_CREAM, SWEET_POTATO_CREAM, EARL_GRAY_CREAM, STRAWBERRY_CREAM;
  if (creamTaste === "CREAM_CHEESE") creamTaste = "크림치즈크림";
  else if (creamTaste === "WHIPPING_CREAM") creamTaste = "생크림";
  else if (creamTaste === "CHOCOLATE_CREAM") creamTaste = "초콜릿크림";
  else if (creamTaste === "OREO_CREAM") creamTaste = "오레오크림";
  else if (creamTaste === "MATCHA_CREAM") creamTaste = "말차크림";
  else if (creamTaste === "BLACK_SESAME_CREAM") creamTaste = "흑임자크림";
  else if (creamTaste === "SWEET_POTATO_CREAM") creamTaste = "고구마크림";
  else if (creamTaste === "EARL_GRAY_CREAM") creamTaste = "얼그레이크림";
  else if (creamTaste === "STRAWBERRY_CREAM") creamTaste = "딸기크림";

  return (
    <div>
      <Box>
        <CardImage src={임시케이크사진} alt="orderThumbnail" />
        <CardDetail>
          <BoldMedium style={{ marginTop: "1.7rem", marginBottom: "0.5rem" }}>
            {businessName}
          </BoldMedium>
          <CardDate>
            <CreatedAt style={{ marginRight: "9.688rem" }}>
              <BoldSmall style={{ display: "inline", marginRight: "0.5rem" }}>
                주문일자
              </BoldSmall>
              <MediumSmall style={{ display: "inline" }}>
                {formattedCreatedAt}
              </MediumSmall>
            </CreatedAt>
            <PickUpDate>
              <BoldSmall style={{ display: "inline", marginRight: "0.5rem" }}>
                픽업일자
              </BoldSmall>
              <MediumSmall style={{ display: "inline" }}>
                {formattedPickUpDate}
              </MediumSmall>
            </PickUpDate>
          </CardDate>
          <CakeInfo>
            <div style={{ display: "flex", width: "60%" }}>
              <CakeInfoCircle>
                <MediumSmall>{sheetSize}</MediumSmall>
              </CakeInfoCircle>
              <CakeInfoCircle>
                <MediumSmall>{sheetTaste}</MediumSmall>
              </CakeInfoCircle>
              <CakeInfoCircle>
                <MediumSmall>{sheetShape}</MediumSmall>
              </CakeInfoCircle>
              <CakeInfoCircle>
                <MediumSmall>{creamTaste}</MediumSmall>
              </CakeInfoCircle>
              <div style={{ marginRight: "2.375rem" }} />
              {/* 클릭시 모달띄우고 주문상세 보여주기 or 주문 상세 페이지 이동 */}
              <Button type="button">
                <MediumSmall color="white">주문 상세</MediumSmall>
              </Button>
              {/* 픽업 완료되었을때만 보여주기 */}
              <Button type="button">
                <MediumSmall color="white">리뷰 작성</MediumSmall>
              </Button>
            </div>
          </CakeInfo>
        </CardDetail>
      </Box>
    </div>
  );
}

export default OrderListCard;
