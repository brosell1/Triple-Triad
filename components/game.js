import React from 'react';

import Board from './board';
import Deck from './deck';

const flex = {
  display: 'flex',
}

const player1Deck = [

]

class Game extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        deck: [
          {
            name: 'Sabotender',
            rarity: 1,
            tribe: null,
            stats: { north: 4, east: 3, south: 3, west: 3 },
          },
          {
            name: 'Tonberry',
            rarity: 1,
            tribe: null,
            stats: { north: 2, east: 2, south: 7, west: 2 },
          },
          {
            name: 'Namazu',
            rarity: 1,
            tribe: 'Beastman',
            stats: { north: 1, east: 6, south: 1, west: 5 },
          },
        ]
      }
    }
  };

  render() {
    return (
      <div style={ flex }>
        <Deck player={1} />
        <Board />
        <Deck player={2} />
      </div>
    )
  }
}

export default Game;
