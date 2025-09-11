import React from 'react';
import { Heart, Users, Home, Droplets, Utensils, Book, School, Play, DollarSign } from 'lucide-react';

const AboutHadel = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12" id='story'>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Family Struggling for Survival</h1>
        <div className="w-24 h-1 bg-red-500 mx-auto"></div>
      </div>

      {/* Donation Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Help Hadel's Family Today</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Raised</span>
            <span className="font-semibold">$100</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '1%' }}></div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-600">Goal: $10,000</span>
            <span className="text-gray-600">1%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-2" />
            <span>3 donors</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Heart size={16} className="mr-2" />
            <span>0 shares</span>
          </div>
        </div>

        <div className="mb-6">
          <a 
            href="https://flutterwave.com/donate/g4uabza00wyx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 text-center flex items-center justify-center"
          >
            <DollarSign size={18} className="mr-2" />
            Donate Now
          </a>
        </div>
        
        <p className="text-center text-gray-500 text-sm mb-6">
          Your donation is secure and will make a real difference.
        </p>

        <div className="border-t pt-4">
          <h3 className="font-medium text-gray-900 mb-2 text-center">Recent Donors</h3>
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
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Video Section */}
        <div className="relative">
          <div className="h-0 pb-[56.25%] relative">
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
              Hadel is a courageous mother of four children displaced by violence. They now live in a crowded tent, 
              struggling daily for basic necessities like food, clean water, and safety.
            </p>
          </div>

          {/* Current Situation */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Home className="mr-2 text-red-500" size={24} />
              Their Current Reality
            </h2>
            <p className="text-gray-700 leading-relaxed">
              "Our life now is a fight for survival," Hadel shares. "We live in a tent with many others in similar 
              situations. Our home was destroyed, and we struggle for food and clean water every day."
            </p>
          </div>

          {/* Children's Condition */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Heart className="mr-2 text-red-500" size={24} />
              The Children's Struggle
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The children suffer from hunger and fear due to constant noise from drones and guns. Hadel comforts them 
              with stories and play, creating moments of normalcy in their difficult circumstances.
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
                  <p className="text-gray-700 text-sm">Scarce food resources with children often going hungry.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Droplets className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Contaminated Water</h3>
                  <p className="text-gray-700 text-sm">Limited access to clean water causing health concerns.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <Book className="text-green-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Education Disruption</h3>
                  <p className="text-gray-700 text-sm">No access to schooling for the children.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <School className="text-purple-600" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Unsafe Environment</h3>
                  <p className="text-gray-700 text-sm">Constant fear from ongoing conflict and violence.</p>
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
  );
};

export default AboutHadel;