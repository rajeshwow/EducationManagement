// src/routes/adminRoutes.tsx
import React from "react";
import { ROUTE_ADD_STUDENT, ROUTE_ANNOUNCEMENTS, ROUTE_ATTENDANCE, ROUTE_ATTENDANCE_REPORTS, ROUTE_CLASS_LIST, ROUTE_COLLECT_FEES, ROUTE_EXAM_REPORTS, ROUTE_EXAMS, ROUTE_EXPENSES, ROUTE_FINANCIAL_REPORTS, ROUTE_LEAVE_APPLICATIONS, ROUTE_MESSAGING, ROUTE_NOTICE_BOARD, ROUTE_PARENT_LIST, ROUTE_SALARY, ROUTE_STUDENT_LIST, ROUTE_STUDY_MATERIALS, ROUTE_SUBJECT_LIST, ROUTE_TEACHER_LIST } from "../components/routes";
import Attendance from "../pages/admin/attandance/attandance.page";
import Announcements from "../pages/admin/Communications/announcements.page";
import EmailPages from "../pages/admin/Communications/email.page";
import NoticePage from "../pages/admin/Communications/notice.page";
import Expenses from "../pages/admin/Finance/expances.page";
import FeesPage from "../pages/admin/Finance/fees.page";
import SalaryPage from "../pages/admin/Finance/salary.page";
import LeavePage from "../pages/admin/Leave/leaves.page";
import DashboardPage from "../pages/admin/people/admin/dashbaord.page";
import ParentsList from "../pages/admin/people/parents/parents.page";
import ClassLists from "../pages/admin/people/students/classList.page";
import ExamsPage from "../pages/admin/people/students/exams.page";
import StudentsList from "../pages/admin/people/students/studentList.page";
import StudyMaterialsPage from "../pages/admin/people/students/studyMaterial.page";
import SubjectsList from "../pages/admin/people/students/subjectsList.page";
import TeachersList from "../pages/admin/people/teachers/teachers.page";
import AttendanceReport from "../pages/admin/Reports/attendanceReports.page";
import ExamReports from "../pages/admin/Reports/examReports.page";
import FinancePage from "../pages/admin/Reports/financeReport.page";
import MainLayout from "../pages/common/mainLayout.page";
import CreateStudent from "../pages/student/createStudent.page";
import { ROUTE_ADMIN_DASHBOARD } from "./route.contants";

export interface RouteConfig {
    name: string;
    path: string;
    element: React.ReactNode;
    children?: RouteConfig[];
}

export const adminRoutes: RouteConfig[] = [
    {
        name: "Admin",
        path: "/admin",
        element: <MainLayout />,
        children: [
            {
                name: "Dashboard",
                path: ROUTE_ADMIN_DASHBOARD,
                element: <DashboardPage />,
            },
            {
                name: "Students List",
                path: ROUTE_STUDENT_LIST,
                element: <StudentsList />,
            },
            {
                name: "Students add",
                path: ROUTE_ADD_STUDENT,
                element: <CreateStudent />,
            },
            {
                name: "Teachers",
                path: ROUTE_TEACHER_LIST,
                element: <TeachersList />,
            },
            {
                name: "Parents",
                path: ROUTE_PARENT_LIST,
                element: <ParentsList />,
            },
            {
                name: "Classes",
                path: ROUTE_CLASS_LIST,
                element: <ClassLists />,
            },
            {
                name: "Subjects",
                path: ROUTE_SUBJECT_LIST,
                element: <SubjectsList />,
            },
            {
                name: "Exams",
                path: ROUTE_EXAMS,
                element: <ExamsPage />,
            },
            {
                name: "Study Material",
                path: ROUTE_STUDY_MATERIALS,
                element: <StudyMaterialsPage />,
            },
            {
                name: "Attendance",
                path: ROUTE_ATTENDANCE,
                element: <Attendance />,
            },
            {
                name: "Leave",
                path: ROUTE_LEAVE_APPLICATIONS,
                element: <LeavePage />,
            },
            {
                name: "Announcements",
                path: ROUTE_ANNOUNCEMENTS,
                element: <Announcements />,
            },
            {
                name: "Email/SMS",
                path: ROUTE_MESSAGING,
                element: <EmailPages />,
            },
            {
                name: "Notice Board",
                path: ROUTE_NOTICE_BOARD,
                element: <NoticePage />,
            },
            {
                name: "Fees",
                path: ROUTE_COLLECT_FEES,
                element: <FeesPage />,
            },
            {
                name: "Expenses",
                path: ROUTE_EXPENSES,
                element: <Expenses />,
            },
            {
                name: "Salary",
                path: ROUTE_SALARY,
                element: <SalaryPage />,
            },
            {
                name: "Finance Report",
                path: ROUTE_FINANCIAL_REPORTS,
                element: <FinancePage />,
            },
            {
                name: "Attendance Report",
                path: ROUTE_ATTENDANCE_REPORTS,
                element: <AttendanceReport />,
            },
            {
                name: "Exam Report",
                path: ROUTE_EXAM_REPORTS,
                element: <ExamReports />,
            },

            // Add other routes here
        ]
    }
];

export default adminRoutes;