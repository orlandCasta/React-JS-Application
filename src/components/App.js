import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BadgesPage from '../pages/BadgesPage';
import BadgeNewPage from '../pages/BadgeNewPage';
import Layout from './Layout';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage.js';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={BadgesPage}/>
                    <Route exact path="/badges/new" component={BadgeNewPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;