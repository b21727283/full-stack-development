import { Descriptions } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const CustomerDetail = () => {

  const location = useLocation()

  const [data, setdata] = useState({
    
      id: "None",
      companyName: "None",
      contactName: "None",
      contactTitle: "None",
      address: {
          street: "None",
          city: "None",
          region: "None",
          postalCode: "None",
          country: "None",
          phone: "None"
      }
  
  })

  useEffect(() => {
    setdata(location.state)
  }, [])

  
  

  
  return (

    <Descriptions title="User Info" layout="horizontal" style={{marginLeft: '10vw'}}>
    <Descriptions.Item label="Company Name">{data.companyName}</Descriptions.Item>
    <Descriptions.Item label="Contact Name">{data.contactName}</Descriptions.Item>
    <Descriptions.Item label="Contact Title">{data.contactTitle}</Descriptions.Item>
    <Descriptions.Item label="Address" span={3}>
      {"Street: " + data.address.street + " / " +"Region: " + data.address.region + " / " +
      "City: " + data.address.city + " / " + "Country: " + data.address.country + " / " +
      "Postal Code: " + data.address.postalCode}
    </Descriptions.Item>
    <Descriptions.Item label="Phone">{data.address.phone}</Descriptions.Item>
   
    </Descriptions>
    
  );


}



export default CustomerDetail;