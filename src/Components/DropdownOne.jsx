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

const DropDownOne = () => (
    <Dropdown menu={{ items }}>
        <a onClick={e => e.preventDefault()}>
            <Space>
                <p className='text-white'>Features </p>
                <DownOutlined style={{ color: '#FFF' , fontSize: "12px" }} />
            </Space>
        </a>
    </Dropdown>
);
export default DropDownOne;