import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <>
      <div className="ui container">
        <Header />
        <div
          className="main-content"
          style={{ paddingTop: 120, paddingBottom: 80 }}
        >
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
            <Route component={() => <div>Page Not Found</div>} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
