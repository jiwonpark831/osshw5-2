import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function List() {

    let defaultList = [];

    const [tempList, setTempList] = useState(defaultList);

    const getList = () => {
        axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data")
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setTempList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div>{tempList.map((each) => <div><input value={each.title} /></div>)} </div>
            <button onClick={getList}>call list</button>
            <br />     <br />
            <Link to="/create">Create</Link>
            <br />
            <Link to="/update">Update</Link>
            <br />
            <Link to="/detail">Detail</Link>
            <br />
            <Link to="/delete">Delete</Link>

        </>

    )
}
