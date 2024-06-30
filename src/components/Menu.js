import React from "react";
import Swal from 'sweetalert2';
import recipes from "../recipes";


const Menu = () => {

    const handleOrder = (id) =>{
        console.log(id,"id is cleared");
        Swal.fire({
            title: 'Are you sure?',
            text: "You You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: 'Yes, order it!'
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire(
                    'Ordered!',
                    'Your order has been processing.',
                    'success'
                )
            }
        })
    }

    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>

            <div className="menu-list">
                {recipes.map((recipe) =>(
                    <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>${recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      );
};

export default Menu;