import ArticlesList from './Articles.js';
import NewArticle from './NewArticle.js';
import Navigation from './Navigation.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleDetails from './ArticleDetails.js';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

function App() {


  return (
    <Router>

      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">

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

        </ThemeProvider>

    </Router>
      

    
  );
}

export default App;
