function Cart({cart,remove}){
    const total = cart.reduce(
        (sum,item)=>sum+item.price,
        0
    );
    return(
        <div>
            <h2>Cart({cart.length})</h2>
            {cart.map((item,index) => (
                <div key={index}>
                    <p>
                    {item.name} - Rs{item.price}
                    </p>
               

            
            <button onClick={()=>remove(index)}>Remove</button>
            </div>
            ))}
            <h3>Total {total}</h3>
        </div>
    )
}

export default Cart;