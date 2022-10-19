import React, { useEffect, useState } from 'react';
import {Table, Button, Modal, Space} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'antd-button-color/dist/css/style.css'; // or 'antd-button-color/dist/css/style.less'
import { useNavigate } from 'react-router-dom';


function Customers() {


    const navigate = useNavigate()


    const [customers, setcustomers] = useState([])

    const [loading, setloading] = useState(true)

    useEffect(() =>{

      getCustomers()
      
    }, [])

    const getCustomers = () => {

      axios.get('https://northwind.vercel.app/api/customers')
      .then(res=> {setcustomers(res.data); setloading(false);})


    }

    const deleteCustomerConfirm = (id) => {

      confirm(id)

    }

    const deleteCustomer = (id) => {

      axios.delete(`https://northwind.vercel.app/api/customers/${id}`)
      .then(res => {

        console.log("The customer is deleted!!")
        getCustomers();

      })

    }

    const confirm = (id) => {
      Modal.confirm({
        title: 'Confirm',
        icon: <ExclamationCircleOutlined />,
        content: 'Are you sure delete this customer?',
        okText: 'Yes',
        cancelText: 'No',

        onOk() {

          setloading(true)
          deleteCustomer(id)
        },

        onCancel() {

          console.log("Rejected!!")

        }
      });
    };

    const updateCustomer = (record) => {

      console.log(record)
      navigate(`/customers/update/${record.id}`, {replace: false, state:record})


    }

    const showDetails = (record) => {

      navigate(`/customers/detail/${record.id}`, {replace: false, state:record})

    }



    let columns = [

      {
        title: 'Id',
        dataIndex: 'id',
      },

      {
        title: 'Company Name',
        dataIndex: 'companyName',
        sorter: (a,b) => a.companyName.localeCompare(b.companyName)
        
      },

      {
        title: 'Contact Name',
        dataIndex: 'contactName',
        sorter: (a,b) => a.contactName.localeCompare(b.contactName)
      },

      {
        title: 'Contact Title',
        dataIndex: 'contactTitle',
        sorter: (a,b) => a.contactTitle.localeCompare(b.contactTitle)
      },
      {
        title: 'Row Operations',
        dataIndex: 'id',
        width: '23%',
        
        render: (id, record, index) => 
          <Space size={"middle"}>

          <Button type="success" 
          
          onClick={() => updateCustomer(record)
          }>Update</Button>
          
        
          <Button type="primary" danger onClick={()=> {

          deleteCustomerConfirm(id)
          console.log(id + " " + record+ " " + index)
          }}>Delete</Button>

        
          
          <Button type="primary" onClick={() => showDetails(record)} >Show Details</Button>


          </Space>



        }

    
    ]


  return (
    <>

      <Table rowKey={customers => customers.id}  columns={columns} dataSource={customers} loading={loading} >



      </Table>
    
    
    </>
  )
}

export default Customers