import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List.js";
import Update from "./components/Update.js";
import Detail from "./components/Detail.js";
import Delete from "./components/Delete.js";
import Create from "./components/Create.js";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='' element={<List />} />
                <Route path='/list' element={<List />} />
                <Route path='/update' element={<Update />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/delete' element={<Delete />} />
                <Route path='/create' element={<Create />} />
            </Routes>
        </BrowserRouter>
    );
}