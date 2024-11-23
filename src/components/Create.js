import React from 'react'
import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
    const idR = useRef();
    const titleR = useRef();
    const peopleR = useRef();
    const yearR = useRef();

    const checkNmake = () => {
        if (!idR.current.value) {
            alert("id를 입력하세요");
            return;
        }
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


        const createData = {
            id: idR.current.value,
            title: titleR.current.value,
            people: peopleR.current.value,
            year: yearR.current.value,
        };


        axios.post('https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data', createData)
            .then((response) => {
                console.log(response)
                alert("등록되었습니다.");
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Create Page</h1>
            <div>
                <p>id:</p>
                <input ref={idR} type="text" />
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
            <button onClick={checkNmake}>Create movie</button>

            <br />    <br />
            <Link to="/list">List</Link>
            <br />    <br />

        </div>
    )

}
