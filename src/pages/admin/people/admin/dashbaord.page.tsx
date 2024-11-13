import {
    BookOutlined,
    CalendarOutlined,
    DollarOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const { Title } = Typography;

const DashboardPage = () => {
    // Sample data - replace with actual data
    const attendanceData = [
        { month: 'Jan', teachers: 95, students: 92 },
        { month: 'Feb', teachers: 98, students: 90 },
        { month: 'Mar', teachers: 96, students: 93 },
        { month: 'Apr', teachers: 97, students: 91 },
    ];

    const feesData = [
        { month: 'Jan', amount: 150000 },
        { month: 'Feb', amount: 180000 },
        { month: 'Mar', amount: 160000 },
        { month: 'Apr', amount: 200000 },
    ];

    const topStudents = {
        '8th': [
            { name: 'Aarav', marks: 95 },
            { name: 'Priya', marks: 92 },
            { name: 'Rahul', marks: 90 },
        ],
        '10th': [
            { name: 'Zara', marks: 98 },
            { name: 'Dev', marks: 96 },
            { name: 'Ananya', marks: 94 },
        ],
        '12th': [
            { name: 'Maya', marks: 97 },
            { name: 'Arjun', marks: 95 },
            { name: 'Sara', marks: 93 },
        ],
    };

    const events = [
        { date: '2024-11-14', title: 'Children\'s Day Celebration' },
        { date: '2024-11-20', title: 'Parent-Teacher Meeting' },
        { date: '2024-11-25', title: 'Annual Sports Day' },
        { date: '2024-12-25', title: 'Christmas Holiday' },
    ];

    const quickStats = [
        { title: 'Total Students', value: '1,250', icon: <UserOutlined /> },
        { title: 'Total Teachers', value: '75', icon: <BookOutlined /> },
        { title: 'Monthly Revenue', value: '₹2.5L', icon: <DollarOutlined /> },
        { title: 'Upcoming Events', value: '4', icon: <CalendarOutlined /> },
    ];

    return (
        <div style={{ padding: 24 }}>
            {/* Quick Stats */}
            <Row gutter={[16, 16]}>
                {quickStats.map((stat, index) => (
                    <Col xs={24} sm={12} lg={6} key={index}>
                        <Card hoverable>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ fontSize: 24, color: '#1890ff', marginRight: 16 }}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{stat.title}</div>
                                    <div style={{ fontSize: 24, fontWeight: 'bold' }}>{stat.value}</div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row gutter={20}>
                <Col xs={24} sm={12} lg={12} >
                    {/* Attendance Chart */}
                    <Card style={{ marginTop: 16 }}>
                        <Title level={4}>Attendance Overview</Title>
                        <div style={{ height: 320 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={attendanceData}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="teachers" stroke="#1890ff" name="Teachers" />
                                    <Line type="monotone" dataKey="students" stroke="#52c41a" name="Students" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={12} >
                    {/* Fees Collection */}
                    <Card style={{ marginTop: 16 }}>
                        <Title level={4}>Fees Collection</Title>
                        <div style={{ height: 320 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={feesData}>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="amount" fill="#1890ff" name="Amount (₹)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Col>
            </Row>





            {/* Top Students */}
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
                {Object.entries(topStudents).map(([grade, students]) => (
                    <Col xs={24} md={8} key={grade}>
                        <Card title={`Top ${grade} Students`}>
                            {students.map((student, index) => (
                                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: '50%',
                                            background: '#e6f7ff',
                                            color: '#1890ff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 12
                                        }}>
                                            {index + 1}
                                        </div>
                                        <span>{student.name}</span>
                                    </div>
                                    <span style={{ fontWeight: 'bold' }}>{student.marks}%</span>
                                </div>
                            ))}
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Upcoming Events */}
            <Card style={{ marginTop: 16 }}>
                <Title level={4}>Upcoming Events</Title>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 12,
                                background: '#f5f5f5',
                                borderRadius: 8
                            }}
                        >
                            <CalendarOutlined style={{ fontSize: 16, color: '#1890ff', marginRight: 12 }} />
                            <div>
                                <div style={{ fontWeight: 'medium' }}>{event.title}</div>
                                <div style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.45)' }}>{event.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default DashboardPage;