import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute({ children, requiredRole }) {
  const navigate = useNavigate()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (!stored) {
      navigate('/')
      return
    }

    try {
      const user = JSON.parse(stored)
      
      // Kiểm tra role
      if (requiredRole && user.role !== requiredRole) {
        navigate('/')
        return
      }

      setIsAuthorized(true)
    } catch (e) {
      console.error('Failed to parse user:', e)
      navigate('/')
    } finally {
      setLoading(false)
    }
  }, [navigate, requiredRole])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Đang tải...</div>
      </div>
    )
  }

  return isAuthorized ? children : null
}
