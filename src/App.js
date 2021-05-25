import './App.css';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import RecipesList from './components/RecipesList';
import RecipeSearch from './components/RecipeSearch';

// https://developer.edamam.com/edamam-docs-recipe-api

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Redirect from="/index.html" to="/" />
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={RecipesList} />
          {/* :recipe shows that the value for recipe is dynamic */}
          <Route path="/search/:recipe" component={RecipeSearch} />
          <Route path="*" render={() => {return <div>PAGE NOT FOUND</div>}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
