import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Login from "./Login";
import Main from "./Main";
import DragSize from "./DragSize";
import AuthPage from "./AuthPage";
import SignUpBuyer from "./SignUpBuyer";
import SignUpSeller from "./SignUpSeller";
import RecommendPersonal from "./RecommendPersonal";
import RecommendTheme from "./RecommendTheme";
import Testpage from "./test/Testpage";
import Popular from "./Popular";
import MyPage from "./MyPage";
import PortfolioModal from "./components/PortfolioModal";
import Diff from "./Diff";
import MakeOrder from "./MakeOrder";
import RecommendWishList from "./RecommendWishlist";

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/buyer" element={<SignUpBuyer />} />
        <Route path="/signup/seller" element={<SignUpSeller />} />
        <Route path="/main" element={<Main />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/modal" element={<PortfolioModal />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/diff" element={<Diff />} />
        <Route path="/makeOrder" element={<MakeOrder />} />
        <Route path="/test" element={<Testpage />} />
        <Route path="/dragsize" element={<DragSize />} />
        <Route path="/oauth/redirect" element={<AuthPage />} />
        <Route path="/recommend/personal" element={<RecommendPersonal />} />
        <Route path="/recommend/theme" element={<RecommendTheme />} />
        <Route path="/recommend/wishlist" element={<RecommendWishList />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
