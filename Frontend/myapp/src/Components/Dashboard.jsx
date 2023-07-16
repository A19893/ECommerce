import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
const Dashboard = () => {
    const navigate=useNavigate();
 const uploadProd=()=>{
    navigate("/upload")
 }
  return (
    <div>
        <NavBar/>
        <div className='dashBoard'>
            <div className="cards">
                <div className="addProduct item" onClick={()=>uploadProd("add")}>
                    <img src="https://cdn-icons-png.flaticon.com/512/10608/10608872.png" alt="add product" />
                    <h2>Add Products</h2>
                </div>
                <div className="ViewProduct item" onClick={()=>navigate('/viewProducts')}>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png" alt="add product" />
                    <h2>View Products</h2>
                </div>
                <div className="Orders item" onClick={()=>navigate('/viewOrders')}>
                    <img src="https://icon-library.com/images/orders-icon/orders-icon-12.jpg" alt="add product" />
                    <h2>View Orders</h2>
                </div>
            </div>
    </div>
    </div>
  );
}

export default Dashboard;
