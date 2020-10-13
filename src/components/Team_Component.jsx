import React from 'react';
import Tabs from './Tabs';

// ...

class Team extends React.Component {
  state = {
    pokemons: [
      {
        id: 0,
        img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      },
      {
        id: 1,
        img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      },
      {
        id: 2,
        img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      },
      {
        id: 3,
        img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      },
      {
        id: 4,
        img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      },
      {
        id: 5,
        img:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
      }
    ]
  };

  randomiser = () => {
    const team = [];
    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * 800 + 1);
      fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber)
        .then((res) => res.json())
        .then((res) => {
          const {
            id,
            name,
            sprites: { front_default },
            stats,
            types
          } = res;
          team.push({ id, name, img: front_default, stats, types });
          console.log(types[0].type.name)
          if (team.length === 6) {
            this.setState({ pokemons: team });
          }
        });
    }
  };
  render() {
    return (
      <>
        <p>Team</p>
        <button onClick={this.randomiser}>randomiser</button>
        {/* <List pokemons={this.state.pokemons} /> */}
        <Tabs pokemons={this.state.pokemons} />
      </>
    );
  }
}

export default Team;
