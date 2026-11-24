import { useParams, Link } from 'react-router-dom'
import {
  FaHouse,
  FaChevronLeft,
  FaRegCalendar,
  FaRegClock,
  FaCamera,
  FaListUl,
  FaTags,
  FaShareNodes,
  FaLink,
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaImages,
  FaArrowLeft,
} from 'react-icons/fa6'
import data from '../../data/posts.json'
import NotFound from '../NotFound/NotFound'

function BlogDetails() {
  const { slug } = useParams()

  const post = data.posts.find((p) => p.slug === slug)

  if (!post) {
    return <NotFound />
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const paragraphs = post.content.split('\n\n')

  const sections = paragraphs
    .map((text, index) => ({ text, index }))
    .filter((item) => item.text.startsWith('## '))

  const relatedPosts = data.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  function goToSection(index) {
    document.getElementById('section-' + index).scrollIntoView({ behavior: 'smooth' })
  }

  const shareBtn =
    'w-14 h-14 rounded-xl bg-neutral-800 border border-neutral-700 text-gray-300 hover:text-orange-500 flex items-center justify-center'

  return (
    <div>
      <div className="relative min-h-[80vh] flex flex-col justify-between">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40"></div>

        <div className="relative max-w-7xl mx-auto w-full px-6 pt-10">
          <div className="inline-flex items-center gap-3 bg-black/60 border border-neutral-700 rounded-full px-5 py-3">
            <Link to="/" className="text-orange-500">
              <FaHouse size={18} />
            </Link>
            <FaChevronLeft size={12} className="text-gray-500" />
            <Link to="/blog" className="text-gray-300 hover:text-white">
              المدونة
            </Link>
            <FaChevronLeft size={12} className="text-gray-500" />
            <span className="text-orange-500">{post.category}</span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-6 pb-12">
          <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-6">
            <span className="bg-orange-500 text-white font-bold px-6 py-3 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <FaRegCalendar />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <FaRegClock />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-8">
            {post.title}
          </h1>

          <div className="inline-flex items-center gap-4 bg-neutral-900/80 border border-neutral-700 rounded-2xl p-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            />
            <div>
              <p className="font-bold text-lg">{post.author.name}</p>
              <p className="text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 mb-10">
            <p className="text-xl italic text-gray-200">"{post.excerpt}"</p>
          </div>

          {paragraphs.map((text, index) => {
            if (text.startsWith('## ')) {
              return (
                <h2
                  key={index}
                  id={'section-' + index}
                  className="flex items-center gap-4 text-3xl font-extrabold mt-14 mb-5"
                >
                  <span className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 flex items-center justify-center">
                    <FaCamera size={20} />
                  </span>
                  {text.replace('## ', '')}
                </h2>
              )
            }
            return (
              <p key={index} className="text-gray-300 text-lg leading-9 mb-4">
                {text}
              </p>
            )
          })}

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mt-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 flex items-center justify-center">
                <FaTags size={20} />
              </span>
              <h3 className="text-xl font-bold">الوسوم</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-800 border border-neutral-700 text-gray-300 px-5 py-2 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 flex items-center justify-center">
                <FaShareNodes size={20} />
              </span>
              <h3 className="text-xl font-bold">شارك المقال</h3>
            </div>
            <div className="flex gap-3">
              <span className={shareBtn}>
                <FaLink size={20} />
              </span>
              <span className={shareBtn}>
                <FaWhatsapp size={22} />
              </span>
              <span className={shareBtn}>
                <FaLinkedinIn size={22} />
              </span>
              <span className={shareBtn}>
                <FaXTwitter size={22} />
              </span>
            </div>
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 mt-6 flex items-center gap-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-24 h-24 rounded-2xl object-cover border-2 border-orange-500"
            />
            <div>
              <p className="text-orange-500 text-sm font-bold">كاتب المقال</p>
              <p className="text-2xl font-bold">{post.author.name}</p>
              <p className="text-gray-500 mb-2">{post.author.role}</p>
              <p className="text-gray-400">
                مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="lg:sticky lg:top-6 flex flex-col gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 flex items-center justify-center">
                  <FaListUl size={20} />
                </span>
                <h3 className="text-xl font-bold">محتويات المقال</h3>
              </div>

              <ul className="flex flex-col gap-2">
                {sections.map((item, number) => (
                  <li key={item.index}>
                    <button
                      onClick={() => goToSection(item.index)}
                      className="w-full flex items-center gap-3 text-gray-400 hover:text-orange-500 py-2 text-right"
                    >
                      <span className="w-8 h-8 rounded-lg bg-neutral-800 text-sm flex items-center justify-center">
                        {number + 1}
                      </span>
                      {item.text.replace('## ', '')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <div className="bg-neutral-950 rounded-xl p-4 text-center">
                <FaRegCalendar size={22} className="text-orange-500 mx-auto mb-2" />
                <p className="font-bold">{formatDate(post.date)}</p>
                <p className="text-gray-500 text-sm">تاريخ النشر</p>
              </div>
              <div className="bg-neutral-950 rounded-xl p-4 text-center">
                <FaRegClock size={22} className="text-orange-500 mx-auto mb-2" />
                <p className="font-bold">{post.readTime}</p>
                <p className="text-gray-500 text-sm">وقت القراءة</p>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 text-center">
              <span className="w-16 h-16 rounded-2xl bg-orange-500/30 text-orange-500 flex items-center justify-center mx-auto mb-4">
                <FaEnvelope size={26} />
              </span>
              <h3 className="text-xl font-bold mb-2">لا تفوّت جديدنا</h3>
              <p className="text-gray-400 mb-5">اشترك للحصول على أحدث المقالات</p>
              <Link
                to="/blog"
                className="block bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl py-4"
              >
                تصفح المزيد
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 flex items-center justify-center">
                  <FaImages size={24} />
                </span>
                <div>
                  <h2 className="text-3xl font-extrabold">مقالات قد تعجبك</h2>
                  <p className="text-gray-500">استكشف المزيد من المحتوى المميز</p>
                </div>
              </div>

              <Link to="/blog" className="flex items-center gap-2 text-orange-500 font-bold">
                <FaArrowLeft />
                عرض الكل
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.slug}`}
                  className="group block bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-orange-500 transition">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span>{item.author.name}</span>
                      </div>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogDetails