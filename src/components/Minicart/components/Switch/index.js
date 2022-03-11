import Styled from "./styles";

const Switch = ({
  isCart,
  isCartFreeShipping,
  setCart,
  setCartFreeShipping,
}) => {
  return (
    <Styled.Container>
      <Styled.Button active={isCart} onClick={setCart}>
        Sem frete grátis
      </Styled.Button>
      <Styled.Button active={isCartFreeShipping} onClick={setCartFreeShipping}>
        Com frete grátis
      </Styled.Button>
    </Styled.Container>
  );
};

export default Switch;
