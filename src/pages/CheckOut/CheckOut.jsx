import React from 'react'
import { Link } from 'react-router-dom'
import plus from '../../assets/Plus-Button.svg'
import minus from '../../assets/Minus-Button.svg'

function CheckOut() {
  const [productsState, setProductsState] = useState(
    products.map(product => ({ ...product, quantity: 1 }))
  );

  const updateQuantity = (productId, increment) => {
    setProductsState(prevProducts => {
      const newProducts = [...prevProducts];
      const productToUpdate = newProducts.find(product => product.id === productId);
      if (productToUpdate) {
        productToUpdate.quantity += increment ? 1 : -1;
      }
      return newProducts;
    });
  };
}
  

export default CheckOut;