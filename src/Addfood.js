import React from 'react';

class Addfood extends React.Component {
    state = {
        name: '',
        calories: 0,
        image: '',
    }

    handleChange = (event) => {
        // const type = event.target.type;
        // const value = event.target.value;
        // const name = event.target.name;

        const {type, value, name} = event.target;

        this.setState({
            [name]: value
        })
        console.log(event.target)

    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.addNewFood(this.state)

        // laisser les cases vides
        this.setState({
            name: '',
            calories: 0,
            image: '',
        })

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title:</label>
                    <input type="text" name="name" value={this.state.title} onChange={(event) =>this.handleChange(event)} />

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange}/>

                    <label>Image URL:</label>
                    <input type="text" name="image" value={this.state.image} onChange={this.handleChange}/>
                
                <button>Submit</button>
                </form>
            </div>

        )

    }

}

export default Addfood;