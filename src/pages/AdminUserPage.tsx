import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { User } from "../types/User";

const AdminUserPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => console.log(err));
  }, []);

  console.log(users);

  return (
    <div>
      <Header btnText={"Log Out"} />
      {users ? (
        <div>
          <h3>All Members</h3>
          <table>
            <thead>
              <tr>
                <th>UserName</th>
                <th>User ID</th>
                <th>Booked activities</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.id}</td>
                  <td>{user.activities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default AdminUserPage;
