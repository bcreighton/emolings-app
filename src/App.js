import React from 'react';
import {Helmet} from "react-helmet";

function App() {
  return (
    <main className='App'>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Emolings</title>
          <meta name='description' content='Modern day child feelings chart with a unique spin on parent/caregiver coping skills.'/>
      </Helmet>
      <h1>Emolings</h1>
    </main>
  );
}

export default App;