import React, { Component } from 'react';
import axios from 'axios'

import UserInfo from './components/UserInfo'
import Followers from './components/Followers'
import SearchForm from './components/SearchForm'

class App extends Component {
  state = {
    user: "",
    userData: {},
    followers: []
  }

  componentDidUpdate (_, prevState) {
    if(prevState.user !== this.state.user) {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.user}`)
        .then((res) => {
          this.setState({
            userData: res.data
          })
          return axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${res.data.login}/followers`)
        })
        .then((res) => {
            res.data.forEach((item => {
              axios
              .get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${item.login}`)
              .then(response => {
                this.setState({
                  followers:[
                    ...this.state.followers,
                    response.data
                  ]
                })
              })
            }))
        })
        .catch(err => console.log(err))
    }
  }

  updateUser = (newUser) => {
    this.setState ({
      followers: []
    })
    this.setState({
      user: newUser
    })
  }

  render() {
    return (
      <div className="container">
        <SearchForm updateUser={this.updateUser}/>
        {this.state.user !== '' ? 
        <>
          <UserInfo userData={this.state.userData}/> 
          <Followers followers={this.state.followers}/>
        </>
          : ''}
        
        
      </div>
    )
  }
}

export default App;
