import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                AI Receptionist
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Smart CRM
            </a>
        ),
        key: '1',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Bussiness Phone
            </a>
        ),
        key: '2',
    }
];

const DropDownForm = () => (
    <Dropdown menu={{ items }}>
        <a onClick={e => e.preventDefault()}>
            <Space>
                <div className='p-3 px-10 rounded-full bg-black'>
                    <h1 className='text-4xl text-primary'>Select an Industry</h1>
                </div>
                <DownOutlined style={{ color: '#FFF', fontSize: "12px" }} />
            </Space>
        </a>
    </Dropdown>
);
export default DropDownForm;