import styled from "styled-components";
import { lighten } from "polished";

const Styled = {
  Container: styled.section`
    display: flex;
    gap: 16px;
    padding: 24px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 6px 6px 24px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 400px) {
      flex-wrap: wrap;
    }
  `,
  Button: styled.button`
    background-color: ${(p) =>
      p.active ? "#3b74f2" : lighten(0.2, "#3b74f2")};
    outline: none;
    border: none;
    color: #fff;
    padding: 16px 0;
    width: 100%;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      background-color: #3b74f2;
    }
  `,
};

export default Styled;
