import { Button, Input, Select } from "antd";
import Form from "antd/lib/form/Form";
import { Option } from "antd/lib/mentions";
import React, { useState } from "react";





function Todo() {
  const [todo, setTodo] = useState("");
  const [icon, setIcon] = useState("")
  const [todos, setTodos] = useState([{icon, todo}]);


  function handleChange(value) {
    console.log(`selected ${value}`);
    setIcon(value)
    console.log(todo);
    
  }
//   useEffect(() => {
    
//         setTodos([...todos, todo]);
//       }
//   , [todo])
  return (
    <div>
      <Form>
        <Input.Group>
        <Input.Group compact>
        <Select  style={{ width: '30%' }} onChange={handleChange}>
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
    </Input.Group>
    
          <Input
            style={{ width: "calc(40% - 200px)" }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)
          }
          
          />
          <Button 
            type="primary"
            onClick={() => {
                setTodos([{icon,todo},...todos]);
            }}
          >
            Submit
          </Button>
        </Input.Group>
      </Form>
{
    todos.map((eachTodo) =>(
        <h1>{eachTodo}</h1> 
    ))
}
      
    </div>
  );
}

export default Todo;
