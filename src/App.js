import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
  return (
    <MainWrapper className="App">
      <Navbar />
      <Banner />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  position: absolute;
  width: 1499px;
  height: 990px;
  background: #fef1e6;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 1990px;
  }
  @media screen and (max-width: 767px) {
    height: 1990px;
  }
`;
