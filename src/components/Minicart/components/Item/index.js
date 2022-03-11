import Styled from "./styles";
import { formatPrice } from "../../utils";

const Item = ({
  productName,
  price,
  hasDiscount,
  listPrice,
  imageUrl,
  index,
}) => {

  return (
    <Styled.Container key={index}>
      <Styled.Img src={imageUrl} alt={productName} />
      <Styled.Summary>
        <Styled.Title>{productName}</Styled.Title>
        {hasDiscount && (
          <Styled.Price hasDiscount>{formatPrice(listPrice)}</Styled.Price>
        )}
        <Styled.Price>{formatPrice(price)}</Styled.Price>
      </Styled.Summary>
    </Styled.Container>
  );
};

export default Item;
