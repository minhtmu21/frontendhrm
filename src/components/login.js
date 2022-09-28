import { useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { analytics } from "./firebase-config.js"

function Login(){
    const [registerEmail,setRegisterEmail] = useState("")
    const [registerPassword,setRegisterPassword] = useState("")
    const [loginEmail,setLoginEmail] = useState("")
    const [loginPassword,setLoginPassword] = useState("")

    const [user, setUser] = useState({})
    onAuthStateChanged(getAuth(), (currentUser) => setUser(currentUser))

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(getAuth(), registerEmail, registerPassword)
            console.log(user);
        } catch (error) {
            console.log(error.message)
        }

    }
    const login = async () => {
        try {
            user = await signInWithEmailAndPassword(getAuth(), loginEmail, loginPassword)
            console.log(user);
        } catch (error) {
            console.log(error);
        }


    }
    const logout = async () => {
        await signOut(getAuth())
    }

    return (
        <div>
            <div>
                <h3>Đăng ký</h3>
                <input onChange={(event => setRegisterEmail(event.target.value))}></input>
                <input onChange={(event => setRegisterPassword(event.target.value))}></input>
                <button onClick={register} className="btn btn-primary">Đăng ký</button>
            </div>
            <div>
                <h3>Đăng nhập</h3>
                <input onChange={(event => setLoginEmail(event.target.value))}></input>
                <input onChange={(event => setLoginPassword(event.target.value))}></input>
                <button onClick={login} className="btn btn-primary">Đăng nhập</button>
            </div>
            <div>
                <h3>Đăng xuất</h3>
                <div>Thông tin đăng nhập: {user?.email}</div>
                <button type="button" className="btn btn-primary" onClick={logout}>Đăng xuất</button>
            </div>
        </div>
        )
}

export default Login;