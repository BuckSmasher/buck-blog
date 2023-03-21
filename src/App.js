import ArticlesList from './Articles.js';
import NewArticle from './NewArticle.js';
import Navigation from './Navigation.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleDetails from './ArticleDetails.js';

function App() {


  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>

      <Route exact path="/">
        <ArticlesList />
      </Route>

      <Route path="/new">

        <NewArticle />

      </Route>

      <Route path="/articles/:idnum">

        <ArticleDetails />

      </Route>

      </Switch>
      </div>

    </Router>
      

    
  );
}

export default App;
