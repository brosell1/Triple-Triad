import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a title="Home">Home</a>
    </Link>
    <Link href="/compendium">
      <a title="Compendium">Compendium</a>
    </Link>
  </div>
)

export default Header;
