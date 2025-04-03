import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import SelectAgentPage from './Pages/SelectAgentPage';
import AgentPage from './Pages/AgentPage';
import BuiltInAgentPage from './Pages/BuiltInAgent';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/v1/agent/" element={<SelectAgentPage />} />
            <Route path="/v1/agent/selectedagent" element={<AgentPage />} />
            <Route path="/v1/agent/liveAgent" element={<BuiltInAgentPage />} />
        </Routes>
    )
}

export default Router;