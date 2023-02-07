import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './App.css';


function App() {
const dispatch = useDispatch();
const employees = useSelector((state) => state.employees);

const [form , setForm ] = useState({
  id: Math.floor(Math.random()*20),
  name: "",
  age: "",
  position: "",
});



const handleSubmit = (event) =>{
  event.preventDefault();
  dispatch({type:"ADD_EMPLOYEE", payload: form});
  setForm(
    {
      name: "",
      age: "",
      position: "",
    }
    )
}
console.log(form)


const handleChange = (e) => {
  const newData = {...form,}
  newData[e.target.id]=e.target.value;
  setForm(newData);
};


  return (
    <div className="App">
      <div className="form-head"><h1>Redux Form</h1></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
           <select id="position" onChange={handleChange}  required={true} >
           <option defaultValue="select position" disabled selected hidden>Select Position</option>
            <option value="expect">Expect</option>
            <option value="senior">Senior</option>
            <option value="junior">Junior</option>
           </select>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter Name: </label>
          <input type="text" className="form-control" id="name" placeholder="Your name" onChange={handleChange} />
        </div>
        <div className="mb-3">
         <label htmlFor="age" className="form-label">Enter Age: </label>
         <input type="number" className="form-control"id="age" placeholder="Your age" onChange={handleChange}  />
       </div>
       <div className="mb-3">
        <button type="submit" className="btn btn-primary">Save Form</button>
       </div>
        </form>  
        <div className="display">
          <h2>Number of Employees : {employees.length}</h2>              

          {employees.map((item, i) => (
           <ul key={i}>
            <li>Position: {employees[i].position}</li>
            <li>Employee Name: {employees[i].name}</li>
            <li>Age: {employees[i].age}</li>
          </ul>))}
          </div>      
    </div>
  );
}

export default App;
