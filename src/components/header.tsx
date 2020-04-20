import { Link } from 'gatsby';
import React, { FC } from 'react';

type ListLinkProps = {
  to: string;
};

const ListLink: FC<ListLinkProps> = ({ to, children }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link" activeClassName="active">
      {children}
    </Link>
  </li>
);

const Header: FC = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Hello Gatsby
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/flex">Flex</ListLink>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
