import React, { useState, useCallback } from "react";

import Board from "./board";
import Deck from "./deck";

const flex = {
  display: "flex"
};

const defaultState = {
  1: {
    deck: [
      {
        name: "Tonberry",
        rarity: 1,
        tribe: null,
        stats: { north: 2, east: 2, south: 7, west: 2 }
      },
      {
        name: "Namazu",
        rarity: 1,
        tribe: "Beastman",
        stats: { north: 1, east: 6, south: 1, west: 5 }
      },
      {
        name: "Adamantoise",
        rarity: 2,
        tribe: null,
        stats: { north: 5, east: 7, south: 4, west: 4 }
      },
      {
        name: "Ultros & Typhon",
        rarity: 2,
        tribe: null,
        stats: { north: 2, east: 3, south: 6, west: 7 }
      },
      {
        name: "Garuda",
        rarity: 3,
        tribe: "Primal",
        stats: { north: 7, east: 6, south: 1, west: 7 }
      }
    ]
  },
  2: {
    deck: [
      {
        name: "Chocobo",
        rarity: 1,
        tribe: null,
        stats: { north: 3, east: 7, south: 2, west: 1 }
      },
      {
        name: "Moogle",
        rarity: 1,
        tribe: "Beastman",
        stats: { north: 2, east: 1, south: 3, west: 7 }
      },
      {
        name: "Delivery Moogle",
        rarity: 2,
        tribe: "Beastman",
        stats: { north: 5, east: 5, south: 6, west: 3 }
      },
      {
        name: "Moglin",
        rarity: 3,
        tribe: "Beastman",
        stats: { north: 8, east: 5, south: 4, west: 5 }
      },
      {
        name: "Good King Moggle Mog XII",
        rarity: 3,
        tribe: "Primal",
        stats: { north: 7, east: 6, south: 7, west: 1 }
      }
    ]
  },
  board: Array(9).fill({
    player: null,
    card: {
      name: null,
      rarity: null,
      tribe: null,
      stats: { north: null, east: null, south: null, west: null }
    }
  }),
  turn: 1,
  cardInHand: false,
  indexOfCard: null
};

const Game = () => {
  const [state, updateState] = useState(defaultState);

  const onPickUp = useCallback(
    (player, index) => {
      if (player === state.turn) {
        if (index === state.indexOfCard) {
          updateState({
            ...state,
            cardInHand: false,
            indexOfCard: null
          });
        } else {
          updateState({
            ...state,
            cardInHand: true,
            indexOfCard: index
          });
        }
      }
    },
    [state]
  );

  const onPutDown = useCallback(
    (index) => {
      if (state.cardInHand) {
        const player = state.turn;
        const newBoard = [
          ...state.board.slice(0, index),
          {
            player: player,
            card: state[player].deck[state.indexOfCard]
          },
          ...state.board.slice(index + 1)
        ];

        updateState({
          ...state,
          board: newBoard,
          cardInHand: false,
          indexOfCard: null,
          turn: (state.turn % 2) + 1
        })
      }
    }, [state]
  );

  return (
    <div style={flex}>
      <Deck player={1} deck={state[1].deck} onClick={onPickUp} />

      <Board board={state.board} turn={state.turn} onClick={onPutDown}/>

      <Deck player={2} deck={state[2].deck} onClick={onPickUp} />

      {`${state.cardInHand}`}
      {`${state.indexOfCard}`}
      {`${state.turn}`}
    </div>
  );
};

export default Game;
