import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components'
import Dashboard from '../pages/superAdmin/Dashboard'
import PlaceLists from '../pages/superAdmin/locations/PlaceLists'
import CreatePlace from '../pages/superAdmin/locations/CreatePlace'
import TransferList from '../pages/superAdmin/Transfers/TransferList'
import CreateTransfers from '../pages/superAdmin/Transfers/CreateTransfers'
import CreateExcursions from '../pages/superAdmin/excursions/CreateExcursions'
import ExcursionLists from '../pages/superAdmin/excursions/ExcursionLists'

const AdminRoutes = () => {
    return(
        <div>
            <MainLayout/>
            <main>
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/places' element={<PlaceLists/>} />
                    <Route path='/places/create' element={<CreatePlace/>} />
                    <Route path='/transfers' element={<TransferList/>} />
                    <Route path='/transfer/create' element={<CreateTransfers/>} />
                    <Route path='/excursions' element={<ExcursionLists/>} />
                    <Route path='/excursion/create' element={<CreateExcursions/>} />
                </Routes>
            </main>
        </div>
    )
}

export default AdminRoutes