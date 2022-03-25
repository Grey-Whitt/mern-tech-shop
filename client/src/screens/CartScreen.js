import React, { useEffect } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const Cart = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()

  const productId = params.id

  const qty = searchParams.get('qty') || 1
  //const qty = searchParams.get('qty') ? searchParams.get('qty') : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [(dispatch, productId, qty)])

  return <div>Cart</div>
}

export default Cart
