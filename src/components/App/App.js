import React, { Component } from 'react';
import './App.css';
import { addPokemonData, setLoading, setError } from '../../actions';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => {
        this.props.addPokemonData(data)
        this.props.setError('')
        this.props.setLoading(false)
      })
      .catch(err => {
        console.log(err)
        this.props.setError('Unable to fetch pokemon data')
        this.props.setLoading(false)
      })
  }

  render() {
    console.log(this.props)
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  pokemonData: state.pokemonData,
  isLoading: state.isLoading,
  error: state.error
})

export const mapDispatchToProps = dispatch => ({
  addPokemonData: data => dispatch(addPokemonData(data)),
  setLoading: bool => dispatch(setLoading(bool)),
  setError: text => dispatch(setError(text))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
