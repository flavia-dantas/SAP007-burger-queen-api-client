import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { MenuCard } from "../../components/MenuCard";
import { createOrder, getProducts } from "../../services/products";
import { ButtonCountItems } from "../../components/ButtonCountItems";
import { ItemCommand } from "../../components/ItemCommand";
import { Header } from "../../components/Header";
import { InputElement } from "../../components/Input";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [storageOrder, setStorageOrder] = useState([]);
  const [client, setClient] = useState("");
  const [table, setTable] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const filterMenu = (data, type) => {
    return data.filter((item) => item.type === type);
  };

  const showProducts = async (option) => {
    return getProducts()
      .then((response) => response.json())
      .then((data) => setMenu(filterMenu(data, option)));
  };

  const sendOrder = () => {
    createOrder(client, table, order)
    .then((response) => response.json())
    .then((data) => {
      setStorageOrder(data);
      console.log(data, "data");
    });
    console.log([storageOrder], "storage");
  };

  useEffect(() => {
    showProducts("breakfast");
  }, []);

  useEffect(()=>{
    const totalOrder = order.reduce((previousValue, item) => {
      return previousValue + item.qtd * item.price;
    },0);
    setTotalPrice(totalOrder);
  },[order]);

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
      <Header titlePage="Cardápio" />
      <div className="container-main">
        <section className="menu-section">
          <div className="container-button">
        <Button
              className="button-menu button"
              classNameContainer="button-container-right button-container "
          text="Café da Manhã"
          value="breakfast"
          onClick={handleClickMenu}
        />
        <Button
              className="button-menu button"
              classNameContainer="button-container-left button-container "
          text="Almoço e Jantar"
          value="all-day"
          onClick={handleClickMenu}
        />
          </div>
        <ul className="container-products">
          {menu.map((item) => {
            return (
              <div key={`order-${item.id}`}>
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
        </section>
        <section className="order-section">
          <h2 className="order-title">Pedido</h2>
          <div className="inputs-order">
        <InputElement
              classNameInput="input-size input"
          type="text"
          label="Nome"
          value={client}
          name="input"
          placeholder="Digite o nome do cliente"
          autoComplete="off"
          onChange={(e) => setClient(e.target.value)}
        />
        <InputElement
              classNameInput="input-size input"
          type="number"
              min="1"
          label="Mesa"
          value={table}
          name="input"
          placeholder="Nº"
          autoComplete="off"
          onChange={(e) => setTable(e.target.value)}
        />
        </div>
          <ul className="items-container">
          {order.map((item) => {
            return (
                <div className="item-map" key={`order-${item.id}`}>
                <ItemCommand
                  qtd={item.qtd}
                  name={item.name}
                  price={item.price}
                  totalPriceItem={item.price * item.qtd}
                  onClickDelete={deleteItem}
                >
                  <ButtonCountItems
                      classNameButton="button-count-order"
                    amount={getItemCount(item)}
                    increase={() => increaseCount(item)}
                    decrease={() => decreaseCount(item)}
                  />
                </ItemCommand>
              </div>
            );
          })}
        </ul>
          <div className="total-order-container">
            <p className="total-order">
              <span>Total</span>
              <span>R${totalPrice},00</span>
            </p>
        <Button text="Finalizar Pedido" onClick={sendOrder} />
          </div>
        </section>
      </div>
    </>
  );
};
