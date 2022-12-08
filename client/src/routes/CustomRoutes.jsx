import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components'
import Dashboard from '../pages/agents/Dashboard'
import LoginScreen from '../pages/agents/LoginScreen'
import QuotationPage from '../pages/agents/quotations/QuotationPage'
import RegisterScreen from '../pages/agents/RegisterScreen'
import UserQuotations from '../pages/agents/quotations/UserQuotations'
import QuotationUpdate from '../pages/agents/quotations/QuotationUpdate'

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
                    <Route path='/previous' element={<UserQuotations/>} />
                    <Route path='/quotation/update/:id' element={<QuotationUpdate/>} />
                </Routes>
            </main>
        </div>
    )
}

export default CustomRoutes