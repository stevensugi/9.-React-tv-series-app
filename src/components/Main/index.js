import React from "react";
import {Route, Routes} from 'react-router-dom';
import Series  from "../../containers/Series/index";

const Main = props => (
    <Routes>
        <Route path="/" component={Series} />
    </Routes>
)


export default Main;