import { ToastContainer } from "react-toastify"
import { Rotas } from "./routes"
import "react-toastify/dist/ReactToastify.css";


export const App = () => {
    return (
        <>
            <ToastContainer/>
            <Rotas/>
        </>
    )
}