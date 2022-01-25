import React from 'react';
import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function Favourite() {

  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if(favoritesCtx.totalFavorites === 0){
    content = <p>YOU GOTS NO FAVORITES. START ADDING SOME?</p>
  }else{
    content = <MeetupList meetups={favoritesCtx.favorites}/>
  }
  
  return(
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default Favourite;
