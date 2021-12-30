import Layout from "./layouts/Main";
import AppRoutes from "./pages/routes/Routes";
import {ToastContainer} from "react-toastify";
import {useSelector} from "react-redux";
import {userInfo} from "./store/getters/getters";
import AuthPage from "./pages/AuthPage/AuthPage";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const isAutheficated = useSelector(userInfo)
    return (
        <>
            {isAutheficated ?
                (<Layout>
                    <AppRoutes/>
                </Layout>) : <AuthPage/>
            }
            <ToastContainer/>
        </>
    );
}

export default App;
