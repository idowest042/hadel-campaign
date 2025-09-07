import React from 'react';
import { Heart, Users, Home, Droplets, Utensils, Book, School, Play, DollarSign } from 'lucide-react';

const AboutHadel = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12" id='story'>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Family Struggling for survival</h1>
        <div className="w-24 h-1 bg-red-500 mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Video Section */}
            <div className="relative">
              <div className="h-0 pb-[56.25%] relative"> {/* 16:9 aspect ratio */}
                <iframe 
                  src="https://www.youtube.com/embed/CxOjjX_7Muk"
                  className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Hadel's Story"
                ></iframe>
              </div>
              <div className="absolute bottom-4 left-4 bg-red-600 text-white py-1 px-3 rounded-full text-sm font-medium flex items-center">
                <Play size={14} className="mr-1" />
                Watch our story
              </div>
            </div>

            <div className="p-8">
              {/* Introduction */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="mr-2 text-red-500" size={24} />
                  Meet Hadel's Family
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Hadel is a courageous mother of four beautiful children: Zaina, Malak, Celine, and Hassan. 
                  Until recently, they lived a simple but happy life together. Now, they find themselves among 
                  the countless families displaced by violence and destruction, fighting each day for survival.
                </p>
              </div>

              {/* Current Situation */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Home className="mr-2 text-red-500" size={24} />
                  Their Current Reality
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hadel and her children now inhabit the debris of their former life. They live in a crowded tent, 
                  displaced by violence that has taken everything from them. The necessities most of us take for 
                  granted—food, clean water, medicine, and adequate clothing—are no longer available to them.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  "My life became a nightmare," Hadel shares. "Our life now is a fight for survival, trying to get 
                  to the next day. We are fighting for food, and water is dirty. Our home was destroyed, we live in 
                  a tent we got last year and then shared with so many people in an afflicted situation."
                </p>
              </div>

              {/* Children's Condition */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="mr-2 text-red-500" size={24} />
                  The Children's Struggle
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The children are weak and suffer continuous pain due to hunger. They sleep bundled together on a 
                  single mat, with the younger ones sometimes getting crushed. The constant noise of drones and guns 
                  frightens them, and they often cry. To comfort them, Hadel tells stories and plays with them, 
                  creating moments of normalcy in their chaotic world.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { name: 'Zaina', age: '9 years old' },
                    { name: 'Malak', age: '7 years old' },
                    { name: 'Celine', age: '5 years old' },
                    { name: 'Hassan', age: '3 years old' }
                  ].map((child, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 font-semibold">{child.name.charAt(0)}</span>
                      </div>
                      <h3 className="font-medium text-gray-900">{child.name}</h3>
                      <p className="text-sm text-gray-600">{child.age}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Challenges */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Daily Challenges</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Utensils className="text-red-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Food Insecurity</h3>
                      <p className="text-gray-700 text-sm">The family fights over scarce food resources, with the strongest getting priority over the children.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Droplets className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Contaminated Water</h3>
                      <p className="text-gray-700 text-sm">Access to clean water is limited, leading to health concerns for the vulnerable children.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Book className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Education Disruption</h3>
                      <p className="text-gray-700 text-sm">The children dream of returning to school but currently have no access to education.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <School className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Unsafe Environment</h3>
                      <p className="text-gray-700 text-sm">Constant noise from drones and guns creates a terrifying environment for the children.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final Message */}
              <div className="mt-10 text-center">
                <p className="text-gray-600 italic">
                  "Thank you for standing with them in this time of unimaginable hardship."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Donation Section */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Help Hadel's Family Today</h2>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Raised</span>
                <span className="font-semibold">$100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '1%' }}></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Goal: $10,000</span>
                <span className="text-gray-600">1%</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center text-gray-600 mb-2">
                <Users size={16} className="mr-2" />
                <span>3 donors</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Heart size={16} className="mr-2" />
                <span>0 shares</span>
              </div>
            </div>

            <a 
              href="https://flutterwave.com/donate/g4uabza00wyx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg mb-4 transition duration-200 text-center"
            >
              <DollarSign size={18} className="inline mr-2" />
              Donate Now
            </a>
            
            <p className="text-center text-gray-500 text-sm mb-6">
              Your donation is secure and will make a real difference.
            </p>

            <div className="border-t pt-4">
              <h3 className="font-medium text-gray-900 mb-2">Recent Donors</h3>
              <div className="space-y-2">
                {[
                  { name: 'Anonymous', amount: '$50', time: '2 days ago' },
                  { name: 'Sarah M.', amount: '$30', time: '3 days ago' },
                  { name: 'Michael T.', amount: '$20', time: '4 days ago' }
                ].map((donor, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{donor.name}</span>
                    <div className="text-right">
                      <span className="text-green-600 font-medium">{donor.amount}</span>
                      <div className="text-gray-500 text-xs">{donor.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-xs mt-3">
                Be the next to help!
              </p>
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="font-medium text-gray-900 mb-2">Share this campaign</h3>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHadel;