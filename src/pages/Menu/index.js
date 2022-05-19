import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { getProducts } from "../../services/products";
import { ButtonCountItems } from "../../components/ButtonCountItems";

export const Menu = () => {
  const [menu, setMenu] = useState([]);

  const filterMenu = (data, type) => {
    return data.filter((item) => item.type === type);
  };

  const showProducts = async (option) => {
    return getProducts()
      .then((response) => response.json())
      .then((data) => setMenu(filterMenu(data, option)));
  };

  useEffect(() => {
    showProducts("breakfast");
  }, []);

  const handleClickMenu = (e) => {
    return showProducts(e.target.value);
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
            <div key={item.id}>
          <MenuCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          >
            <ButtonCountItems key2={item.id}/>
          </MenuCard>     
            </div>
          );
        })}
      </ul>
    </>
  );
};
