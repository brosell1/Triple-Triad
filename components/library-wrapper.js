import React, { useState, useCallback, useEffect } from "react";
import fetch from 'node-fetch';

import Deck from './deck';
import Library from './library';
import Cards from '../cards.json';

const selectRandom = () => Math.ceil(Math.random() * 292);
const libraryState = {
  allCards: Cards.results,
}

const LibraryWrapper = () => {
  const [state, setState] = useState(libraryState);
  useEffect(() => {
    setState({
      ...state,
      selected: selectRandom()
    })
  }, []);

  console.log(Cards)
  const onTileClick = useCallback((id) => {
    setState({
      ...state,
      selected: id
    })
  }, [state]);

  return (
    <div>
      it's da MFin' library
      <Library onClick={ onTileClick }
        cards={ state.allCards }
        selected={ state.selected }/>
    </div>
  )
};

export default LibraryWrapper;

// LibraryWrapper.getInitialProps = () => {
  //   console.log(Cards);
  //   return {Cards}
  // }

  // export async function getStaticProps() {
    //   const res = await fetch('https://triad.raelys.com/api/cards/');
    //   const cards = await res.json();
    //   console.log(cards);
    //
    //   return {
      //     props: {
        //       cards
        //     }
        //   }
        // }
