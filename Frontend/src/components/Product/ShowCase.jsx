import React from 'react';
import { Link } from 'react-router-dom';

function ShowCase() {
  return (
    <>
      <div className="showcase-section flex justify-center items-center py-20 bg-red-600 mx-auto mt-64" style={{ maxWidth: '90%', width: '1800px' }}>
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold">NEW styles, MORE SALE</h2>
          <p className="text-2xl md:text-3xl mt-4">Up to 60% off</p>
          <p className="text-lg md:text-xl mt-2">First ever offers on new styles</p>
        </div>
      </div>

      <div className="image-banner-section mt-16 flex flex-col items-center relative">
        <img
          src="https://image.hm.com/content/dam/global_campaigns/season_00/kids/4090a/4090A-3x2-disneys-mickey-mouse-x-keith-haring-kids.jpg?imwidth=2160"
          alt="Disney's Mickey Mouse x Keith Haring"
          className="w-full h-auto max-w-4xl"
          style={{ height: '600px', width: '200%' }}
        />
        <div className="absolute top-80 inset-0 flex flex-col justify-center items-center  text-white pb-8">
          <p className="text-2xl md:text-3xl font-bold mb-4">Disney's Mickey Mouse x Keith Haring</p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200">Shop 2-8yr old</button>
            <button className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200">Shop 9-12yr old</button>
          </div>
        </div>
      </div>

      <div className="image-banner-section2 mt-16 flex flex-col items-center relative">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOzD2GRpm0U-3OlRSOILasfjLUd9EB3Itt3zfzStlDN82xFmydPnps_yLbxrOeSKAFlIPlb-k0flEmDu2vr0D2Ytz5HP1l7V31lKZEo_E7kZBMGgHvXlxFX8v5K_KLbvtsvga7Z650Jyk/s1600/IMG_3479.jpg"
          alt="Disney's Mickey Mouse x Keith Haring"
          className="w-full h-auto max-w-4xl"
          style={{ height: '1200px', width: '200%' }}
        />
        <div className="absolute top-40 inset-0 flex flex-col justify-center items-center text-white pb-8">
          <p className="text-3xl md:text-4xl font-bold mb-2">NEW ARRIVALS</p>
          <p className="text-4xl md:text-6xl font-bold mb-2">Subtle serenity</p>
          <p className="text-xl md:text-2xl mb-4">Flowy silhouettes in calm hues with a subtle hint of sparkle.</p>
          <Link to="/Product1">
              <button className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200">Shop now</button>
          </Link>
        </div>
      </div>

      <div className="image-banner-section3 mt-16 flex flex-col items-center relative">
        <img
          src="https://i.pinimg.com/564x/cf/23/06/cf2306a28dc5aff26fcd13100193eecd.jpg"
          alt="Disney's Mickey Mouse x Keith Haring"
          className="w-full h-auto max-w-4xl"
          style={{ height: '1200px', width: '200%' }}
        />
        <div className="absolute top-40 inset-0 flex flex-col justify-center items-center text-white pb-8">
          <p className="text-3xl md:text-4xl font-bold mb-2">NEW ARRIVALS</p>
          <p className="text-4xl md:text-6xl font-bold mb-2">Subtle serenity</p>
          <p className="text-xl md:text-2xl mb-4">Flowy silhouettes in calm hues with a subtle hint of sparkle.</p>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200">Shop now</button>
        </div>
      </div>
    </>
  );
}

export default ShowCase;
