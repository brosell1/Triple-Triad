import React from 'react';

import Board from './board';
import Deck from './deck';

const flex = {
  display: 'flex',
}

const player1Deck = [

]

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        deck: [
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
          {
            name: 'Adamantoise',
            rarity: 2,
            tribe: null,
            stats: { north: 5, east: 7, south: 4, west: 4 },
          },
          {
            name: 'Ultros & Typhon',
            rarity: 2,
            tribe: null,
            stats: { north: 2, east: 3, south: 6, west: 7 },
          },
          {
            name: 'Garuda',
            rarity: 3,
            tribe: 'Primal',
            stats: { north: 7, east: 6, south: 1, west: 7 },
          },
        ],
      },
      player2: {
        deck: [
          {
            name: 'Chocobo',
            rarity: 1,
            tribe: null,
            stats: { north: 3, east: 7, south: 2, west: 1 },
          },
          {
            name: 'Moogle',
            rarity: 1,
            tribe: 'Beastman',
            stats: { north: 2, east: 1, south: 3, west: 7 },
          },
          {
            name: 'Delivery Moogle',
            rarity: 2,
            tribe: 'Beastman',
            stats: { north: 5, east: 5, south: 6, west: 3 },
          },
          {
            name: 'Moglin',
            rarity: 3,
            tribe: 'Beastman',
            stats: { north: 8, east: 5, south: 4, west: 5 },
          },
          {
            name: 'Good King Moggle Mog XII',
            rarity: 3,
            tribe: 'Primal',
            stats: { north: 7, east: 6, south: 7, west: 1 },
          },
        ],
      },
      board: Array(9).fill({
        player: null,
        card: {
          name: null,
          rarity: null,
          tribe: null,
          stats: { north: null, east: null, south: null, west: null },
        }
      }),
      turn: 1,
      cardInHand: false,
      indexOfCard: null,
    };
  };

  pickUp(player, index) {
    if (player === this.state.turn) {
      if (index === this.state.indexOfCard) {
        this.setState({
          cardInHand: false,
          indexOfCard: null,
        });
      } else {
        this.setState({
          cardInHand: true,
          indexOfCard: index,
        });
      }
    }
  };

  render() {
    return (
      <div style={ flex }>
        <Deck player={ 1 } deck={ this.state.player1.deck } onClick={this.pickUp} />
        <Board board={ this.state.board } turn={ this.state.turn } />
        <Deck player={ 2 } deck={ this.state.player2.deck } onClick={this.pickUp} />
        {`${this.state.cardInHand}`}
        {`${this.state.indexOfCard}`}
      </div>
    )
  }
}

export default Game;
