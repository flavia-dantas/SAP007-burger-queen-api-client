export const ProductsOrder = ({name, flavor, complement, qtd}) => {
  return (
    <li>
        <p>{name}</p>
        <p>{flavor}</p>
        <p>{complement}</p>
        <p>{qtd}</p>
    </li>
  );
};
