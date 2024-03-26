/*
import axios from "axios";
import { Await } from "react-router-dom";

const LoginForm = () => {


    const login = async (event) => {
        event.preventDefault();

        const user = 'manolo@test.es'
        const password = 'Upgrade1234!'
        const url = 'https://node-vergel.vercel.app/user/login'

        try {
            axios.post(url, {
                user, password
            })
            .then((res) => console.log(res.data));
            
            )
    //const token = res.data.token;
    //sessionStorage.setItem(
    //    'token', token
    // )
        } catch (error) {
            console.log(error);

        }
    }


  return (
    <button onClick={login}>Login</button>
  )
};

export default LoginForm
*/



// Codigo Hecho
import axios from "axios";
import { useState } from "react";
 
const LoginForm = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

  const login = (event) => {
    event.preventDefault();
 
    /* const user = "manolo@test.es";
    const password = "Upgrade1234!"; */
 
    const url = "https://node-vergel.vercel.app/user/login";
 
    try {
      axios
        .post(url, {
          user,
          password,
        })
        .then((res) => sessionStorage.setItem("token", res.data.data.token));
     
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
 
  return (
    <>
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type="text" value={user} onChange={(event) => setUser(event.target.value)} placeholder="Introduce tu correo" required></input>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Introduce la contraseña" required></input>
                <button type="submit">Login</button>
            </form>
            {error && <div>Ha ocurrido un error</div>}
        </div>

    </>
  )
};
 
export default LoginForm;