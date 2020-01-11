import React from 'react' 


class NewTask extends React.Component{
    defaultState = {
        category: this.props.categories[0],
        text:''
    }
    
    state = this.defaultState;

    chooseCategory = (event) => {
        event.preventDefault(); 
        // event.persist();
        // console.log(event)
        this.setState({
            category: event.target.value
        })
    };
//👇 keep it DRY by utilizing name attribute 
    // newTaskText = (event) => {
    //     // event.persist();
    //     // console.log(event)
    //     this.setState({
    //         text: event.target.value
    //     })
    // };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    };
    
    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.addTask(this.state);
        this.setState(this.defaultState)
    };


    render(){
        const {categories} = this.props 
        return(
            <form 
                key='I dont need no stinky key!'
                className='new-task-form' 
                onSubmit={this.onSubmit} 
                onChange={this.onChange}> {/* onChange is placed here because the nature of event bubble up, therefore, any children's change will trigger this event handler*/}
                <input placeholder="New task details" type="text"  name='text' value={this.state.text}></input>
                <select  name='category' value={this.state.category}> 
                    {categories.map (c => <option value={c}>{c}</option>)}
                </select>
                <input type='submit' value='Add Task'></input>
            </form>
        )
    }
};

export default NewTask