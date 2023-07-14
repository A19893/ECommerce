import React,{useState} from 'react';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { updateAddress } from '../Services/updateUserAddress.service';
import { selectAddress } from '../Features/AuthSlice';
import {Country,State} from 'country-state-city'
import { CloseOutlined } from "@ant-design/icons";
import { createOrder } from '../Services/createOrder.service';
const Address = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const orderItems=useSelector((state)=>state.cart.CartItems);
    const user=useSelector((state)=>state.authentication.loggedinUserId);
    // const [Address,setAddress]=useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);
    const loggedInUserId=useSelector((state)=>state.authentication.loggedinUserId);
    const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [states, setStates] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    await updateAddress(loggedInUserId,Address);
    const shippingInfo={address,country,states,pincode,phoneNumber};
   const response= await createOrder(shippingInfo,orderItems,user);
   console.log('-----order---',response);
    dispatch(selectAddress(Address));
    setAddress('');
    navigate("/buy")
    console.log(address,country,states,pincode,phoneNumber);
    // Handle form submission logic here
  };
      const handleCancel = () => {
        navigate("/cart")
        setIsModalOpen(false);
      };
  return (
    <Modal title="Enter Your Address" closeIcon={<CloseOutlined onClick={handleCancel}/>} open={isModalOpen} footer={null} >
        <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="address">Address:</label>
      <input
      style={{padding:'15px'}}
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <select value={country} onChange={(e) => setCountry(e.target.value)} menuPlacement='top' required className='country'  >
        <option value="">Country</option>
          {
            Country && Country.getAllCountries().map((item)=>{
              return(
             <option key={item.isoCode} value={item.isoCode}>
              {item.name}
             </option>
              )
            })
          }
      </select>
      <br/>
      {
      country && (
        <select value={states} onChange={(e) => setStates(e.target.value)} menuPlacement='top' required className='country'  >
        <option value="">State</option>
          {
            State && State.getStatesOfCountry(country).map((item)=>{
              return(
             <option key={item.isoCode} value={item.isoCode}>
              {item.name}
             </option>
              )
            })
          }
      </select>
      )
      }
      <label htmlFor="pincode">Pincode:</label>
      <input
       style={{padding:'15px'}}
        type="text"
        id="pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        required
      />

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
       style={{padding:'15px'}}
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />

      <button type="submit"  style={{padding:'15px',fontSize:'20px'}}>Buy Now</button>
    </form>
    </Modal>
  );
}

export default Address;
