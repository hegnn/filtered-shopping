import React from 'react'
import Products from './components/Products/Products'
import data from './data.json'
import {filterPlainArray} from './filterPlainArray'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import CartLayout from './components/Cart/Layout/CartLayout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/CheckoutForm/Checkout/Checkout'
import { Sidebar } from './components/Sidebar/Sidebar'


function App() {

  const [Filters, setFilters] = useState({
    productCompany: [],
    productColor: []
  })
  
  const [searchTerm, setSearchTerm] = useState("")
  const [productList, setProductList] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(()=>{
    setProductList(data)
  },[])

  const showFileteredResults = (filters) => {
    setProductList(filterPlainArray(data, filters))
  }

  const handleFilters = (filters, category) => {
    const newFilters = {...Filters}
    newFilters[category] = filters

    showFileteredResults(newFilters)
    setFilters(newFilters)
  }

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const getTotalItems = (items) => items.reduce((ack, item) => ack+ item.amount, 0) 

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev =>{
      const isInTheCart = prev.findIndex((item)=> item.productName === clickedItem.productName )

      if(isInTheCart !== -1){
        return prev.map(item => (
          item.productName === clickedItem.productName ? { ...item, amount: item.amount + 1 } : item
        ))
      }

      return [...prev, {...clickedItem, amount: 1}]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if(item.productName === id){
          if(item.amount === 1) 
            return ack
          else
            return [...ack, {...item, amount: item.amount -1}]
        } 
        else{
          return [...ack, item]
        }
      }, []
      )
    )
  }

  const deleteFromCart = (id) => (
    setCartItems(prev =>
      prev.filter((item) => item.productName !== id)
    )  
)
  
  const deleteAllCart = () => (setCartItems([]))
  
  return (
    <Router>
      <div style={{backgroundColor: "#fafafa"}}>
          <Navbar 
            totalItems={getTotalItems(cartItems)} 
            cartList={cartItems} 
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />

          <Switch>
            <Route exact path="/">
              <div style={{display: 'flex'}}>
                <Sidebar 
                  companyFunction={filters => handleFilters(filters, "productCompany")} 
                  colorFunction={filters => handleFilters(filters, "productColor")} 
                  refreshFunction={term => updateSearchTerm(term)}
                />
                <Products productList={productList} funcAddToCart={handleAddToCart} searchTerm={searchTerm}/>
              </div>
            </Route>

            <Route exact path="/cart">
              <CartLayout 
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                deleteFromCart={deleteFromCart}
                deleteAllCart={deleteAllCart}
              />
            </Route>

            <Route exact path="/checkout">
              <Checkout cartItems={cartItems} deleteAllCart={deleteAllCart}/>
            </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
