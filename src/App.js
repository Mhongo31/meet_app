import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import AllMeetUps from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritePage from './pages/Favourite';
import Layout from './components/Layouts/Layout';


function App() {
  //localhost:3000
  return (
    <Layout>
        <Switch>
          <Route path="/" exact={true} component={<AllMeetUps />}>
              <AllMeetUps />
          </Route>
          <Route path="/new-meetup" component={<NewMeetupPage/>}>
              <NewMeetupPage/>
          </Route>
          <Route path="/favorites" component={<FavouritePage/>}> 
            <FavouritePage/>
          </Route>
        </Switch>
    </Layout>
  );
}

export default App;
