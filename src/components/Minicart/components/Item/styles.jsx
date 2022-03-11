import styled from "styled-components";

const Styled = {
  Container: styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
  `,
  Img: styled.img`
    min-width: 125px;
    height: 125px;
    object-fit: cover;
    border: 2px solid #eee;
    padding: 8px;
  `,

  Summary: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `,
  Title: styled.p`
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  `,
  Price: styled.span`
    font-size: ${(p) => (p.hasDiscount ? "16px" : "18px")};
    color: ${(p) => (p.hasDiscount ? "#8d8d8d" : "#000")};
  `,
};

export default Styled;
