import "./style.css";
import { useState } from "react";
import { Button } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { getProducts } from "../../services/products";

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
      <ul className="container-products">
        {menu.map((item) => {
          return (
            <>
          <MenuCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          >
          </MenuCard>

          </>
          );
        })}
      </ul>
    </>
  );
};
