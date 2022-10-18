import React, { useEffect, useState } from 'react';
import {Table, Button, Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

function Customers() {


    const [customers, setcustomers] = useState([])

    const [loading, setloading] = useState(true)

    useEffect(() =>{

      axios.get('https://northwind.vercel.app/api/customers')
      .then(res=> {setcustomers(res.data); setloading(false);})
      


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



    let columns = [

      {
        title: 'Id',
        dataIndex: 'id'
      },

      {
        title: 'Company Name',
        dataIndex: 'companyName',
        sorter: (a,b) => a.companyName.localeCompare(b.companyName)
        
      },

      {
        title: 'Contact Name',
        dataIndex: 'contactName'
      },

      {
        title: 'Contact Title',
        dataIndex: 'contactTitle'
      },
      {
        title: 'Delete',
        dataIndex: 'id',
        render: (id, record, index) => <Button danger onClick={()=> {

          deleteCustomerConfirm(id)
          console.log(id + " " + record.id + " " + index)
        }}>Delete</Button>
      }

    ]


  return (
    <>

      <Table columns={columns} dataSource={customers} loading={loading}>



      </Table>
    
    
    </>
  )
}

export default Customers