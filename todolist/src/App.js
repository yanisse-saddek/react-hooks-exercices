import {useState, createContext} from 'react'
import TaskList  from './components/TaskList'
import Task  from './components/Task'

export const TaskContext = createContext();


function App() {
  const array = [
              { id: 1, title: 'Tache 01', priority: 'Important'},        
              { id: 2, title: 'Tache 02', priority: 'Urgent'}   
                ]
  const [task, setTask] = useState(array)

  const changeTask = (data)=>{    
    setTask(data)
  }
  var sendToContext = {
    tasks:task,
    changeTasks:changeTask
  }

  return (
    <div className="App">
        <TaskContext.Provider value={sendToContext}>
          <TaskList />
          <Task/>  
        </TaskContext.Provider>
    </div>
  );
}

export default App;
