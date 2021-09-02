import React from 'react';
import Header from './components/Header';

function BasicLayout() {
  return (
    <div className="stretched">
      <div id="wrapper" className="clearfix">
        <Header />
      </div>
    </div>
  );
}

export default BasicLayout;
