const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <div className="text-lg font-bold text-sky-800">Hope Hands</div>
            <p className="text-sm text-gray-600">Working together for stronger communities.</p>
          </div>

          <div className="flex gap-6">
            <a href="/about" className="text-gray-700 hover:text-sky-800">About</a>
            <a href="/donate" className="text-gray-700 hover:text-sky-800">Donate</a>
            <a href="/contact" className="text-gray-700 hover:text-sky-800">Contact</a>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} Hope Hands. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
