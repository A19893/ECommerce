import React, { useState } from "react";
import Logo from "../Assets/Flipkart.PNG";
import {
  LogoutOutlined,
  ShoppingCartOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Input, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthentication } from "../Features/AuthSlice";
import { removeOrder } from "../Features/OrderSlice";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { removeReduxCart } from "../Features/CartSlice";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { removeProducts } from "../Features/ProductSlice";
import Orders from "./Orders";
const NavBar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const userRole = useSelector(
    (state) => state.authentication.loggedInUserRole
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate("/home");
  };
  const onChange = (value) => {
    props.setCategory(value);
  };
  const onSearchCategory = (value) => {
    props.setCategory(value);
  };
  const logout = () => {
    dispatch(removeReduxCart());
    dispatch(removeAuthentication());
    dispatch(removeOrder());
    dispatch(removeProducts());
    navigate("/login");
  };
  const GoOnCart = () => {
    navigate("/cart");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="missing" />
      </div>
      <div className="searchBar">
        {location.pathname === "/home" && (
          <Search
            style={{ width: "300px" }}
            placeholder="Search For Items"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            onChange={(e) => props.setSearchItem(e.target.value)}
          />
        )}
      </div>

      {location.pathname !== "/home" && (
        <div className="logoutButton">
          <Button
            icon={<HomeIcon />}
            style={{ height: "40px", fontSize: "20px", fontWeight: "600" }}
            onClick={() => navigate("/home")}
          >
            Home
          </Button>
        </div>
      )}
      <div className="logoutButton">
        <Button
          icon={<LogoutOutlined />}
          style={{ height: "40px", fontSize: "20px", fontWeight: "600" }}
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
      {userRole !== "User" && location.pathname !== "/dashBoard" && (
        <div className="dashBoardButton">
          <Button
            icon={<DashboardOutlinedIcon />}
            style={{ height: "40px", fontSize: "20px", fontWeight: "600" }}
            onClick={() => navigate("/dashBoard")}
          >
            Dashboard
          </Button>
        </div>
      )}

      {location.pathname !== "/profile" && (
        <div className="profile">
          <Button
            icon={<ProfileOutlined />}
            style={{ height: "40px", fontSize: "20px", fontWeight: "600" }}
            onClick={() => navigate("/profile")}
          >
            Profile
          </Button>
        </div>
      )}
      {location.pathname !== "/cart" && (
        <div className="cart">
          {" "}
          <Button
            icon={<ShoppingCartOutlined />}
            style={{ height: "40px", fontSize: "20px", fontWeight: "600" }}
            onClick={() => GoOnCart()}
          >
            Cart
          </Button>
        </div>
      )}
      <div className="myOrders">
        <Button
          icon={<UnorderedListOutlined />}
          style={{ height: "40px", fontSize: "20px", fontWeight: "600" }}
          onClick={() => setIsModalOpen(true)}
        >
          Orders
        </Button>
      </div>
      <div className="category">
        <Select
          style={{ width: "150px", padding: "5px" }}
          showSearch
          placeholder="Select a Category"
          optionFilterProp="children"
          onChange={onChange}
          onSearchCategory={onSearchCategory}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: "not selected",
              label: "Category",
            },
            {
              value: "Appliances",
              label: "Appliances",
            },
            {
              value: "Fashion",
              label: "Fashion",
            },
            {
              value: "Electronics",
              label: "Electronics",
            },
            {
              value: "Beauty",
              label: "Beauty",
            },
          ]}
        />
      </div>
      <Modal
        width={700}
        title="Your Orders"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Orders />
      </Modal>
    </div>
  );
};

export default NavBar;
