import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const history = useHistory();

  function addMeetupHandler(meetupData){
    fetch(
        'https://react-getting-started-530ad-default-rtdb.firebaseio.com/meetups.json',
        {
          method:'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type' : 'application/json'
          }
        }
      ).then(() => {
        history.replace('/');
      });
  }
  return (
      <section>
        <h1>All NewMeetups Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
    );
}

export default NewMeetup;
