import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '../../auth'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to={routes.home()} className="text-gray-800">Pizza App</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to={routes.home()} className="text-gray-600 hover:text-gray-800">Home</Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={logOut}
                    className="text-red-600 hover:text-red-800"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to={routes.login()} className="text-gray-600 hover:text-gray-800">Login</Link>
                  </li>
                  <li>
                    <Link to={routes.register()} className="text-gray-600 hover:text-gray-800">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
}

export default MainLayout
