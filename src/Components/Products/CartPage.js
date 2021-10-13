


import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux';


function CartPage() {

// const [cartPageData,setCartPageData] = useState([{}]);
const cartData = useSelector(state => state.productsData.cartData)
// console.log(cartData);
// setCartPageData(cartData);

// useEffect(()=>{
 
// },[])
    
    return (
        <div>
            {/* <p>Cart Page</p> */}
            <div className="container mt-3">
               
            {
                cartData && cartData.length>0 && cartData.map((product)=>(
                    <div className="row">
                  <div className="col-lg-3" key={product.id}>
                      <div> 
                          <img className="img-fluid" src={product.image} alt={product.title}/>
                      </div>
                      </div> 
                      <div className="col-lg-9">
                          <div>
                              <h3>{product.title}</h3>
                              <p>{product.description}</p>
                              <p>{`Price ${product.price}`}</p>
                              </div>
                          </div> 
                      </div>
                ))
            }

               

            </div>
        </div>
    )
}

export default CartPage
