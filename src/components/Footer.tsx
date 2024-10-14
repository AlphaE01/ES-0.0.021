import React from 'react';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">ADP Engineering Society</h3>
            <p>Taylor's University</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <MapPin size={20} className="mr-2" />
              <p>No. 1, Jalan Taylor's, 47500 Subang Jaya, Selangor, Malaysia</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={20} className="mr-2" />
              <a href="mailto:taylorsengineering2021@gmail.com">taylorsengineering2021@gmail.com</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/tadp.engineering/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com/company/adp-engineering-society" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} ADP Engineering Society. All rights reserved.</p>
          <Link to="/admin" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">Admin Portal</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;