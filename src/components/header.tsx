import { Link } from 'gatsby';
import React from 'react';

export default function Header() {
  return (
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/flex'}>Flex</Link>
      </li>
    </ul>
  );
}
