import React from 'react'
import axios from "axios";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Update() {
    const [id, setId] = useState("");
    const titleR = useRef();
    const peopleR = useRef();
    const yearR = useRef();

    const updateList = () => {
        if (!titleR.current.value) {
            alert("타이틀을 입력하세요");
            return;
        }
        if (!peopleR.current.value) {
            alert("관객수를 입력하세요");
            return;
        }
        if (!yearR.current.value) {
            alert("개봉년도를 입력하세요");
            return;
        }


        const dataUpdate = {
            title: titleR.current.value,
            people: peopleR.current.value,
            year: yearR.current.value,
        };

        axios.put(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data/${id}`, dataUpdate)
            .then((response) => {
                console.log(response);
                alert("업데이트되었습니다.");
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <h1>Update page</h1>
            <div>
                <p>ID:</p>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <p>제목:</p>
                <input ref={titleR} type="text" />
            </div>
            <div>
                <p>관객수:</p>
                <input ref={peopleR} type="number" />
            </div>
            <div>
                <p>개봉년도:</p>
                <input ref={yearR} type="number" />
            </div>
            <button onClick={updateList}>Update</button>
            <br />    <br />
            <Link to="/list">List</Link>
            <br />    <br />
        </>
    )
}

