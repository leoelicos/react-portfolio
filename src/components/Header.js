import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
  return (
    <header>
      <h1>Leo Wong</h1>
      <Navigation currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    </header>
  );
}
