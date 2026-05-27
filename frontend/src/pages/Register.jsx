import { useState } from "react";
import axios from "axios";
function Register() {
  const [form, setForm] = useState({});
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/register", form, { withCredentials: true });
    alert(res.data.message);
  };
  return (
    <div className="container mt-3">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input name="name" onChange={handleChange} className="form-control mb-2" placeholder="Name" />
        <input name="age" type="number" onChange={handleChange} className="form-control mb-2" placeholder="Age" />
        <input name="mobile" type="tel" onChange={handleChange} className="form-control mb-2" placeholder="Mobile no" />
        <select name="gender" required onChange={handleChange} className="form-control mb-2">
          <option value={""}>Select Gender</option>
          <option value={"male"}>Male</option>
          <option value={"female"}>female</option>
          </select>
        <textarea name="address" onChange={handleChange} className="form-control mb-2" placeholder="Address"></textarea>
        <input name="email" onChange={handleChange} className="form-control mb-2" placeholder="Email" />
        <input name="password" onChange={handleChange} type="password" className="form-control mb-2" placeholder="Password" />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
export default Register; 