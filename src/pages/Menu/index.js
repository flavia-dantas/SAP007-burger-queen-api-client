import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { getProducts } from "../../services/products";
import { ButtonCountItems } from "../../components/ButtonCountItems";
import { ItemCommand } from "../../components/ItemCommand";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

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
    const countElement = order.find((element) => element.id === item.id);

    if (countElement) {
      countElement.qtd += 1;
      console.log(order, "primeiro if increase");
    } else {
      item.qtd = 1;
      order.push(item);
      console.log(order, "else increase");
    }
    setOrder([...order]);
  };

  const decreaseCount = (item) => {
    const countElement = order.find((element) => element.id === item.id);

    if (countElement) {
      if (countElement.qtd === 1) {
        order.splice(
          order.findIndex((element) => element.id === item.id),
          1
        );
        countElement.qtd = 0;
        console.log(order, "primeiro if decrease");
      }
      if (countElement.qtd > 1) {
        countElement.qtd -= 1;
        console.log(order, "segundo if decrease");
      }
    }
    setOrder([...order]);
  };

  const getItemCount = (item) => {
    const findItem = order.find((element) => element.id === item.id);
    return findItem ? findItem.qtd : 0;
  };

  const deleteItem = (teste) => {
    order.splice(
      order.findIndex((element) => element.id === teste.id),
      1
    );
    setOrder([...order]);
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
                    amount={getItemCount(item)}
                    increase={() => increaseCount(item)}
                    decrease={() => decreaseCount(item)}
                  />
                </MenuCard>
              </div>
            );
          })}
        </ul>
        <ul>
          {order.map((item) => {
            return (
              <div key={`order-${item.id}`}>
                <ItemCommand
                  qtd={item.qtd}
                  name={item.name}
                  price={item.price}
                  onClickDelete={deleteItem}
                >
                  <ButtonCountItems
                    amount={getItemCount(item)}
                    increase={() => increaseCount(item)}
                    decrease={() => decreaseCount(item)}
                  />
                </ItemCommand>
              </div>
            );
          })}
        </ul>
        <Button text="Finalizar Pedido" />
      </div>
    </>
  );
};
