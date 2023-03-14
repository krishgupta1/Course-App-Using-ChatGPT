import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation'
import CourseList from './components/CourseList';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container mx-auto">
          <CourseList />
        </div>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
