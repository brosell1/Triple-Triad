import React, { useState, useCallback, useEffect } from "react";
import classNames from "classnames";

import Board from "./board";
import Deck from "./deck";

const randomiseTurn = () => Math.round(Math.random()) + 1;
const blankPanel = {
  card: {
    name: null,
    rarity: null,
    tribe: null,
    stats: { north: undefined, east: undefined, south: undefined, west: undefined }
  }
};

const defaultState = {
  1: {
    deck: [
      {
        name: "Tonberry",
        rarity: 1,
        tribe: null,
        stats: { north: 2, east: 2, south: 7, west: 2 },
        imageUrl: "https://triad.raelys.com/images/cards/large/2.png"
      },
      {
        name: "Namazu",
        rarity: 1,
        tribe: "Beastman",
        stats: { north: 1, east: 6, south: 1, west: 5 },
        imageUrl: "https://triad.raelys.com/images/cards/large/183.png"
      },
      {
        name: "Adamantoise",
        rarity: 2,
        tribe: null,
        stats: { north: 5, east: 7, south: 4, west: 4 },
        imageUrl: "https://triad.raelys.com/images/cards/large/170.png"
      },
      {
        name: "Ultros & Typhon",
        rarity: 2,
        tribe: null,
        stats: { north: 2, east: 3, south: 6, west: 7 },
        imageUrl: "https://triad.raelys.com/images/cards/large/22.png"
      },
      {
        name: "Garuda",
        rarity: 3,
        tribe: "Primal",
        stats: { north: 7, east: 6, south: 1, west: 7 },
        imageUrl: "https://triad.raelys.com/images/cards/large/42.png"
      }
    ]
  },
  2: {
    deck: [
      {
        name: "Chocobo",
        rarity: 1,
        tribe: null,
        stats: { north: 3, east: 7, south: 2, west: 1 },
        imageUrl: "https://triad.raelys.com/images/cards/large/13.png"
      },
      {
        name: "Moogle",
        rarity: 1,
        tribe: "Beastman",
        stats: { north: 2, east: 1, south: 3, west: 7 },
        imageUrl: "https://triad.raelys.com/images/cards/large/20.png"
      },
      {
        name: "Delivery Moogle",
        rarity: 2,
        tribe: "Beastman",
        stats: { north: 5, east: 5, south: 6, west: 3 },
        imageUrl: "https://triad.raelys.com/images/cards/large/159.png"
      },
      {
        name: "Moglin",
        rarity: 3,
        tribe: "Beastman",
        stats: { north: 8, east: 5, south: 4, west: 5 },
        imageUrl: "https://triad.raelys.com/images/cards/large/115.png"
      },
      {
        name: "Good King Moggle Mog XII",
        rarity: 3,
        tribe: "Primal",
        stats: { north: 7, east: 6, south: 7, west: 1 },
        imageUrl: "https://triad.raelys.com/images/cards/large/43.png"
      }
    ]
  },
  board: Array(9).fill(blankPanel),
  turn: 1,
  cardInHand: false,
  indexOfCard: null
};

const neighbors = [
  { east: 1, south: 3 },
  { east: 2, south: 4, west: 0 },
  { south: 5, west: 1 },
  { north: 0, east: 4, south: 6 },
  { north: 1, east: 5, south: 7, west: 3 },
  { north: 2, south: 8, west: 4 },
  { north: 3, east: 7 },
  { north: 4, east: 8, west: 6 },
  { north: 5, west: 7 },
];

const Game = () => {
  const [state, setState] = useState(defaultState);
  useEffect(() => {
    setState({
      ...state,
      turn: randomiseTurn()
    })
  }, []);

  const onPickUp = useCallback(
    (player, index) => {
      if (player === state.turn) {
        if (index === state.indexOfCard || state[player].deck[index].played) {
          setState({
            ...state,
            cardInHand: false,
            indexOfCard: null
          });
        } else {
          setState({
            ...state,
            cardInHand: true,
            indexOfCard: index
          });
        }
      }
    }, [state]
  );

  const onPutDown = useCallback(
    (index) => {
      if (state.cardInHand && !state.board[index].player) {
        const player = state.turn;
        const hand = state[player].deck;
        const cardToRemove = {
          ...hand[state.indexOfCard],
          played: true
        };
        const newBoard = [
          ...state.board.slice(0, index),
          {
            player: player,
            card: hand[state.indexOfCard]
          },
          ...state.board.slice(index + 1)
        ];
        const newHand = {
          deck: [
            ...hand.slice(0, state.indexOfCard),
            cardToRemove,
            ...hand.slice(state.indexOfCard + 1)
          ]
        };
        const new1 = state.turn === 1 ? newHand : state[1];
        const new2 = state.turn === 2 ? newHand : state[2];

        setState({
          ...state,
          1: new1,
          2: new2,
          board: checkNeighbors(index, newBoard),
          cardInHand: false,
          indexOfCard: null,
          turn: (state.turn % 2) + 1
        })
      }
    }, [state]
  );

  const onRestart = useCallback(
    () => {
      const player1Refreshed = {
        deck: state[1].deck.map(item => ({
          ...item,
          played: false
        }))
      };
      const player2Refreshed = {
        deck: state[2].deck.map(item => ({
          ...item,
          played: false
        }))
      };
      const boardRefreshed = Array(9).fill(blankPanel);

      setState({
        ...state,
        1: player1Refreshed,
        2: player2Refreshed,
        board: boardRefreshed,
        turn: randomiseTurn(),
        cardInHand: false,
        indexOfCard: null
      })
    }, [state]
  )

  const checkNeighbors = (index, newBoard) => {
    const { north, east, south, west } = neighbors[index];
    let flipNorth, flipEast, flipSouth, flipWest;
    if (north && newBoard[north].player !== state.turn)
      flipNorth = newBoard[north].card.stats.south < newBoard[index].card.stats.north ? true : false;
    if (east && newBoard[east].player !== state.turn)
      flipEast = newBoard[east].card.stats.west < newBoard[index].card.stats.east ? true : false;
    if (south && newBoard[south].player !== state.turn)
      flipSouth = newBoard[south].card.stats.north < newBoard[index].card.stats.south ? true : false;
    if (west && newBoard[west].player !== state.turn)
      flipWest = newBoard[west].card.stats.east < newBoard[index].card.stats.west ? true : false;

    const updatedBoard = newBoard.slice();

    if (flipNorth) updatedBoard[north].player = state.turn === 1 ? 1 : 2;
    if (flipEast) updatedBoard[east].player = state.turn === 1 ? 1 : 2;
    if (flipSouth) updatedBoard[south].player = state.turn === 1 ? 1 : 2;
    if (flipWest) updatedBoard[west].player = state.turn === 1 ? 1 : 2;
    return updatedBoard;
  };

  return (
    <div>
      <h1 className={
        classNames({[`player-${state.turn}`]: true})
      }>Player {state.turn}'s turn!</h1>
      <div className='game'>
        <Deck player={1}
          deck={ state[1].deck }
          onClick={ onPickUp }
          turn={ state.turn }/>
        <Board board={state.board} turn={state.turn} onClick={onPutDown}/>
        <Deck player={2}
          deck={ state[2].deck }
          onClick={ onPickUp }
          turn={ state.turn }/>
      </div>
      <button onClick={onRestart}>Restart</button>
      {state.indexOfCard}
      {state.cardInHand}
    </div>
  );
};

export default Game;
