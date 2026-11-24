import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import BlogDetails from './Components/BlogDetails/BlogDetails'
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="blog">
          <Route index element={<Blog />} />
          <Route path=":slug" element={<BlogDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App