import React, { Component } from 'react';


import Form  from './components/Form'
import Lists from './components/Lists'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      taskInputField : '',
      task : [],
    } 
   
  }


/**************adding task */
  taskHandeler=(e)=>{

    e.preventDefault()
    var formValue = this.state.taskInputField
    if( formValue === ''){
      alert("Invalid Task")
    }
    else{
      
      var newTask = this.state.taskInputField
      this.setState({
        task : this.state.task.concat(newTask),
        taskInputField : '',
      })

    }
    
  }
 
 

  taskInputHandeler = (e) =>{
    var value = e.target.value
    this.setState({
      taskInputField : value
    })
    
  }

  /************deleting task */
  deleteTaskHandeler=(index)=>{
    var newTask = [... this.state.task]
     var r =  window.confirm("Delete "+newTask[index] + ' task');
    if(r){
      
      newTask.splice(index, 1)
      this.setState({
        task : newTask
      })
      
    }
   else{
     return
   }
    
  }
  /******checking task *****/
  checkingTaskHandeler = (index) =>{
    var  isTaskCopmleted = false
    const check =  document.querySelectorAll('.check')
    const li =  document.querySelectorAll('li')
    
    // alert(check)
    if(check[index].checked === true){
      var a =window.confirm('Did you finished this task??')
      if(a){
        li[index].classList.add('checked')
      }
    }
    else{
      var a =window.confirm('Do ou want to readd this on your task list?')
      if(a){
        li[index].classList.remove('checked')
      }
    }
  }

  render(){
    
    return (
      <div className='main'>
        <h1> Task Manager</h1>
        <Form  
          task={this.taskHandeler}
          input={this.taskInputHandeler}
          value ={this.state.taskInputField}
          
        />
        < Lists
          tasks = {this.state.task}
          delete = {this.deleteTaskHandeler}
          check = {this.checkingTaskHandeler}
        />
        
      </div>
    )
  }
}

export default App;
