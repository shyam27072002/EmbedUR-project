import React from 'react'
import "./OrderScreen.css"
import { useLocation } from 'react-router-dom'

function OrderScreen() {
    const location =  useLocation();
    console.log(location.state)
  return (
    <div className='orders'>
      <div>
        <h3>Your Orders</h3>
        {location.state.orders.map((order) =>(
            <div>
                <div className='orderContainer'>
                    <img  style={{width:100,height:100}} src={order.image} />
                    <div>
                        <p>{order.title}</p>
                        <p>{order.description.length > 80 ? order.description.substr(0,80) : order.description}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>

    </div>
  )
}

export default OrderScreen
