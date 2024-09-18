/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const LatestNewsCardMbl = ({ item }) => {
  return (
    <div>
      <article key={item.url} className="shadow-lg p-4 rounded-3xl">
        <Link to={item.url}>
          <div className="flex gap-2">
            <div className="w-1/2">
              <img src={item.image} alt={item.title} className="rounded-3xl h-full object-cover" />
            </div>
            <div className="w-1/2">
              <div className="flex gap-1 items-center mt-2 ">
                <img src={item.source.icon} className="h-5 w-5 bg-red-700 rounded-full object-cover" alt="" />
                <span className="text-sm">{item.source?.name}</span>
              </div>
              <h4 className="font-bold my-2">{item.title}</h4>
              <p className="text-sm mb-1">{item.description.slice(0, 100)}...</p>

              <div className="flex gap-3 items-center">
                <p className="text-red-500 font-semibold">{item.category}</p>
                <div className="h-1 w-1 rounded-full bg-gray-600 -mb-1"></div>
                <span className="text-xs">{item.date}</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default LatestNewsCardMbl;
