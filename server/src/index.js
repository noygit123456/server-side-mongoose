import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom"
import Axios from "axios"

function App() {
    const [users, setUsers] = useState({})

    useEffect(() => {
        async function go() {
            const response = await Axios.get("/api/users")
            setUsers(response.data)
        }

    }, [])
    console.log(users);


    return (
        <div>
            <h1>Hello</h1>
            <p>react</p>
            {users.map(function (users) {
                return <UserCard name={users.name} phone={users.phone} />
            })}
        </div>
    )
}

function UserCard(props) {
    return <p>Hi, my name is {props.name} and my phone is {props.phone}</p>
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)