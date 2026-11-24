import { Link } from 'react-router-dom'
import {
  LuArrowLeft,
  LuInfo,
  LuNewspaper,
  LuUsers,
  LuFolderOpen,
  LuPenTool,
  LuSun,
  LuUser,
  LuMountain,
  LuSettings2,
  LuCamera,
  LuMail,
} from 'react-icons/lu'
import data from '../../data/posts.json'

function Home() {
  const featuredPosts = data.posts.filter((post) => post.featured)
  const latestPosts = data.posts.slice(0, 3)

  const authorsCount = new Set(data.posts.map((post) => post.author.name)).size

  function formatDate(date) {
    return new Date(date).toLocaleDateString('ar-EG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const stats = [
    { icon: <LuNewspaper size={26} />, number: '50+', label: 'مقالة' },
    { icon: <LuUsers size={26} />, number: '+10ألف', label: 'قارئ' },
    { icon: <LuFolderOpen size={26} />, number: data.categories.length, label: 'تصنيفات' },
    { icon: <LuPenTool size={26} />, number: authorsCount, label: 'كاتب' },
  ]

  const categoryIcons = {
    إضاءة: <LuSun size={22} />,
    بورتريه: <LuUser size={22} />,
    'مناظر طبيعية': <LuMountain size={22} />,
    تقنيات: <LuSettings2 size={22} />,
    معدات: <LuCamera size={22} />,
  }

  return (
    <div>
      <div className="hero-bg min-h-[85vh] flex items-center justify-center">
        <div className="text-center px-6 py-20 max-w-4xl">
          <span className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-400 rounded-full px-6 py-2 mb-8">
            مرحباً بك في عدسة
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-orange-500">اكتشف فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-gray-400 text-xl mb-10">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              to="/blog"
              className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-10 py-5 text-lg"
            >
              <LuArrowLeft size={22} />
              استكشف المقالات
            </Link>

            <span className="flex items-center gap-3 border border-neutral-700 text-white font-bold rounded-full px-10 py-5 text-lg">
              <LuInfo size={22} />
              اعرف المزيد
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group w-44 bg-neutral-900 border border-neutral-800 rounded-3xl py-6 px-4 text-center hover:border-orange-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-orange-500 flex justify-center mb-3">{item.icon}</div>
                <p className="text-3xl font-extrabold text-orange-400">{item.number}</p>
                <p className="text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm rounded-full px-4 py-1 mb-4">
                مميز
              </span>
              <h2 className="text-4xl font-extrabold mb-2">مقالات مختارة</h2>
              <p className="text-gray-400">محتوى منتقى ليدك رحلة تعلمك</p>
            </div>

            <Link
              to="/blog"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-6 py-3"
            >
              <LuArrowLeft size={18} />
              عرض الكل
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 transition duration-300"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-6">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-sm">{post.author.name}</p>
                        <p className="text-gray-500 text-xs">{formatDate(post.date)}</p>
                      </div>
                    </div>

                    <span className="flex items-center gap-2 text-orange-500 font-bold text-sm">
                      <LuArrowLeft size={16} />
                      اقرأ المقال
                    </span>
                  </div>
                </div>

                <div className="md:w-96 h-64 md:h-auto shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <span className="inline-block border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm rounded-full px-4 py-1 mb-4">
            التصنيفات
          </span>
          <h2 className="text-4xl font-extrabold mb-2">استكشف حسب الموضوع</h2>
          <p className="text-gray-400 mb-10">اعثر على محتوى مصمم حسب اهتماماتك</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.categories.map((cat) => (
              <Link
                key={cat.name}
                to="/blog"
                className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-right hover:border-orange-500 hover:-translate-y-2 transition duration-300"
              >
                <span className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 flex items-center justify-center mb-4">
                  {categoryIcons[cat.name]}
                </span>
                <p className="font-bold text-lg group-hover:text-orange-500 transition">
                  {cat.name}
                </p>
                <p className="text-gray-500 text-sm">{cat.count} مقالة</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="inline-block border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm rounded-full px-4 py-1 mb-4">
                الجديد
              </span>
              <h2 className="text-4xl font-extrabold mb-2">أحدث المقالات</h2>
              <p className="text-gray-400">محتوى جديد طازج من المطبعة</p>
            </div>

            <Link to="/blog" className="flex items-center gap-2 text-orange-500 font-bold">
              <LuArrowLeft size={18} />
              عرض جميع المقالات
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-black/70 text-white text-sm font-bold px-4 py-2 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-3">
                    {post.readTime} • {formatDate(post.date)}
                  </p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5">{post.excerpt}</p>

                  <div className="flex items-center gap-3 border-t border-neutral-800 pt-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover"
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

      <div className="border-t border-neutral-800">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10 text-center">
            <span className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center mx-auto mb-6">
              <LuMail size={26} />
            </span>

            <h2 className="text-3xl font-extrabold mb-3">
              اشترك في <span className="text-orange-500">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-gray-400 mb-8">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-neutral-950 border border-neutral-800 text-white rounded-xl p-4 focus:border-orange-500 focus:ring-0"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl px-8 py-4">
                اشترك الآن
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              انضم إلى +10,000 مشترك • بدون إزعاج • يمكنك إلغاء الاشتراك في أي وقت
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home