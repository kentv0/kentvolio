import React  from 'react'
import Title  from './components/title'
import NavBar from './components/navbar'

import './index.css'

function App() {
    return( 
      <div class="app-container">
        {/* Components here will always render on all pages. */}
        <NavBar/>
      </div>
    )
}

export default App;
