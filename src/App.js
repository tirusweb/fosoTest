import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((router, i) => {
                    return (
                        <Route key={i} path={router.path} element={router.element}>
                            {router.children && router.children.map((child, j) => (
                                <Route key={j} path={child.path} element={child.element} />
                            ))}
                        </Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
