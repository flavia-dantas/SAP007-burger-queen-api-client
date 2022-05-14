import { Button } from "../../components/Button";
import { getProducts } from "../../services/products";

export const Menu = () => {
  const handleClickMenu = () => {
    getProducts()
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <p>MENU</p>
      <Button
        text="Café da Manhã"
        value="breakfast"
        onClick={handleClickMenu}
      />
      <Button text="Almoço e Jantar" value="allday" onClick={handleClickMenu} />
    </>
  );
};
