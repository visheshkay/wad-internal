import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function Cart() {
    let products = [
        {
            title:'Jeans',
            category:'Clothing',
            price:1000,
            image:'https://assets.ajio.com/medias/sys_master/root/20240429/rKTE/662ecbb816fd2c6e6ad98329/-473Wx593H-467162954-blue-MODEL2.jpg'
        },
        {
            title:'Google pixel',
            category:'Technology',
            price:60000,
            image:'https://images-cdn.ubuy.co.in/651e1cdf997a536aed735f24-google-pixel-8-pro-unlocked-android.jpg'
        }
    ]
    return (
        <div className="mt-4">
            <h1>Your Cart</h1>
            <div className="mt-5">
            <div className="row gy-5 gx-3">
            {products.map((a)=><div className="col-sm-12 col-md-6 col-lg-6 mb-2"><ProductCard a={a}/></div>)}
            </div>
            <div></div>

            </div>
            <div>
            <button className="btn button-reg  mx-auto d-block" style={{backgroundColor:'rgb(106, 106, 5)'}}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
