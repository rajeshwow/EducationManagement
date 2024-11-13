

import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataTable = () => {
    const navigate = useNavigate()

    const [studentData, setstudentData] = useState([] as any)


    const getStudentData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/students', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.data) {
                setstudentData(response.data)
            }
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
        }
    }

    useEffect(() => {
        !studentData?.length && getStudentData()
    }, [])

    // Table handling
    const handleChange = (pagination: any, filters: any, sorter: any) => {

    };

    // Clear all filters and sorters
    const clearAll = () => {

    };



    // Column definitions
    const columns = [
        {
            title: 'Roll no',
            dataIndex: 'rollNo',
            key: 'rollNo',
            // ...getColumnSearchProps('rollNo'),
            // sorter: (a: any, b: any) => a.name.length - b.name.length,
            // // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // ...getColumnSearchProps('name'),
            // sorter: (a: any, b: any) => a.name.length - b.name.length,
            // // sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        },
        {
            title: 'Class',
            dataIndex: 'age',
            key: 'age',
            // sorter: (a: any, b: any) => a.age - b.age,
            // // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            // ...getColumnSearchProps('address'),
            // filters: [
            //     { text: 'London', value: 'London' },
            //     { text: 'New York', value: 'New York' },
            // ],
            // filteredValue: filteredInfo.address || null,
            // onFilter: (value: any, record: any) => record.address.includes(value),
        },
        {
            title: 'Fees',
            key: 'fees',
            dataIndex: 'fees',
            // render: (tags: any) => (
            //     <>
            //         {tags?.map((tag: any) => (
            //             <Tag color={tag === 'done' ? 'green' : tag === 'partial' ? 'blue' : 'red'} key={tag}>
            //                 {tag.toUpperCase()}
            //             </Tag>
            //         ))}
            //     </>
            // ),
        },
    ];

    return (
        <div>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
                <Button type="primary" onClick={() => { navigate('/admin/people/students/add') }} >Create Student</Button>

            </Space>
            <Table
                columns={columns}
                dataSource={studentData}
                onChange={handleChange}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default DataTable;