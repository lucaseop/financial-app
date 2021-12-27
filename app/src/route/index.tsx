import { Routes, Route } from 'react-router-dom'
import Page404 from '../pages/404'
import PageLogin from '../pages/Login'
import PageRegister from '../pages/Register'
import { EnumRoutes } from './types'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={EnumRoutes.login} element={<PageLogin />} />
      <Route path={EnumRoutes.register} element={<PageRegister />} />
      <Route path="*" element={<Page404 />} />
      {/* <Route path="*">
        <Page404 />
      </Route> */}
    </Routes>
  )
}

export default AppRoutes
