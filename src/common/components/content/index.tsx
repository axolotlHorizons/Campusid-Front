import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Planning from '../planning';
import Notes from '../notes';

const Content = () => {
    return (
        <div>
            <Switch>
                <Route path="/planning" exact>
                    <Planning />
                </Route>
                <Route path="/notes" exact>
                    <Notes />
                </Route>
            </Switch>
            ;
        </div>
    );
};

export default Content;
