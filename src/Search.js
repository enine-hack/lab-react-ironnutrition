import React from 'react'

class Search extends React.Component {
    state = {
        searchText: ''
    }
    handleChange = (event) => {
        console.log('search text=   ',this.state.searchText)
        this.setState({
           searchText:event.target.value
        })
        this.props.search(this.state)

    }
    render() {
        return (
        <div className="field">
            <div className="control">
                <input className="input is-info" type="text" value = {this.state.searchText} onChange={this.handleChange} placeholder="Search" />
            </div>
        </div>
        )
    }
}

export default Search;
