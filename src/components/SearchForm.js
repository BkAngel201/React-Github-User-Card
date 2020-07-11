import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if(this.state.searchValue !== '') {
            this.props.updateUser(this.state.searchValue)
        }
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="search" value={this.state.searchValue} onChange={this.handleInputChange}/>
                <button>Search</button>
            </form>
        )
    }
    
}
export default SearchForm