import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Avatar, Button, Layout } from "antd";

import { useState } from "react";
import Sidebar from "../common/sidebar.page";
const { Header, Sider, Content, Footer } = Layout;

function AdminPage() {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <Layout style={{
                marginLeft: collapsed ? '80px' : '250px',  // Match this with your Sider width
                minHeight: "100vh",
                transition: 'margin-left 0.2s',  // Smooth transition when collapsing
                backgroundColor: "#eaeef3"
            }}>
                <Header
                    style={{
                        padding: 0,
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: "16px", width: 64, height: 64 }}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: "24px",
                            gap: "16px",
                        }}
                    >
                        <Avatar icon={<UserOutlined />} />
                        <Button type="text" icon={<LogoutOutlined />}>
                            Logout
                        </Button>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: "white",
                        borderRadius: "10px",
                        overflow: "initial",
                    }}
                >
                    {/* {children} */}
                    here will be children
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    School Management System ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        </Layout>
    );
}

export default AdminPage;
