import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Chat from './Chat';
import Recordings from './Recordings';
//import connect.core.initCCP from './ amazon-connect-streams/src/core'

// import init from './CCP'


const Home = () => {
  
    return (  
    <main className="body-content">
        {/* <Nav /> */}
        <div className="home-title">
          <h1> Welcome!</h1>
        </div>
        {/* <div className="content">{Parser(thisIsMyCopy)}</div> */}
        {/* <connect.core.initCCP /> */}
        {/* <init /> */}

      
      {/* <ul className="home-button-group">
        <li> <Link to="./Chat" className="home-nav-button">Chat</Link> </li>
        <li> <Link to="./Recordings" className="home-nav-button">Recordings</Link> </li>
      </ul> */}


        {/* <Router>
          <Switch>
            <Route exact path="">
              <
            </Route>
          </Switch>
        </Router> */}
      </main>
    );
  }
   
  export default Home;