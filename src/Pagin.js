import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import './App.css'

const SimplComponent = ({ match }) => {
  console.log(match);
  return <p>Example {match.params.ExampleId}</p>;
};

const HardComponent = ({ match }) => {
  const id = match.params;
  console.log(id);
  

  return (
    <div>
      <p>HardComponent</p>
      <div>
        <Link to={`${match.url}/comp/1`}>Comp1</Link>
        <Link to={`${match.url}/comp/2`}>Comp2</Link>
        <Link to={`${match.url}/comp/3`}>Comp3</Link>
        <Link to={`${match.url}/comp/4`}>Comp4</Link>
        <Link to={`${match.url}/comp/5`}>Comp5</Link>
      </div>
      <div>
        <Route
          path={`${match.path}/comp/:ExampleId`}
          component={SimplComponent}
        />
      </div>
    </div>
  );
};

const ExtraComponent = ({ match }) => {
  return (
    <div>
      <p>ExtraComponent </p>
      <div>
        <Link to={`${match.url}/extra/1`}>ExtraComp1</Link>
        <Link to={`${match.url}/extra/2`}>ExtraComp2</Link>
        <Link to={`${match.url}/extra/3`}>ExtraComp3</Link>
        <Link to={`${match.url}/extra/4`}>ExtraComp4</Link>
        <Link to={`${match.url}/extra/5`}>ExtraComp5</Link>
      </div>
      <div>
        <Route path={`${match.path}/extra/:id`} component={HardComponent} />
      </div>
    </div>
  );
};

const Pagin = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/ExtraComponent">Component</Link>
      </nav>
      <hr />
      <Switch>
        <Route path="/" render={() => <p>Home</p>} exact />
        <Route path="/ExtraComponent" component={ExtraComponent} />
      </Switch>
    </div>
  );
};

export default Pagin;
