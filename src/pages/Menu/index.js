import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { getProducts } from "../../services/products";
import { ButtonCountItems } from "../../components/ButtonCountItems";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [count, setCount] = useState(0);
  const [itemList, setItemList] = useState([]);

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

  const increaseCount = (item) => {
    const countElement = menu.find((element) => element.id === item.id);

    if (countElement.qtd) {
      countElement.qtd += 1;
      console.log(itemList, "primeiro if increase");
      setItemList(itemList);
    } else {
      itemList.push(item);
      countElement.qtd = 1;
      console.log(itemList, "else increase");
      setItemList([...itemList]);
    }
    setCount(count + 1);
    console.log(setCount, count, "adicionando numero");
  };

  const decreaseCount = (item) => {
    const countElement = itemList.find((element) => element.id === item.id);

    if (countElement) {
      if (countElement.qtd === 1) {
        itemList.splice(
          itemList.findIndex((element) => element.id === item.id),
          1
        );
        countElement.qtd = 0;
        console.log(itemList, "primeiro if decrease");

        setItemList(itemList);
      }
      if (countElement.qtd > 1) {
        countElement.qtd -= 1;
        console.log(itemList, "segundo if decrease");
        setItemList(itemList);
      }

      setCount(count - 1);

      // console.log(count, "removendo numero");
    } else {
      setItemList(itemList);
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
                    amount={item.qtd}
                    increase={() => increaseCount(item)}
                    decrease={() => decreaseCount(item)}
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
