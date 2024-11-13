import {
    AppstoreOutlined,
    BankOutlined,
    BookOutlined,
    CarryOutOutlined,
    ClockCircleOutlined,
    DashboardOutlined,
    DollarOutlined,
    FileTextOutlined,
    IdcardOutlined,
    MailOutlined,
    ProfileOutlined,
    ReadOutlined,
    SettingOutlined,
    SolutionOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { ROUTE_ACADEMIC_YEAR, ROUTE_ADMIN_DASHBOARD, ROUTE_ANNOUNCEMENTS, ROUTE_ATTENDANCE, ROUTE_ATTENDANCE_REPORTS, ROUTE_CLASS_LIST, ROUTE_COLLECT_FEES, ROUTE_EXAM_REPORTS, ROUTE_EXAMS, ROUTE_EXPENSES, ROUTE_FINANCIAL_REPORTS, ROUTE_LEAVE_APPLICATIONS, ROUTE_MESSAGING, ROUTE_NOTICE_BOARD, ROUTE_PARENT_LIST, ROUTE_ROLE_PERMISSIONS, ROUTE_SALARY, ROUTE_STUDENT_LIST, ROUTE_STUDY_MATERIALS, ROUTE_SUBJECT_LIST, ROUTE_SYSTEM_SETTINGS, ROUTE_TEACHER_LIST, ROUTE_USER_MANAGEMENT } from "../../components/routes";

import { useNavigate } from "react-router-dom";
import { ROUTE_SCHOOL_PROFILE } from "../../components/routes";
const { Header, Sider, Content, Footer } = Layout;
const menuItems = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: 'Dashboard',
        route: ROUTE_ADMIN_DASHBOARD
    },
    {
        key: 'academic',
        icon: <BookOutlined />,
        label: 'Academic',
        children: [
            {
                key: 'classes',
                icon: <BankOutlined />,
                label: 'Classes',
                route: ROUTE_CLASS_LIST
                // children: [
                //     {
                //         key: 'class-list',
                //         label: 'Class List',
                // route: ROUTE_CLASS_LIST
                //     },
                //     {
                //         key: 'class-schedule',
                //         label: 'Class Schedule',
                //         route: ROUTE_CLASS_SCHEDULE
                //     },
                //     {
                //         key: 'class-attendance',
                //         label: 'Class Attendance',
                //         route: ROUTE_CLASS_ATTENDANCE
                //     }
                // ]
            },
            {
                key: 'subjects',
                icon: <ReadOutlined />,
                label: 'Subjects',
                route: ROUTE_SUBJECT_LIST
                // children: [
                //     {
                //         key: 'subject-list',
                //         label: 'Subject List',
                //         route: ROUTE_SUBJECT_LIST
                //     },
                //     {
                //         key: 'subject-assignment',
                //         label: 'Subject Assignment',
                //         route: ROUTE_SUBJECT_ASSIGNMENT
                //     },
                //     {
                //         key: 'syllabus',
                //         label: 'Syllabus',
                //         route: ROUTE_SYLLABUS
                //     }
                // ]
            },
            {
                key: 'exams',
                icon: <FileTextOutlined />,
                label: 'Exams',
                route: ROUTE_EXAMS
                // children: [
                //     {
                //         key: 'exam-schedule',
                //         label: 'Exam Schedule',
                //         route: ROUTE_EXAM_SCHEDULE
                //     },
                //     {
                //         key: 'results',
                //         label: 'Results',
                //         route: ROUTE_EXAM_RESULTS
                //     },
                //     {
                //         key: 'grade-system',
                //         label: 'Grade System',
                //         route: ROUTE_GRADE_SYSTEM
                //     }
                // ]
            },
            {
                key: 'materials',
                icon: <ProfileOutlined />,
                label: 'Study Materials',
                route: ROUTE_STUDY_MATERIALS
            }
        ]
    },
    {
        key: 'people',
        icon: <TeamOutlined />,
        label: 'People',
        children: [
            {
                key: 'students',
                icon: <UserOutlined />,
                label: 'Students',
                route: ROUTE_STUDENT_LIST

            },
            {
                key: 'teachers',
                icon: <IdcardOutlined />,
                label: 'Teachers',
                route: ROUTE_TEACHER_LIST

            },
            {
                key: 'parents',
                icon: <TeamOutlined />,
                label: 'Parents',
                route: ROUTE_PARENT_LIST

            }
        ]
    },
    {
        key: 'admin',
        icon: <SolutionOutlined />,
        label: 'Administration',
        children: [
            {
                key: 'attendance',
                icon: <ClockCircleOutlined />,
                label: 'Attendance',
                route: ROUTE_ATTENDANCE
                // children: [
                //     {
                //         key: 'student-attendance',
                //         label: 'Student Attendance',
                //         route: ROUTE_STUDENT_ATTENDANCE
                //     },
                //     {
                //         key: 'teacher-attendance',
                //         label: 'Teacher Attendance',
                //         route: ROUTE_TEACHER_ATTENDANCE
                //     },
                //     {
                //         key: 'staff-attendance',
                //         label: 'Staff Attendance',
                //         route: ROUTE_STAFF_ATTENDANCE
                //     }
                // ]
            },
            {
                key: 'leave',
                icon: <CarryOutOutlined />,
                label: 'Leave Management',
                route: ROUTE_LEAVE_APPLICATIONS

                // children: [
                //     {
                //         key: 'leave-applications',
                //         label: 'Leave Applications',
                //         route: ROUTE_LEAVE_APPLICATIONS
                //     },
                //     {
                //         key: 'leave-types',
                //         label: 'Leave Types',
                //         route: ROUTE_LEAVE_TYPES
                //     }
                // ]
            },
            {
                key: 'communications',
                icon: <MailOutlined />,
                label: 'Communications',
                children: [
                    {
                        key: 'announcements',
                        label: 'Announcements',
                        route: ROUTE_ANNOUNCEMENTS
                    },
                    {
                        key: 'messaging',
                        label: 'Email/SMS',
                        route: ROUTE_MESSAGING
                    },
                    {
                        key: 'notice-board',
                        label: 'Notice Board',
                        route: ROUTE_NOTICE_BOARD
                    }
                ]
            }
        ]
    },
    {
        key: 'finance',
        icon: <DollarOutlined />,
        label: 'Finance',
        children: [
            {
                key: 'fees',
                // icon: <DollarOutlined />,
                label: 'Fees',
                route: ROUTE_COLLECT_FEES
                // children: [
                //     {
                //         key: 'collect-fees',
                //         label: 'Collect Fees',
                //         route: ROUTE_COLLECT_FEES
                //     },
                //     {
                //         key: 'fee-types',
                //         label: 'Fee Types',
                //         route: ROUTE_FEE_TYPES
                //     },
                //     {
                //         key: 'fee-reports',
                //         label: 'Fee Reports',
                //         route: ROUTE_FEE_REPORTS
                //     }
                // ]
            },
            {
                key: 'expenses',
                label: 'Expenses',
                route: ROUTE_EXPENSES
            },
            {
                key: 'salary',
                label: 'Salary',
                route: ROUTE_SALARY
            },
            // {
            //     key: 'financial-reports',
            //     label: 'Financial Reports',
            //     route: ROUTE_FINANCIAL_REPORTS
            // }
        ]
    },
    // {
    //     key: 'extra',
    //     icon: <TrophyOutlined />,
    //     label: 'Extra Curricular',
    //     children: [
    //         {
    //             key: 'events',
    //             label: 'Events',
    //             route: ROUTE_EVENTS
    //         },
    //         {
    //             key: 'sports',
    //             label: 'Sports',
    //             route: ROUTE_SPORTS
    //         },
    //         {
    //             key: 'clubs',
    //             label: 'Clubs',
    //             route: ROUTE_CLUBS
    //         },
    //         {
    //             key: 'library',
    //             label: 'Library',
    //             route: ROUTE_LIBRARY
    //         }
    //     ]
    // },
    {
        key: 'reports',
        icon: <AppstoreOutlined />,
        label: 'Reports',
        children: [
            // {
            //     key: 'academic-reports',
            //     label: 'Academic Reports',
            //     route: ROUTE_ACADEMIC_REPORTS
            // },
            {
                key: 'finance-reports',
                label: 'Financial Reports',
                route: ROUTE_FINANCIAL_REPORTS
            },
            {
                key: 'attendance-reports',
                label: 'Attendance Reports',
                route: ROUTE_ATTENDANCE_REPORTS
            },
            {
                key: 'exam-reports',
                label: 'Exam Reports',
                route: ROUTE_EXAM_REPORTS
            }
        ]
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
        children: [
            {
                key: 'school-profile',
                label: 'School Profile',
                route: ROUTE_SCHOOL_PROFILE
            },
            {
                key: 'academic-year',
                label: 'Academic Year',
                route: ROUTE_ACADEMIC_YEAR
            },
            {
                key: 'user-management',
                label: 'User Management',
                route: ROUTE_USER_MANAGEMENT
            },
            {
                key: 'role-permissions',
                label: 'Role Permissions',
                route: ROUTE_ROLE_PERMISSIONS
            },
            {
                key: 'system-settings',
                label: 'System Settings',
                route: ROUTE_SYSTEM_SETTINGS
            }
        ]
    }
];

const Sidebar = ({ collapsed }: any) => {

    const navigate = useNavigate();

    const findRouteByKey = (items: any[], key: string): string | undefined => {
        for (const item of items) {
            if (item.key === key) {
                return item.route;
            }
            if (item.children) {
                const route = findRouteByKey(item.children, key);
                if (route) return route;
            }
        }
        return undefined;
    };

    const handleMenuClick = ({ key }: { key: string }) => {

        const route = findRouteByKey(menuItems, key);
        if (route) {
            navigate(route);
        }
    };

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={250}
            className="sideBar"
            style={{
                overflow: 'auto',
                // '&::-webkit-scrollbar': { display: 'none' },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                height: "100vh",
                position: "fixed",
                background: "white",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div
                style={{
                    height: "64px",
                    margin: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <h1 style={{ margin: 0 }}>{collapsed ? "SMS" : "SVNPS"}</h1>
            </div>
            <Menu
                theme="light"
                mode="inline"
                onClick={handleMenuClick}
                defaultSelectedKeys={["dashboard"]}
                items={menuItems}
            />
        </Sider>
    )
}

export default Sidebar