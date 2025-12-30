import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const Gallary = [
    {
      image: "/asset/img1.png",
      title: "Community Outreach",
      id: 1,  
    },
    {
      image: "/asset/img2.png",
      title: "Education Programs",
      id:2
    },
    {
      image: "/asset/img3.png",
      title: "Environmental Initiatives",
      id:3
    },
    {
      image: "/asset/img4.png",
      title: "Health Campaigns",
      id:4
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <img
          src="/asset/img1.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover blur-xs brightness-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

        <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-down">
              Welcome to NGOConnect
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 animate-fade-in-up">
              Empowering change by connecting NGOs with passionate volunteers
              and generous donors
            </p>
            <Link to="/login">
              <Button className="bg-[#004B8D] hover:bg-[#003366] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004B8D] animate-fade-in-down">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {Gallary.map((val) => {
              return (
                <div
                  key={val.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 animate-fade-in-up"
                >
                  <img
                    src={val.image}
                    alt={val.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#004B8D]">{val.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AboutSection */}
      <section id="about" className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="w-full">
            <img
              src="/asset/img1.png"
              alt="About NGOConnect"
              className="w-full h-auto rounded-xl shadow-lg transform transition-transform hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#004B8D] mb-4 animate-fade-in-down">About Us</h2>
            <p className="text-lg text-gray-700">
              <span className="block mb-4">
                <strong>NGOConnect</strong> is dedicated to bridging the gap
                between NGOs and individuals who want to make a difference.
              </span>
              <span className="block mb-4">
                Our platform enables seamless connections between volunteers and
                nonprofits in need, while helping donors support meaningful
                causes with transparency and impact.
              </span>
              <span className="block">
                Whether you're looking to donate, volunteer, or simply learn
                about initiatives in your community, NGOConnect empowers you to
                take action where it matters most.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004B8D] animate-fade-in-down">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 animate-fade-in-up">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2 text-[#004B8D]">Volunteer Matching</h3>
              <p className="text-gray-600">Connect with NGOs that match your skills and interests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 animate-fade-in-up">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2 text-[#004B8D]">Donation Tracking</h3>
              <p className="text-gray-600">Track your donations and see the real impact on causes you care about.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105 animate-fade-in-up">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-[#004B8D]">Impact Reports</h3>
              <p className="text-gray-600">Get detailed reports on how your contributions are making a difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#004B8D] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Volunteers</div>
            </div>
            <div className="text-white animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">$5M+</div>
              <div className="text-lg">Donated</div>
            </div>
            <div className="text-white animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">NGOs</div>
            </div>
            <div className="text-white animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004B8D] animate-fade-in-down">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <p className="text-gray-700 mb-4">"NGOConnect made it so easy to find volunteering opportunities that align with my passion for education."</p>
              <div className="font-semibold text-[#004B8D]">- Sarah Johnson</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <p className="text-gray-700 mb-4">"The transparency in donation tracking gives me confidence that my contributions are being used effectively."</p>
              <div className="font-semibold text-[#004B8D]">- Michael Chen</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg animate-fade-in-up">
              <p className="text-gray-700 mb-4">"As an NGO, we've seen a significant increase in volunteers and donations since joining NGOConnect."</p>
              <div className="font-semibold text-[#004B8D]">- Emily Rodriguez</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#004B8D] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-down">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-up">
            Join thousands of volunteers and donors who are creating positive change in communities worldwide.
          </p>
          <div className="space-x-4">
            <Link to="/volunteer-register">
              <Button className="bg-white text-[#004B8D] font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 animate-fade-in-up">
                Start Volunteering
              </Button>
            </Link>
            <Link to="/donor-register">
              <Button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#004B8D] animate-fade-in-up">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
