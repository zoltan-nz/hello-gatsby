import React, { FC } from 'react';

const Flex: FC = () => (
  <div className="container">
    <div className="row">
      <div className="col-3 bg-gray-200 border">
        {/* NavigationBar */}
        <div className="d-inline-flex">
          <img className="logo" width={50} height={50} />
          <span className="align-self-center">Logo</span>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Admin</a>
            </li>
          </ul>
        </nav>
        {/*  /NavigationBar*/}
      </div>
      <div className="col-9 bg-gray-100 border">content</div>
    </div>
  </div>
);

export default Flex;
