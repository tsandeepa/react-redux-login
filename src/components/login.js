import { useDispatch } from "react-redux";
import { login } from "../features/user";

const Login = () => {

    const dispatch = useDispatch()

    return ( 
        <div>
            <h3>Login</h3>
            <button onClick={()=>{dispatch(
                login(
                    {
                        name:"Sandeepa",
                        age:20,
                        email:"sandeepa@email.com"
                    }
                )
            )}}>Login</button>
        </div>
     );
}
 
export default Login;