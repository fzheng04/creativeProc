  import React, { useState } from 'react';

  export default function NYCTransportation() {
    const [activeSection, setActiveSection] = useState(null);
    const [selectedSolution, setSelectedSolution] = useState(null);
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [email, setEmail] = useState('');              // ADD THIS
    const [subscribed, setSubscribed] = useState(false); 

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
      },
      transit: {
        title: "Public Transit Improvements",
        subtitle: "Modernize subway systems, expand bus networks, improve accessibility",
        description: "Comprehensive upgrades to NYC's public transit infrastructure to improve reliability, capacity, and rider experience.",
        details: [
          {
            name: "Signal Modernization",
            info: "Upgrading the century-old subway signal system with modern communications-based train control (CBTC) to allow more trains per hour and reduce delays by 30%."
          },
          {
            name: "Accessibility Upgrades",
            info: "Installing elevators and ramps at 100+ subway stations to ensure the system is fully accessible for people with disabilities, strollers, and elderly riders."
          },
          {
            name: "Bus Rapid Transit",
            info: "Creating dedicated bus lanes with signal priority across all five boroughs, cutting bus travel times by 25% and improving on-time performance to 90%+."
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
  // ADD THESE TWO FUNCTIONS HERE:
    const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = "Check out this site about fixing NYC transportation!";
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
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
      onClick={() => scrollToSection('problem')}
      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      About the Problem
    </button>
    <button
      onClick={() => scrollToSection('solutions')}
      className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Explore the Solutions
    </button>
  </div>
          </div>
        </div>

        {/* The Problem Section */}
        <div id="problem" className="max-w-6xl mx-auto px-6 py-16">
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
                onClick={() => setSelectedSolution('transit')}
                className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 text-left hover:shadow-lg transform hover:scale-105 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                Public Transit Improvements
                </h3>
                <p className="text-gray-600">
                Modernize subway systems, expand bus networks, improve accessibility
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
    {/* Take Action Section */}
    <div id="data" className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Take Action
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Join thousands of New Yorkers working toward better transportation. Your voice matters!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Contact Officials */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Your Officials</h3>
              <p className="text-gray-600 mb-4">Let your representatives know you support better transportation infrastructure.</p>
              <a 
                href="https://www.nyc.gov/apps/311-mobile-info/#!/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1"
              >
                Find Your Rep
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Join Advocacy Groups */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join Advocacy Groups</h3>
              <p className="text-gray-600 mb-4">Connect with organizations fighting for safer streets and better transit.</p>
              <div className="space-y-2">
                <a 
                  href="https://www.transalt.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1 text-sm"
                >
                  Transportation Alternatives
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="https://www.ridersalliance.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700 flex items-center gap-1 text-sm"
                >
                  Riders Alliance
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Attend Community Meetings */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Attend Meetings</h3>
              <p className="text-gray-600 mb-4">Show up to community board meetings and public hearings on transportation projects.</p>
              <a 
                href="https://www.nyc.gov/site/cau/community-boards/community-boards.page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1"
              >
                Find Your Board
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Report Issues */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Report Issues</h3>
              <p className="text-gray-600 mb-4">Use 311 to report dangerous intersections, blocked bike lanes, or other problems.</p>
              <a 
                href="https://portal.311.nyc.gov/article/?kanumber=KA-01976" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-1"
              >
                Report via 311
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Share on Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Spread the Word</h3>
              <p className="text-gray-600 mb-4">Share this site and help educate others about NYC transportation issues.</p>
              <div className="flex gap-2 flex-wrap">
                <button 
                  onClick={() => handleShare('twitter')}
                  className="text-pink-600 font-semibold hover:text-pink-700 flex items-center gap-1 text-sm"
                >
                  Twitter
                </button>
                <span className="text-gray-300">•</span>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="text-pink-600 font-semibold hover:text-pink-700 flex items-center gap-1 text-sm"
                >
                  Facebook
                </button>
                <span className="text-gray-300">•</span>
                <button 
                  onClick={() => handleShare('copy')}
                  className="text-pink-600 font-semibold hover:text-pink-700 flex items-center gap-1 text-sm"
                >
                  Copy Link
                </button>
              </div>
            </div>

            {/* Stay Informed */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Informed</h3>
              <p className="text-gray-600 mb-4">Get updates on new projects, policy changes, and transportation news in NYC.</p>
              <div className="space-y-2">
                <a 
                  href="https://www.nyc.gov/html/dot/html/home/home.shtml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold hover:text-cyan-700 flex items-center gap-1 text-sm"
                >
                  NYC DOT News
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="https://new.mta.info/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-600 font-semibold hover:text-cyan-700 flex items-center gap-1 text-sm"
                >
                  MTA Updates
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          
        </div>
        {/* Resources Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Resources</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Data and information sourced from the following organizations and studies.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Government & Transit Agencies */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Government & Transit</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.nyc.gov/html/dot/html/home/home.shtml" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    NYC Department of Transportation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Traffic data, infrastructure projects, and transportation planning</p>
                </li>
                <li>
                  <a 
                    href="https://new.mta.info/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    Metropolitan Transportation Authority (MTA)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Subway performance statistics and transit ridership data</p>
                </li>
                <li>
                  <a 
                    href="https://www.nyc.gov/content/visionzero/pages/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    Vision Zero NYC
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Traffic safety data and cyclist/pedestrian injury statistics</p>
                </li>
              </ul>
            </div>

            {/* Advocacy & Research */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advocacy & Research</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.transalt.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    Transportation Alternatives
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Bike lane safety research and street design advocacy</p>
                </li>
                <li>
                  <a 
                    href="https://www.ridersalliance.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    Riders Alliance
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Transit rider advocacy and service improvement campaigns</p>
                </li>
                <li>
                  <a 
                    href="https://www.census.gov/programs-surveys/acs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                  >
                    U.S. Census Bureau - American Community Survey
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Commute time and transportation mode statistics</p>
                </li>
              </ul>
            </div>

            {/* Studies & Reports */}
            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Studies & Reports</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="text-gray-700">
                  <strong>INRIX Global Traffic Scorecard</strong> - Annual traffic congestion analysis and cost estimates
                </li>
                <li className="text-gray-700">
                  <strong>NYC Mobility Report</strong> - NYC DOT's comprehensive annual transportation data
                </li>
                <li className="text-gray-700">
                  <strong>MTA Capital Program</strong> - Infrastructure modernization plans and timelines
                </li>
                <li className="text-gray-700">
                  <strong>NYC Bicycle Crash Data</strong> - NYPD collision data and Vision Zero analysis
                </li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
        {/* Footer */}
        <div className="bg-gray-900 text-white py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">
              Fei Zheng - Creative Process Online Final Project
            </p>
          </div>
        </div>
        
      </div>
      
    );
  }