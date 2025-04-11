import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                element: <HomePage />,
                path: "/home"
            },
            {
                element: <RegisterPage />,
                path: "/register"
            }
        ]
    },

]);

export default router;