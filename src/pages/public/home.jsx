const Home = () => {
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Welcome to Hope Hands</h1>
            <p className="mt-4 text-gray-700">We are a community NGO dedicated to helping families and children thrive. Join us in making a difference.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="/donate" className="inline-block bg-sky-800 text-white px-4 py-2 rounded-md shadow-sm hover:bg-sky-700">Donate Now</a>
              <a href="/events" className="text-sky-800 font-medium hover:underline">See Events</a>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="w-full h-56 bg-gradient-to-tr from-sky-100 to-sky-200 rounded-lg flex items-center justify-center">
              <span className="text-sky-800 font-semibold">Image / Illustration</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
