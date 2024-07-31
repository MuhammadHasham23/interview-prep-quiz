import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        <ul>
          <li>
            <Link href="/">Quiz Interview App</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
