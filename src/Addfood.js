import React from 'react';

class Addfood extends React.Component {
    state = {
        title: '',
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

    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.addNewFood(this.state)

        this.setState({
            title: '',
            calories: 0,
            image: '',
        })

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleFromSubmit}>
                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />

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