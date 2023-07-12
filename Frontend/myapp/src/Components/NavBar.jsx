import React from 'react';
import Logo from '../Assets/Flipkart.PNG'
import {LogoutOutlined,ShoppingCartOutlined,ProfileOutlined, UnorderedListOutlined} from "@ant-design/icons"
import { Button, Input,Select} from 'antd';
import {useDispatch} from 'react-redux';
import { removeAuthentication } from '../Features/AuthSlice';
import {useNavigate} from 'react-router-dom'
const NavBar = (props) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const onChange = (value) => {
    props.setCategory(value)
  };
  const onSearchCategory = (value) => {
    props.setCategory(value)
  };
  const logout=()=>{
   dispatch(removeAuthentication());
   navigate("/login")
  }
  const GoOnCart=()=>{
    navigate("/cart")
  }
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt="missing"/>
        </div>
        <div className='searchBar'>
        <Search
        style={{width:"300px"}}
      placeholder="Search For Items"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      onChange={(e)=>props.setSearchItem(e.target.value)}
    />
    </div>
    <div className='logoutButton'>
      <Button icon={<LogoutOutlined />} style={{height:"40px",fontSize:"20px",fontWeight:"600"}} onClick={()=>logout()}>Logout</Button>
    </div>
   <div className='profile'>
    <Button icon={<ProfileOutlined />} style={{height:"40px",fontSize:"20px",fontWeight:"600"}}>Profile</Button>
    </div>
    <div className='cart'>
    <Button icon={<ShoppingCartOutlined />} style={{height:"40px",fontSize:"20px",fontWeight:"600"}} onClick={()=>GoOnCart()}>Cart</Button>
    </div>
    <div className='myOrders'>
    <Button icon={<UnorderedListOutlined />} style={{height:"40px",fontSize:"20px",fontWeight:"600"}}>Orders</Button>
    </div>
    <div className="category">
    <Select
    showSearch
    placeholder="Select a Category"
    optionFilterProp="children"
    onChange={onChange}
    onSearchCategory={onSearchCategory}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Mobile',
        label: 'Mobile',
      },
      {
        value: 'Fashion',
        label: 'Fashion',
      },
      {
        value: 'Electronics',
        label: 'Electronics',
      },
      {
        value: 'Beauty',
        label: 'Beauty',
      },
    ]}
  />
    </div>
    </div>
  );
}

export default NavBar;
