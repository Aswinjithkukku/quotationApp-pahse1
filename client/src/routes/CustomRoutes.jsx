import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components'
import Dashboard from '../pages/agents/Dashboard'
import LoginScreen from '../pages/agents/LoginScreen'
import QuotationPage from '../pages/agents/QuotationPage'
import RegisterScreen from '../pages/agents/RegisterScreen'

const CustomRoutes = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen/>} />
                    <Route path='/quotation' element={<QuotationPage/>} />
                </Routes>
            </main>
        </div>
    )
}

export default CustomRoutes