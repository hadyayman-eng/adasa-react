import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-8xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">الصفحة اللي بتدور عليها مش موجودة</p>
      <Link
        to="/"
        className="text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-full px-6 py-3"
      >
        ارجع للرئيسية
      </Link>
    </div>
  )
}

export default NotFound