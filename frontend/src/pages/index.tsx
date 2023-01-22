import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/login/LoginPage'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}
