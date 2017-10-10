import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header';
import LinkCreate from './component/link_create';
import { Links } from "../imports/collections/links";
import LinkList from './component/link_list';

const App = () => {
  return (
      <div>
        <Header />
        <LinkCreate />
        <LinkList />
      </div>
  );
}

Meteor.startup(() => {
  ReactDOM.render(<App />,document.querySelector('.container'));

});