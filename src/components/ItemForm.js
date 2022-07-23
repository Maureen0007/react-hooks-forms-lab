import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name, setName ] = useState("");
  const [ category, setCategory ] = useState("Produce");



  function handleSubmit(event){
    event.preventDefault();

    onItemFormSubmit({
      id: uuid(), 
      name,
      category,
    });
  }

  function handleChangeName(e){
    setName(e.target.value)

  }

  function handleChangeCatgory(e){
    setCategory(e.target.value)

  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name"  value={name} onChange={handleChangeName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChangeCatgory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
