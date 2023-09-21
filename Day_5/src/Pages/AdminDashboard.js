// src/components/Dashboard.js
import React from 'react';
import { logout} from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Dashboard = () => {
  const nav=useNavigate()
  const dispatch=useDispatch()
  const HandleLogout=()=>{
    dispatch(logout());
      nav("/");
  }
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">View Users</h5>
              <p className="card-text">View and manage user accounts.</p>
              <button href="" className="btn btn-primary">Go to Users</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Track Orders</h5>
              <p className="card-text">Track and manage customer orders.</p>
              <button href="" className="btn btn-primary">Go to Orders</button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className='row'>
      <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Products</h5>
              <p className="card-text">Add, edit, or delete products in your inventory.</p>
              <button href="" className="btn btn-primary">Add Product</button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
        <button className="btn btn-primary" onClick={HandleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
