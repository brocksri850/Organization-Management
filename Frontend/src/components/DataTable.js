import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import Link for routing
import { getOrganizationAndUserData } from '../services/api';

const DataTable = () => {
  // const route = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getOrganizationAndUserData();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error.message);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <h2>Users</h2>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Organization</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.organization.name}</td>
              <td>
                <div onClick={() => navigate('/edituser', {
                  state: {
                    edit_id: item._id
                  }
                })}> Edit </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default DataTable;
