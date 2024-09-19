// src/App.js

import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import './App.css';
import { latestNews, businessNews, sportsNews } from './data';
import NewsCard from './NewsCard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Latest News Section */}
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-xl mt-8 text-start mb-4">Latest News</h2>
          <a href="/latest-news" className="flex items-center gap-1 font-bold text-blue-500">
            View All <FaArrowRight />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.map((article, index) => (
            <NewsCard key={index} article={article} section="Latest News" />
          ))}
        </div>
      </div>

      {/* Business and Sports News Sections */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          {/* Business Section */}
          <div className="w-full md:w-1/2 pr-2 mb-8 md:mb-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Business</h2>
              <a href="/business" className="flex items-center gap-1 font-bold text-blue-500">
                View All <FaArrowRight />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {businessNews.map((article, index) => (
                <NewsCard key={index} article={article} section="Business" />
              ))}
            </div>
          </div>

          {/* Sports Section */}
          <div className="w-full md:w-1/2 pl-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Sports</h2>
              <a href="/sports" className="flex items-center gap-1 font-bold text-blue-500">
                View All <FaArrowRight />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sportsNews.map((article, index) => (
                <NewsCard key={index} article={article} section="Sports" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
