import Layout from "./layouts/Main";
import AppRoutes from "./pages/routes/Routes";
import {useSelector} from "react-redux";
import {userInfo} from "./store/getters/getters";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
    const isAutheficated = useSelector(userInfo)
    return (
        <>
            {isAutheficated ?
                (<Layout>
                    <AppRoutes/>
                </Layout>) : <AuthPage/>
            }
        </>
    );
}

export default App;
