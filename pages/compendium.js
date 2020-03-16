import fetch from 'node-fetch';

import Layout from '../components/layout';
import LibraryWrapper from '../components/library-wrapper';

async function fetchCards() {
  const res = await fetch('https://triad.raelys.com/api/cards/')
  return await res.json();
}

function Compendium( props ) {
  console.log(props);
  return (
    <Layout>
      <LibraryWrapper />
    </Layout>
  );
}

export async function getServerSideProps() {
  return { props: { cards: fetchCards() } }
}

export default Compendium;
