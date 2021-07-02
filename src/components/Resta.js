import React, {useState} from "react";
import { FormGroup, Form, Input, Label, Button } from "reactstrap";
import axios from "axios";


const Resta= () => {
    const [data, setData]=useState({
        number1:0,
        number2:0,
        response:0,
        status:null
    })

const handleChange=(event)=> {
    setData({...data, [event.target.name]:event.target.value})
}
const handleClick =()=>{
    axios.get(`http://localhost:8080/res?n1=${data.number1}&n2=${data.number2}`)
    .then(response=>setData({...data,response:response.data.response,
    status:response.data.status})).catch(error=>console.log(error))
}

return (<div><Form className="container">
<div>
    <h1>Resta</h1>
    </div>
    <div className="row">
    <FormGroup className="col-6">
        <Label for="number1">Número 1</Label>
        <Input type="number" name="number1" id="number1" onChange={handleChange}/>
    </FormGroup>
    <FormGroup  className="col-6">
        <Label for="number2">Número 2</Label>
        <Input type="number" name="number2" id="number2" onChange={handleChange}/>
    </FormGroup>
    </div>
    <Button  color="primary" className="w-100" onClick={handleClick}>Restar</Button>
    <Label>Status {data.status}</Label>
    <p>{data.response}</p>
    </Form>

    </div>)
}
export default Resta;