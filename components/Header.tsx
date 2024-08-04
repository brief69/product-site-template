import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Remix AI</div>
      <ul className="flex space-x-4">
        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
        <li><Link href="#" className="hover:text-gray-300">About</Link></li>
        <li><Link href="#" className="hover:text-gray-300">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
