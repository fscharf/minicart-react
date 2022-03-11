import numeral from "numeral";
import "numeral/locales/pt-br";

numeral.locale("pt-br");
export const formatPrice = (value) => numeral(value / 100).format("$ 0,0.00");
