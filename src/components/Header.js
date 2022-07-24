import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  return (
    <header className="content-header d-flex flex-column align-items-center">
      <h1 className=" d-flex flex-column align-items-center">Leo Wong</h1>
      <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    </header>
  );
}
