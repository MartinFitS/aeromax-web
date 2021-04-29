import React from "react";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import Home from "../containers/Home";
import Catalogue from "../containers/Catalogue";
import NotFound from "../containers/NotFound";
import Contacts from "../containers/Contacts";
import Layout from "../components/Layout";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Catalogo" component={Catalogue}/>
                <Route exact path="/Contactos" component={Contacts}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>      
    </BrowserRouter>
);

export default App;