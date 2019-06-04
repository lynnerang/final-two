import React, { Component } from 'react';
import './App.css';
import { addPokemonData, setLoading, setError } from '../../actions';
import { connect } from 'react-redux'
import Card from '../../components/Card/Card';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/pokemon')
      .then(res => res.json())
      .then(data => {
        this.props.addPokemonData(data)
        this.props.setError('')
        // this.props.setLoading(false)
      })
      .catch(err => {
        console.log(err)
        this.props.setError('Unable to fetch pokemon data')
        // this.props.setLoading(false)
      })
  }

  render() {
    const cards = this.props.pokemonData.map(pokemon => <Card key={pokemon.name} data={pokemon} />)

    let page;

    if (this.props.isLoading) {
      page = <img src="https://66.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif" alt="Loading icon"/>
    } else if (this.props.error) {
      page = `${this.props.error}`
    }
    
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <main>
          {cards}
        </main>
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
