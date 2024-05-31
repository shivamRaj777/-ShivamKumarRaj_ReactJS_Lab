import { useState } from "react";
import { postDataToServer } from "../service/service";

function AddExpense(props){
    
    const setDefaultDate = () => {
        const today = new Date();
        return `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
      };

    const  [payeeName, setPayeeName]=useState("")
    const [price, setPrice]=useState(0)
    const [product, setProduct]=useState("")
    const [setDate, setSetDate]=useState(setDefaultDate())
    
    const handlePayeeChange=(e)=>{
        setPayeeName(e.target.value)
    }
    const handlePriceChange=(e)=>{
        setPrice(parseInt(e.target.value))
    }
    const handleProductChange=(e)=>{
        setProduct(e.target.value)
    }
    const handleDateChange=(e)=>{
        setSetDate(e.target.value)
    }

    const handleSubmit=async (event)=>{
        event.preventDefault();
        const respose={
            payeeName,
            product,
            price,
            setDate
        }
        const data= await postDataToServer(respose);
        console.log(data);
        props.onTrue()
    }
    return(
        <section>
        <header>
          <h1>Add New Item</h1>
          <p>
            Read the below instructions before proceeding:
            <br /> Make sure you fill all the fields where * is provided
          </p>
        </header>
        <form onSubmit={handleSubmit}>
          <article>
            <p>Name</p>
            <select
              name="Name"
              id="district"
              required
              value={payeeName}
              onChange={handlePayeeChange}
            >
              <option value="" defaultChecked>
                Choose
              </option>
              <option value="Rahul">Rahul</option>
              <option value="Ramesh">Ramesh</option>
            </select>
          </article>
  
          <article>
            <p>Product purchased</p>
            <input
              type="text"
              required
              value={product}
              onChange={handleProductChange}
            />
          </article>
  
          <article>
            <p>Price</p>
            <input
              type="number"
              required
              value={price}
              onChange={handlePriceChange}
            />
          </article>
  
          <article>
            <p>Date</p>
            <input
              type="date"
              required
              value={setDate}
              onChange={handleDateChange}
            />
          </article>
  
          <button type="button" className="form-button" onClick={props.onClose}>
            Close
          </button>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </section>
    )
}
export default AddExpense;