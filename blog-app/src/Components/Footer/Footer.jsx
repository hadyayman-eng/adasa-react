import { Link } from 'react-router-dom'
import { FaYoutube, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'
import data from '../../data/posts.json'

function Footer() {
  const socialBox =
    'w-12 h-12 rounded-xl bg-neutral-800 text-gray-300 hover:text-orange-500 flex items-center justify-center'

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-3xl font-bold">
              ع
            </div>
            <span className="text-3xl font-bold">{data.siteInfo.name}</span>
          </div>

          <p className="text-gray-400 leading-8 mb-6">{data.siteInfo.description}</p>

          <div className="flex gap-3">
            <a href={data.siteInfo.social.youtube} className={socialBox}>
              <FaYoutube size={22} />
            </a>
            <a href={data.siteInfo.social.linkedin} className={socialBox}>
              <FaLinkedin size={22} />
            </a>
            <a href={data.siteInfo.social.github} className={socialBox}>
              <FaGithub size={22} />
            </a>
            <a href={data.siteInfo.social.twitter} className={socialBox}>
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="flex items-center gap-3 text-xl font-bold mb-6">
            استكشف
            <span className="w-8 h-0.5 bg-orange-500"></span>
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <Link to="/" className="hover:text-orange-500">الرئيسية</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-orange-500">المدونة</Link>
            </li>
            <li>من نحن</li>
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-3 text-xl font-bold mb-6">
            التصنيفات
            <span className="w-8 h-0.5 bg-orange-500"></span>
          </h4>
          <ul className="space-y-4 text-gray-400">
            {data.categories.slice(0, 4).map((cat) => (
              <li key={cat.name}>
                <Link to="/blog" className="hover:text-orange-500">{cat.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-3 text-xl font-bold mb-6">
            ابق على اطلاع
            <span className="w-8 h-0.5 bg-orange-500"></span>
          </h4>
          <p className="text-gray-400 mb-5">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-2xl p-4 mb-4 focus:border-orange-500 focus:ring-0"
          />
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full py-4">
            اشترك
          </button>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-gray-500">
          <p>© 2026 عدسة. صنع بكل ♥ جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <span>سياسة الخصوصية</span>
            <span>شروط الخدمة</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer