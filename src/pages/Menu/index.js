import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { getProducts } from "../../services/products";
import { ButtonCountItems } from "../../components/ButtonCountItems";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [count, setCount] = useState(0);

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

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <p>MENU</p>
      <div className="container-main">
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
                image={item.image}
                name={item.name}
                price={item.price}
              >
                <ButtonCountItems
                  amount={count}
                  increase={increaseCount}
                  decrease={decreaseCount}
                />
              </MenuCard>
            </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
