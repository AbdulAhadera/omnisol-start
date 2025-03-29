import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                Industries
            </a>
        ),
        key: '0',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Blog
            </a>
        ),
        key: '1',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Affiliate Program
            </a>
        ),
        key: '2',
    },
    {
        type: 'divider',
    },
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Pricing
            </a>
        ),
        key: '3',
    },
];

const DropDownTwo = () => (
    <Dropdown menu={{ items }}>
        <a onClick={e => e.preventDefault()}>
            <Space>
                <p className='text-white'>Resources </p>
                <DownOutlined style={{ color: '#FFF', fontSize: "12px" }} />
            </Space>
        </a>
    </Dropdown>
);
export default DropDownTwo;