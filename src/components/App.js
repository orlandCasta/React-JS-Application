import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BadgesPage from '../pages/BadgesPage';
import BadgeNewPage from '../pages/BadgeNewPage';
import BadgeDetailsContainerPage from '../pages/BadgeDetailsContainerPage';
import BadgeEdit from '../pages/BadgeEdit';
import Layout from './Layout';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage.js';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/React-JS-Application" component={Home} />
                    <Route exact path="/badges" component={BadgesPage}/>
                    <Route exact path="/badges/new" component={BadgeNewPage}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainerPage}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;