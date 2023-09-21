import { useState } from "react";

const productList = [
    {id:0, name: "Apple", count:23},
    {id:1, name: "Apple", count:3},
    {id:2, name: "Apple", count:33},
    {id:3, name: "Apple", count:6},
]

export default function ShoppingCart(){

    const[products, setProducts] = useState(productList);

    function handlePlus(productId){
        setProducts(products.map(product=>{
            if(product.id === productId){
                return{
                    ...product, count: product.count+1
                }
            }else{
                return product;
            }
        }))
    }

    function handleMinus(productId){
        setProducts(products.map(product=>{
            if(product.id === productId && product.count > 0){
                return{
                    ...product, count: product.count-1
                };
            }else{
                return product
            }
        }))

        }

        return(
            <>
                <h1>products lists</h1>
                <ul>
                    {products.map(product=>(
                        <li key={product.id}>
                            {product.name} {' '}
    
                            (<b>{product.count}</b>)
    
                            <button onClick={()=>{handlePlus(product.id)}}>+</button>
                            <button onClick={()=>{handleMinus(product.id)}}>-</button>
                        </li>
    
                    ))}
                </ul>
            </>
        );
}

