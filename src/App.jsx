import React, { useState } from 'react';

export default function NYCTransportation() {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-300 via-blue-200 to-cyan-200 text-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Fixing NYC Transportation:
            <br />
            Challenges & Solutions
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Improving mobility for a cleaner, faster, and more equitable city
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('solutions')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Solutions
            </button>
            <button
              onClick={() => scrollToSection('data')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              See the Data
            </button>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">The Problem</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Traffic Congestion
            </h3>
            <p className="text-gray-600 text-center">
              NYC ranks among the most congested cities in the world
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 4.96.48 5.57 1H6.43c.61-.52 2.06-1 5.57-1zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Overcrowded Transit
            </h3>
            <p className="text-gray-600 text-center">
              Aging infrastructure and delays increase commute times.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66 1.43-3C7.08 20.84 8.5 22 10 22c1.1 0 2-.9 2-2V8c0-.55.45-1 1-1s1 .45 1 1v9c0 1.1.9 2 2 2 1.5 0 2.92-1.16 2.86-3l1.43 3 1.89-.66C20.1 16.17 18 10 17 8zM11.5 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Environmental Impact
            </h3>
            <p className="text-gray-600 text-center">
              Vehicle emissions worsen air pollution and climate impact
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Overview Section */}
      <div id="solutions" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Solutions Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Policy Solutions
              </h3>
              <p className="text-gray-600">
                Congestion pricing, car restrictions in Midtown
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructure Improvements
              </h3>
              <p className="text-gray-600">
                More bike lanes, wider sidewalks, redesigned intersections
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technology & Innovation
              </h3>
              <p className="text-gray-600">
                Smart traffic lights, mobility apps, autonomous shuttles
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technology & Innovation
              </h3>
              <p className="text-gray-600">
                Smart traffic lights, mobility apps, autonomous shuttles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Maps & Data Dashboard Section */}
      <div id="data" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Maps & Data Dashboard
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What is it?
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Why NYC Needs This:
              </h4>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Faster commutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Safer streets</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Cleaner air</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span className="text-gray-700">Better accessibility</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-xl font-semibold text-gray-700">
                    Real Data / Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Resources</h2>
          <div className="bg-gray-50 rounded-lg shadow-md p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  NYC DOT
                </h3>
                <p className="text-lg text-gray-700 mb-2">MTA</p>
                <p className="text-gray-600">Vision Zero</p>
              </div>
              <div className="flex-1 flex gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-32 flex-1"></div>
                <div className="flex flex-col gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-14 w-32"></div>
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg h-14 w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 NYC Transportation Initiative. Building a better city together.
          </p>
        </div>
      </div>
    </div>
  );
}