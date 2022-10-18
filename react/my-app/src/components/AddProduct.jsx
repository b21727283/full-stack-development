import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Form, Col, Row, Select, Input, Button, Checkbox, message} from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useForm } from 'antd/es/form/Form'



const {Option} = Select

function AddProduct() {

    const [categories, setcategories] = useState([])

    const [suppliers, setsuppliers] = useState([])

    const [form] = Form.useForm();



    useEffect(() => {
      
        axios.get('https://northwind.vercel.app/api/categories')
        .then(res =>{
            setcategories(res.data)
        })


        axios.get('https://northwind.vercel.app/api/suppliers')
        .then(res =>{
            setsuppliers(res.data)
        })


    }, [])


    const submit = (values) => {


        console.log('VALUES', values)

        let data = {
            name: "Mozzarella di Giovanni",
            unitPrice: 60
        }

        axios.put('https://northwind.vercel.app/api/products', data)
        .then(res =>{

            console.log('SUCCESS')
            form.resetFields()
            message.success('The product has been successfully added!')

        } )


    }
    




  return (
    
    <Form

        onFinish={submit}
        form={form}
    
    >
        

        <Row gutter={12}>


            <Col span={12}>

                <FormItem
                name='categoryId'
                label='Categories'
                rules={[
                    {
                      required: true,
                      message: 'Please select a category!',
                    }
                  ]}>

                <Select
                defaultValue={'Please select one category'}>
                    {

                        categories.map((item) => {

                            return <Option key={item.id} value={item.id}>{item.name}</Option>
                        })

                    }


                </Select>

                </FormItem>

                
            
            
            </Col>

            <Col span={12}>

                <FormItem
                name='supplierId'
                label='Supplier'>

                <Select
                defaultValue={'Please select one supplier'}>
                    {

                        suppliers.map((item) => {

                            return <Option key={item.id} value={item.id}>{item.companyName}</Option>
                        })

                    }


                </Select>

                </FormItem>

                
            
            
            </Col>







        </Row>

        <Row gutter={12}>

            <Col span={12}>

                <FormItem
                    label='Product Name'
                    name='productName'
                    rules={[
                        {
                          required: true,
                          message: 'Please enter a product name!',
                        }
                      ]}
                
                >

                    <Input/>


                </FormItem>
            
            </Col>

            <Col span={12}>

                <FormItem
                    label='Unit Price'
                    name='unitPrice'
                
                >

                    <Input/>


                </FormItem>


            </Col>



        </Row>

        <Row>

            <Col>

                    <FormItem
                        name='discontinued'
                        valuePropName='checked'>

                        <Checkbox>


                            Discontinued
                        </Checkbox>



                    </FormItem>
            
            
            
            </Col>


    

        </Row>


        <Row>

            <Button type='primary' htmlType='submit'>Add</Button>

        </Row>







    </Form>
  )
}

export default AddProduct