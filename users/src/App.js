import users from './users.json';
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(users.length)

  return (
    <div className="App">
    <p onClick={()=>count+1<users.length ? setCount(count+1) : null}>Incrementer</p>
    <p onClick={()=>count-1>-1 ? setCount(count-1) : null}>Decrementer</p>
    {count}
      {users.map((user, index)=>{
        if(index<count){
          return(
          <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.website}</p>
          </div>
              )
          }
        })
      }
    </div>
  );
}

export default App;
