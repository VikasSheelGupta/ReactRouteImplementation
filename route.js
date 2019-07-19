import { Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Home from './Home';
import Fav from './Fav';
import Flagship from './Flagship';


const Router = () => {
   return (
        <div className="appContent" id="appContent">
            <Switch>
					<Route
						exact
                        path="/"
						component={ () => <Home/>}
                    />
					<Route
                        path="/home"
						component={ () => <Home/>}
                    />
					<Route
						path="/fav"
						component={ () => <Fav/>}
                    />
					<Route
						path="/flagship"
						component={ () => <Flagship/>}
                    />					
			</Switch>					
        </div>
    );
};

export default Router;
