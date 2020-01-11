import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import CategoreyFilters from './components/CategoryFilters'
import Tasks from './components/Tasks'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selectedCategory: CATEGORIES[0],
    featureToggle: false
  }

  selectCategory = category => {
    this.setState({
      selectedCategory: category
    })
  };

  filteredTasks = () => {
    const {tasks, selectedCategory} = this.state; 
    if (selectedCategory === CATEGORIES[0]) return tasks;
    return tasks.filter(task => task.category === selectedCategory);
  }

  onDeleteTask = (task) => {
    // console.log(task)
    const {tasks} = this.state; 
    this.setState({
      tasks: tasks.filter(
        t => t !== task
      )
    })
  }

  showFeatures = () => {
    this.setState({
      featureToggle: !this.state.featureToggle
    })
  }
  
  createNewTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  render() {
    const {tasks, selectedCategory, featureToggle} = this.state; 

    return (
      <div className="App">
        <h2>My tasks</h2>
        <button className={featureToggle ? 'toggle on' : 'toggle off'} onClick={this.showFeatures}>
          {featureToggle ? 'Stretch features enabled' : 'Stretch features disabled'}
        </button>
        <CategoreyFilters categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={this.selectCategory}/>
        <Tasks 
          tasks={this.filteredTasks()} 
          onDelete={this.onDeleteTask} 
          categories={CATEGORIES.filter(c => c !== 'All')} 
          featureToggle={this.state.featureToggle}
          addTask={this.createNewTask}
        />
      </div>

    );
  }
}


export default App;
