import { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({ children }) {
  const cartFromStorage = JSON.parse(localStorage.getItem('cart'))
  const [cartList, setCartList] = useState(!cartFromStorage ? [] : cartFromStorage)

  const cartTotal = cartList.reduce((total, item) => item.price * item.amount + total, 0)
  const cartTotalQuantityNumber = cartList.reduce((acc, curr) => {
    return acc + curr.amount
  }, 0)

  const addToCart = (plantObject) => {
    setCartList((currentItems) => {
      const itemFound = currentItems.find((item) => item.id === plantObject.id)
      if (itemFound) {
        return currentItems.map((item) => {
          if (item.id === plantObject.id) {
            return { ...item, amount: item.amount + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...currentItems, plantObject]
      }
    })
  }

  const deleteItemFromCart = (removeId) => {
    setCartList(current => {
      return current.filter((item) => item.id !== removeId)
    })
  }

  const removeItem = (removeId) => {
    setCartList((alreadyItems) => {
      if (alreadyItems.find((item) => item.id === removeId)?.amount === 1) {
        return alreadyItems.filter((item) => item.id !== removeId)
      } else {
        return alreadyItems.map((item) => {
          if (item.id === removeId) {
            return { ...item, amount: item.amount - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const clearCart = () => setCartList([])

  // to update cart listening cartlist
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartList))
  }, [cartList])

  return (
    <CartContext.Provider value={{
      cartList,
      cartTotal,
      cartTotalQuantityNumber,
      clearCart,
      setCartList,
      addToCart,
      deleteItemFromCart,
      removeItem
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider
