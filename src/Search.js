import React from 'react'

class Search extends React.Component {
    render() {
        return (
        <div className="field">
            <div className="control">
                <input className="input is-info" type="text" value = {this.props.query} onChange={this.props.search} placeholder="Search" />
            </div>
        </div>
        )
    }
}

export default Search;
