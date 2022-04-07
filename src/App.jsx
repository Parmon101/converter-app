import React from "react";
import './ui/styles/variables.module.css';

// Common CSS
import "./app.css"

import { Routes, Route } from 'react-router-dom'; 
import { Layout } from "./Layout";
import { observer } from "mobx-react";
import { CurrentValue } from "./domains/Blog";
import { Home } from "./domains/Home";

export const App = observer(() => {

    return(
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="current" element={<CurrentValue />} />
                </Route>
            </Routes>
        </>
    )
})
