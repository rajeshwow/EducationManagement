// src/components/LoadingSpinner.tsx
import { Spin } from 'antd';
import React from 'react';

const LoadingSpinner = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <Spin size="large" />
    </div>
);
export default LoadingSpinner