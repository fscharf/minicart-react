import Styled from "./styles";
import { cart, cartFreeShipping } from "../../services";
import Item from "./components/Item";
import { formatPrice } from "./utils";
import Switch from "./components/Switch";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/codeby.png";

const Minicart = () => {
  const [state, setState] = useState({
    cart: cart,
    cartFreeShipping: cartFreeShipping,
    isCart: true,
    isCartFreeShipping: false,
  });

  const discount = state.cart.totalizers.find(
    (item) => item.id === "Discounts"
  );

  const total = state.cart.totalizers.find((item) => item.id === "Items");

  useEffect(() => {}, [state.cart]);

  return (
    <Styled.Wrapper>
      <Styled.Logo src={Logo} alt={`Logo`} />
      <Switch
        isCart={state.isCart}
        isCartFreeShipping={state.isCartFreeShipping}
        setCart={() =>
          setState({
            ...state,
            cart: cart,
            isCart: true,
            isCartFreeShipping: false,
          })
        }
        setCartFreeShipping={() =>
          setState({
            ...state,
            cart: state.cartFreeShipping,
            isCart: false,
            isCartFreeShipping: true,
          })
        }
      />
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>Meu carrinho</Styled.Title>
        </Styled.Header>
        <Styled.Body>
          {state.cart.items.map((item, index) => (
            <Item
              index={index}
              imageUrl={item.imageUrl}
              productName={item.name}
              listPrice={item.listPrice}
              price={item.sellingPrice}
              hasDiscount={item.sellingPrice < item.listPrice}
            />
          ))}
        </Styled.Body>
        <Styled.TotalContainer>
          <Styled.Total>
            <Styled.Span>Total</Styled.Span>
            <Styled.Span>
              {formatPrice(total.value + discount.value)}
            </Styled.Span>
          </Styled.Total>
          {total && total.value / 100 > 10 && (
            <Styled.Span hasFreeShipping>
              Parabéns, sua compra tem frete grátis!
            </Styled.Span>
          )}
        </Styled.TotalContainer>
        <Styled.BuyButtonContainer>
          <Styled.BuyButton href="#checkout">Finalizar compra</Styled.BuyButton>
        </Styled.BuyButtonContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Minicart;
