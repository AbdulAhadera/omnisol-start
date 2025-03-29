import React from 'react'
import HomePage from './Pages/HomePage'
import SelectAgentPage from './Pages/SelectAgentPage';
import { Routes, Route } from "react-router-dom";
import AgentPage from './Pages/AgentPage';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/v1/agent/" element={<SelectAgentPage />} />
            <Route path="/v1/agent/selectedagent" element={<AgentPage />} />
        </Routes>
    )
}

export default Router;