import React, { useState } from 'react';

export default function NYCTransportation() {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const problemDetails = {
    traffic: {
      title: "Traffic Congestion",
      subtitle: "NYC ranks among the most congested cities in the world",
      description: "New York City consistently ranks as one of the most traffic-congested cities globally, costing billions in lost productivity and quality of life.",
      stats: [
        {
          label: "Average Commute Time",
          value: "42 minutes",
          info: "NYC residents spend an average of 42 minutes commuting to work, well above the national average of 27 minutes."
        },
        {
          label: "Annual Cost per Driver",
          value: "$1,976",
          info: "Traffic congestion costs each NYC driver nearly $2,000 annually in wasted time, fuel, and vehicle wear."
        },
        {
          label: "Peak Hour Speed",
          value: "4.7 mph",
          info: "During rush hour, average traffic speeds in Manhattan can drop to just 4.7 mph, slower than walking pace."
        }
      ],
      impacts: [
        "Reduced productivity and economic losses",
        "Increased stress and reduced quality of life",
        "Longer emergency response times",
        "Higher transportation costs for businesses"
      ]
    },
    transit: {
      title: "Overcrowded Transit",
      subtitle: "Aging infrastructure and delays increase commute times",
      description: "The MTA subway system, built over a century ago, struggles to meet the demands of 5.5 million daily riders with frequent delays and overcrowding.",
      stats: [
        {
          label: "Daily Riders",
          value: "5.5 million",
          info: "The NYC subway system serves over 5.5 million passengers every weekday, making it one of the busiest transit systems in the world."
        },
        {
          label: "On-Time Performance",
          value: "65%",
          info: "Only about 65% of subway trains arrive on time during weekdays, well below international standards of 90%+."
        },
        {
          label: "System Age",
          value: "120 years",
          info: "Much of the subway infrastructure dates back over a century, with outdated signals, tracks, and stations in need of modernization."
        }
      ],
      impacts: [
        "Unpredictable commute times affecting work and personal life",
        "Dangerous overcrowding during peak hours",
        "Accessibility issues for elderly and disabled passengers",
        "Reduced reliability driving people to use cars instead"
      ]
    },
    bikelanes: {
      title: "Dangerous Bike Lanes",
      subtitle: "Inadequate infrastructure puts cyclists at risk",
      description: "Despite growing cycling popularity, NYC's bike infrastructure remains incomplete and poorly designed, leading to preventable accidents and cyclist fatalities.",
      stats: [
        {
          label: "Cyclist Fatalities",
          value: "20+ per year",
          info: "NYC sees over 20 cyclist deaths annually, with most occurring in areas without protected bike lanes or at dangerous intersections."
        },
        {
          label: "Protected Lanes",
          value: "Only 30%",
          info: "Just 30% of NYC bike lanes are physically protected from vehicle traffic, leaving cyclists vulnerable to accidents and near-misses."
        },
        {
          label: "Annual Injuries",
          value: "4,000+",
          info: "Over 4,000 cyclists are injured each year in NYC, many due to poorly designed bike lanes, dooring incidents, and conflicts with traffic."
        }
      ],
      impacts: [
        "Preventable deaths and serious injuries to cyclists",
        "Fear of cycling discourages sustainable transportation",
        "Conflicts between cyclists, pedestrians, and vehicles",
        "Inadequate connectivity makes cycling impractical for many trips"
      ]
    }
  };

  const solutionDetails = {
    policy: {
      title: "Policy Solutions",
      subtitle: "Congestion pricing, car restrictions in Midtown",
      description: "Policy-based approaches to reduce traffic and improve mobility through regulatory measures.",
      details: [
        {
          name: "Congestion Pricing",
          info: "Charging vehicles a fee to enter high-traffic areas during peak hours. This reduces traffic volume by 15-20% and generates revenue for public transit improvements."
        },
        {
          name: "Car-Free Zones",
          info: "Restricting vehicle access in Midtown Manhattan and other busy areas to prioritize pedestrians, cyclists, and public transportation."
        },
        {
          name: "Parking Regulations",
          info: "Implementing dynamic pricing for street parking and reducing parking spaces to discourage driving and free up space for bike lanes and wider sidewalks."
        }
      ]
    },
    infrastructure: {
      title: "Infrastructure Improvements",
      subtitle: "More bike lanes, wider sidewalks, redesigned intersections",
      description: "Physical changes to city streets that make them safer and more accessible for all users.",
      details: [
        {
          name: "Protected Bike Lanes",
          info: "Building 500+ miles of protected bike lanes separated from vehicle traffic, increasing cyclist safety by 75% and encouraging more people to bike."
        },
        {
          name: "Wider Sidewalks",
          info: "Expanding pedestrian space in high-traffic areas to reduce crowding and improve accessibility for people with disabilities and mobility devices."
        },
        {
          name: "Redesigned Intersections",
          info: "Creating pedestrian-first intersection designs with shorter crossing distances, better visibility, and extended crossing times to reduce accidents by 40%."
        }
      ]
    },
    technology1: {
      title: "Technology & Innovation",
      subtitle: "Smart traffic lights, mobility apps, autonomous shuttles",
      description: "Cutting-edge technology solutions to optimize traffic flow and improve the transportation experience.",
      details: [
        {
          name: "Smart Traffic Lights",
          info: "AI-powered traffic signals that adapt in real-time to traffic conditions, reducing wait times by 25% and improving traffic flow throughout the city."
        },
        {
          name: "Mobility Apps",
          info: "Integrated apps that combine subway, bus, bike-share, and ride-share options to help users find the fastest, cheapest, or most sustainable route."
        },
        {
          name: "Autonomous Shuttles",
          info: "Electric self-driving shuttles for last-mile connections in underserved neighborhoods, operating on fixed routes with frequent service."
        }
      ]
    },
    technology2: {
      title: "Technology & Innovation",
      subtitle: "Smart traffic lights, mobility apps, autonomous shuttles",
      description: "Advanced solutions for a more connected and efficient transportation network.",
      details: [
        {
          name: "Real-Time Transit Updates",
          info: "Live tracking and prediction systems that give accurate arrival times and alert riders to delays or service changes instantly."
        },
        {
          name: "Electric Vehicle Infrastructure",
          info: "Installing 10,000+ EV charging stations across all five boroughs to support the transition to zero-emission vehicles."
        },
        {
          name: "Smart Parking Systems",
          info: "Sensors and apps that show available parking spots in real-time, reducing time spent searching for parking by 30%."
        }
      ]
    }
  };

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
          <button
            onClick={() => setSelectedProblem('traffic')}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 text-left cursor-pointer transform hover:scale-105"
          >
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
          </button>

          <button
            onClick={() => setSelectedProblem('transit')}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 text-left cursor-pointer transform hover:scale-105"
          >
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
          </button>

          <button
            onClick={() => setSelectedProblem('bikelanes')}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 text-left cursor-pointer transform hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Dangerous Bike Lanes
            </h3>
            <p className="text-gray-600 text-center">
              Inadequate infrastructure puts cyclists at risk
            </p>
          </button>
        </div>
      </div>

      {/* Modal for Problem Details */}
      {selectedProblem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProblem(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {problemDetails[selectedProblem].title}
                  </h2>
                  <p className="text-orange-100">
                    {problemDetails[selectedProblem].subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProblem(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-gray-700 mb-6">
                {problemDetails[selectedProblem].description}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Statistics</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {problemDetails[selectedProblem].stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-lg border-2 border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-600">
                      {stat.info}
                    </p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact on New Yorkers</h3>
              <div className="space-y-3">
                {problemDetails[selectedProblem].impacts.map((impact, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">{impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Overview Section */}
      <div id="solutions" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Solutions Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => setSelectedSolution('policy')}
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Policy Solutions
              </h3>
              <p className="text-gray-600">
                Congestion pricing, car restrictions in Midtown
              </p>
            </button>

            <button
              onClick={() => setSelectedSolution('infrastructure')}
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Infrastructure Improvements
              </h3>
              <p className="text-gray-600">
                More bike lanes, wider sidewalks, redesigned intersections
              </p>
            </button>

            <button
              onClick={() => setSelectedSolution('technology1')}
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technology & Innovation
              </h3>
              <p className="text-gray-600">
                Smart traffic lights, mobility apps, autonomous shuttles
              </p>
            </button>

            <button
              onClick={() => setSelectedSolution('technology2')}
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-105 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technology & Innovation
              </h3>
              <p className="text-gray-600">
                Smart traffic lights, mobility apps, autonomous shuttles.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Solution Details */}
      {selectedSolution && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSolution(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {solutionDetails[selectedSolution].title}
                  </h2>
                  <p className="text-blue-100">
                    {solutionDetails[selectedSolution].subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-lg text-gray-700 mb-6">
                {solutionDetails[selectedSolution].description}
              </p>
              
              <div className="space-y-6">
                {solutionDetails[selectedSolution].details.map((detail, index) => (
                  <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                        {index + 1}
                      </span>
                      {detail.name}
                    </h3>
                    <p className="text-gray-700 ml-11">
                      {detail.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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