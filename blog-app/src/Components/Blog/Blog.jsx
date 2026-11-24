import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuSearch, LuLayoutGrid, LuList, LuClock, LuNewspaper } from 'react-icons/lu'
import data from '../../data/posts.json'

function Blog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('الكل')
  const [view, setView] = useState('grid')

  const filteredPosts = data.posts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())

    const matchCategory = category === 'الكل' || post.category === category

    return matchSearch && matchCategory
  })

  function formatDate(date) {
    return new Date(date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const normalBtn =
    'px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900 text-gray-300 hover:text-white hover:border-neutral-600'
  const activeBtn = 'px-6 py-3 rounded-full bg-orange-500 text-white font-bold'

  return (
    <div>
      <div className="hero-bg text-center py-24 px-6">
        <span className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 rounded-full px-5 py-2 mb-8">
          مدونتنا
          <LuNewspaper size={18} />
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
        </span>

        <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
          استكشف <span className="text-orange-500">مقالاتنا</span>
        </h1>
        <p className="text-gray-400 text-xl">اكتشف الدروس والرؤى وأفضل الممارسات للتصوير الحديث</p>
      </div>

      <div className="border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative w-full lg:w-120">
            <LuSearch size={22} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-2xl py-4 pr-14 pl-4 focus:border-orange-500 focus:ring-0"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setCategory('الكل')}
              className={category === 'الكل' ? activeBtn : normalBtn}
            >
              جميع المقالات
            </button>

            {data.categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setCategory(cat.name)}
                className={category === cat.name ? activeBtn : normalBtn}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-400">
            عرض <span className="text-white font-bold">{filteredPosts.length}</span> مقالات
          </p>

          <div className="flex gap-1 border border-neutral-800 bg-neutral-900 rounded-2xl p-2">
            <button
              onClick={() => setView('grid')}
              className={
                view === 'grid'
                  ? 'p-3 rounded-xl bg-orange-500 text-white'
                  : 'p-3 rounded-xl text-gray-400 hover:text-white'
              }
            >
              <LuLayoutGrid size={22} />
            </button>
            <button
              onClick={() => setView('list')}
              className={
                view === 'list'
                  ? 'p-3 rounded-xl bg-orange-500 text-white'
                  : 'p-3 rounded-xl text-gray-400 hover:text-white'
              }
            >
              <LuList size={22} />
            </button>
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-400 py-20">مفيش مقالات مطابقة للبحث</p>
        )}

        <div
          className={
            view === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'flex flex-col gap-6'
          }
        >
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className={
                view === 'grid'
                  ? 'group block bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300'
                  : 'group flex flex-col md:flex-row bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-1 transition duration-300'
              }
            >
              <div
                className={
                  view === 'grid'
                    ? 'relative h-72 overflow-hidden'
                    : 'relative h-64 md:h-auto md:w-96 shrink-0 overflow-hidden'
                }
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-4 right-4 bg-black/70 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <LuClock size={16} />
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{formatDate(post.date)}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-5">{post.excerpt}</p>

                <div className="flex items-center gap-3 border-t border-neutral-800 pt-4 mt-auto">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-sm">{post.author.name}</p>
                    <p className="text-gray-500 text-xs">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog