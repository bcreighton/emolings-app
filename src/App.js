import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Nav from './components/Nav/Nav';
import Landing from './pages/Landing/Landing';
import GetStarted from './pages/GetStarted/GetStarted';
import Faq from './pages/Faq/Faq';
import CopingSkills from './pages/CopingSkills/CopingSkills';
import FeelingSelection from './pages/UserPath/FeelingSelection/FeelingSelection';
import FeelingIdentification from './pages/UserPath/FeelingIdentification/FeelingIdentification';
import AdvFeelingSelection from './pages/UserPath/AdvFeelingSelection/AdvFeelingSelection';
import FeelingSeverity from './pages/UserPath/FeelingSeverity/FeelingSeverity';
import SeverityIdentification from './pages/UserPath/SeverityIdentification/SeverityIdentification';
import Coping from './pages/UserPath/Coping/Coping';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Emolings</title>
            <meta name='description' content='Modern day child feelings chart with a unique spin on parent/caregiver coping skills.'/>
        </Helmet>
        <Nav />
        <main>
          <Switch>
            <Route path='/get-started' component={GetStarted} />
            <Route path='/faq' component={Faq} />
            <Route path='/coping-skills' component={CopingSkills} />
            <Route path='/feeling-selection' component={FeelingSelection} />
            <Route path='/child-feeling-selection' component={FeelingSelection} />
            <Route path='/feeling-identification' component={FeelingIdentification} />
            <Route path='/adv-feeling-selection' component={AdvFeelingSelection} />
            <Route path='/child-feeling-severity' component={FeelingSeverity} />
            <Route path='/feeling-severity' component={FeelingSeverity} />
            <Route path='/severity-identification' component={SeverityIdentification} />
            <Route path='/child-coping' component={Coping} />
            <Route path='/coping' component={Coping} />
            <Route path='/' exact component={Landing} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;