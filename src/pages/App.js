import React from "react";
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import About from "./About";
import BlogPost from "./BlogPost";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/about" exact component={About} />
                    <Route path="/blog/:slug" component={BlogPost} />
                </Switch>
            </BrowserRouter>


        </>
    );

}
export default App;