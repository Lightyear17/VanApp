
import { useLoaderData, useNavigate, Form, redirect,  useActionData } from "react-router-dom";
import { loginUser } from "./api";
import "./Login.css";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTO") || '/host'
      try{
        const data = await loginUser({ email, password });
        localStorage.setItem("loggedin", true)
      return redirect(pathname)
      

      }catch(err){
        // console.log(err.message)
          return err.message

      }
}

export default function Login() {
  
  
  const message = useLoaderData();
  const nav = useNavigate()
  const errorMessage = useActionData();
  // console.log(errorMessage)

  

  

  return (
    <div className="login-container">
      <h1 className="login-text">Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {errorMessage && <h3 className="red">{errorMessage}</h3>}
      <Form className="login-form" method="post" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={nav.state === "subbmitting"}>
          
          {nav.state === "submitting" ? "Logging in..." : "Log in"}
          
        </button>
      </Form>
    </div>
  );
}
