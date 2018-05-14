import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Asci from "../components/pages/masterlist/Asci";
import Search from "../components/pages/Search";
import Coverage from "../components/pages/Coverage";
// import NotFound from "../components/common/NotFound";
// import Discover from "../components/pages/Discover";
// import PopularClips from "../components/pages/PopularClips";
// import SearchMovies from "../components/pages/SearchMovies";
// import MovieAndTv from "../components/pages/MovieAndTv";
// import MovieInfo from "../components/pages/MovieDetail/MovieInfo";
// import Contact from "../components/pages/Contact";
const AppRouter = () => (
  <div className="wrapper">
    <Navbar />
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={1000}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/asci" exact component={Asci} />
          <Route path="/search" exact component={Search} />
          <Route path="/search/:id" exact component={Search} />
          <Route path="/coverage/:id" exact component={Coverage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
    <Footer />
  </div>
);

export default AppRouter;
