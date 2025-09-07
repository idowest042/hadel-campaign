import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Globe, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Campaign Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Heart className="h-6 w-6 text-red-600" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold">Help Hadel & Her Family</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Join us in supporting Hadel and her four children as they rebuild their lives after losing everything. 
              Your donation makes a direct impact on their survival and future.
            </p>
            <div className="flex items-center text-gray-400 mb-2">
              <Shield size={16} className="mr-2" />
              <span className="text-sm">Verified • Secure Donations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#story" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="https://flutterwave.com/donate/g4uabza00wyx" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">hadelcampaign@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+1 (555) 475-4624</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Campaign managed by verified volunteers</span>
              </div>
            </div>

            {/* Social Media */}
           
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-center text-gray-400 text-sm mb-4">Trust & Security</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              <Shield size={14} className="text-green-400 mr-2" />
              <span className="text-xs">SSL Secure</span>
            </div>
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              <Heart size={14} className="text-red-400 mr-2" />
              <span className="text-xs">Verified Campaign</span>
            </div>
            <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-xs">Flutterwave Protected</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Help Hadel & Her Family. All rights reserved.
            </p>
            
          
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600 text-xs">
              This campaign is managed by trusted volunteers. Funds are transferred directly to Hadel for essential needs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;