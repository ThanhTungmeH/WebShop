import { Outlet } from "react-router-dom"
import SideBar from '../components/SideBar'
import { useState } from 'react'
 function AdminLayout() {
  const [user] = useState(() => {
    const stored = localStorage.getItem('user')
    return stored ? JSON.parse(stored) : null
  })

  return (
    <div className="flex min-h-screen bg-slate-100">
      <SideBar user={user} />
      <main className="flex-1 md:ml-64">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout