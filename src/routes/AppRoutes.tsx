// src/routes/index.tsx
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import AdminRoutes from './adminRoutes';
// import { publicRoutes } from './publicRoutes';
// import { studentRoutes } from './studentRoutes';
// import { teacherRoutes } from './teacherRoutes';

const AppRoutes = () => {
    // Simple check for logged in user

    const isLoggedIn = localStorage.getItem('user') !== null;
    const userRole = localStorage.getItem('userRole');

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                {/* Public Routes */}
                {/* {!isLoggedIn && publicRoutes.map((route: any) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))} */}

                {/* Admin Routes */}
                {isLoggedIn && userRole === 'admin' &&
                    renderRoutes(AdminRoutes)
                }

                {/* Teacher Routes */}
                {/* {isLoggedIn && userRole === 'teacher' &&
                    renderRoutes(teacherRoutes)
                } */}

                {/* Student Routes */}
                {/* {isLoggedIn && userRole === 'student' &&
                    renderRoutes(studentRoutes)
                } */}

                {/* Default redirect */}
                <Route path="*" element={<Navigate to={isLoggedIn ? `/${userRole}` : '/login'} />} />
            </Routes>
        </Suspense>
    );
};

// Helper function to render nested routes
const renderRoutes = (routes: any) => {

    return routes?.length && routes?.map((route: any) => {
        if (route.children) {
            return (
                <Route key={route.path} path={route.path} element={route.element}>
                    {renderRoutes(route.children)}
                </Route>
            );
        }
        return <Route key={route.path} path={route.path} element={route.element} />;
    });
};

export default AppRoutes;