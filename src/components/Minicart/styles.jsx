import styled from "styled-components";

const Styled = {
  Wrapper: styled.article`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 64px 0;

    @media screen and (max-width: 768px) {
      margin: 64px 16px;
    }
  `,
  Container: styled.article`
    background-color: #fff;
    border-radius: 12px;
    width: 35rem;
    box-shadow: 6px 6px 24px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  `,
  Header: styled.section`
    display: flex;
    justify-content: center;
    padding: 16px;
    border-bottom: 2px solid #eee;
  `,
  Title: styled.h2`
    font-size: 24px;
    font-weight: 700;
  `,
  Body: styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    border-bottom: 2px solid #eee;
  `,
  Logo: styled.img`
    border-radius: 50%;
    max-width: 100px;
    align-self: center;
  `,
  TotalContainer: styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    border-bottom: 2px solid #eee;
  `,
  Total: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Span: styled.span`
    font-weight: bold;
    font-size: 24px;

    ${(p) =>
      p.hasFreeShipping && {
        backgroundColor: "#c7ffa6",
        backgroundSize: "cover",
        padding: "8px",
        color: "#217a03",
        borderRadius: "50px",
        fontWeight: "normal",
        fontSize: "20px",
        textAlign: "center",
      }}

    @media screen and (max-width: 768px) {
      font-size: ${(p) => p.hasFreeShipping && "14px"};
    }
  `,
  BuyButtonContainer: styled.section`
    padding: 24px;
    display: flex;
  `,
  BuyButton: styled.a`
    font-weight: bold;
    text-decoration: none;
    padding: 16px 0;
    background-color: #3b74f2;
    width: 100%;
    color: #fff;
    border-radius: 8px;
    text-align: center;
    font-size: 24px;
  `,
};

export default Styled;
