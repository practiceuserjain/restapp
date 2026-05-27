import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";

function Login() {




  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = useCallback(
    async e => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/login", form, { withCredentials: true });

    if (res.data.user) {
      localStorage.setItem("login", true);
      navigate("/dashboard");
    } else {
      alert(res.data.message);
    }
  },[form])
  



  return (
    <div className="container mt-3">

      <h2>Login</h2>

      <form onSubmit={submit}>
        <input name="email" onChange={change} className="form-control mb-2" />
        <input name="password" type="password" onChange={change} className="form-control mb-2" />

        <button className="btn btn-success">Login</button>
      </form>

    </div>
  );
}

export default Login;
