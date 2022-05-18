import { useState } from "react";
import { Button } from "../../components/Button";
import { getProducts } from "../../services/products";
import { ButtonCountItems } from "../../components/ButtonCountItems";

export const Menu = () => {
  const [menu, setMenu] = useState([]);

  const filterMenu = (data, type) => {
    return data.filter((item) => item.type === type);
  };

  const handleClickMenu = (e) => {
    getProducts()
      .then((response) => response.json())
      .then((data) => setMenu(filterMenu(data, e.target.value)));
  };
  console.log(menu);

  return (
    <>
      <p>MENU</p>
      <Button
        text="Café da Manhã"
        value="breakfast"
        onClick={handleClickMenu}
      />
      <Button
        text="Almoço e Jantar"
        value="all-day"
        onClick={handleClickMenu}
      />
      <ul>
        {menu.map((item) => {
          <ButtonCountItems key2={item.id}/>
        })}
      </ul>
    </>
  );
};
