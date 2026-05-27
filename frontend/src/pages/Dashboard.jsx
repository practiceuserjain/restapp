import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";

function Dashboard() {

  const [users, setUsers] = useState([]);

  const load = useCallback(async () => {
    const res = await axios.get("http://localhost:5000/api/users", { withCredentials: true });
    setUsers(res.data);
  }, []);

  useEffect(() => {
    load();
  }, []);

  const del = useCallback(async (id) => {
    await axios.delete(`http://localhost:5000/api/user/${id}`, { withCredentials: true });
    load();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Tanishq's Dashboard</h2>
      <h2>Hello world..</h2>
      <h2>My Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatum odio voluptatibus ipsa illum ea rem repudiandae sequi 
        ut animi fugiat accusamus incidunt maxime id, nisi quisquam autem quae vel nesciunt?</p>
      <h2>{users[0].name}</h2>

      <table className="table">
        <tbody>
          {users.map(u => (
            <tr key={u._id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn btn-danger" onClick={() => del(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
export default Dashboard;
