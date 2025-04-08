import DefaultLayout from '../defaultLayout';
import NotFoundPage from '../NotFoundFage/index';  // Lưu ý sửa chính tả của `NotFoundPage`
import HomeDashboard from '../page/Content/Home/index';

const publicRoutes = [
    {
        path: '/',
        element: <DefaultLayout />, 
        children: [
            { path: '', element: <HomeDashboard /> },  
        ],
    },
    { path: '*', element: <NotFoundPage /> },  
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
