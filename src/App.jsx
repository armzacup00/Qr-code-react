import styled from "styled-components";
import qrcode from "./assets/image-qr-code.png";

function App() {
  return (
    <Main>
      <ImageZone>
        <img src={qrcode} alt="qrcode" width="100%" />
      </ImageZone>
      <TextZone>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </TextZone>
    </Main>
  );
}

const Main = styled.main`
  max-width: 15.5rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 15px;
  @media  (min-width: 1440px) {
    max-width: 300px;

  }
`;
const ImageZone = styled.div`
  img {
    width: 100%;
    border-radius: 15px;
  }
`;
const TextZone = styled.div`
  padding: 0 1rem 0 1rem;
  text-align: center;
  h1 {
    color: hsl(218, 44%, 22%);
    margin-top: 1rem;
    font-size: 20px;
  }
  p {
    color: hsl(220, 15%, 55%);
    margin-top: 1rem;
    font-size: 15.5px;
  }
`;
export default App;
