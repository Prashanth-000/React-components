import React,{useState} from 'react';
function Foods(){

    const [foods,setFoods]=useState(["Apple",
                                    "banana",
                                    "Orange"]);

    const handleAdd=()=>{
        const newFood=document.getElementById("foodItem").value;
        if(newFood!=""){
            setFoods(f=>[...foods,newFood]);
            document.getElementById("foodItem").value="";
        }
        
    }

    const handleDelete=(idx)=>{
        setFoods(foods.filter((elemeent,i)=>i!=idx));
    }
    return(
        <div>
            <h1>List of food items</h1>
            <ol>
               {foods.map((food,index)=>
                    <li key={index} 
                    onClick={()=>handleDelete(index)}>
                    {food}</li>
                )}
            </ol>
            <input type="text" 
                id="foodItem"
                placeholder="Food name">
            </input>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
export default Foods
