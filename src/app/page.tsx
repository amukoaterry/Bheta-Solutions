import React from 'react';

const BhetaSolutions = () => {
  return (
    <div className="flex flex-col items-center">


      <div className="w-full bg-gray-900 text-white py-12 px-6 text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          style={{ fontFamily: '"Darker Grotesque"' }}
        >
          We are Bheta Solutions
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
          style={{ fontFamily: '"Darker Grotesque"' }}
        >
          Bheta Solution by Taji team is dedicated to safeguarding consumers in Kenya from recalled medications. 
          The app delivers real-time alerts and comprehensive details on drug recalls, including manufacturer 
          information, recall dates, and reasons for recalls, empowering users to make informed health decisions 
          and combating the threat of recalled drugs.
        </p>
      </div>



      <div className="py-12 px-6 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-8"
          style={{ fontFamily: '"Darker Grotesque"' }}
        >
          Why Choose Us
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">


          <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 shadow-xl rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900"
              style={{ fontFamily: '"Darker Grotesque"' }} >
              Pharmacy Finder
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700"
              style={{ fontFamily: '"Darker Grotesque"' }} >
              We help consumers to make the right decision on which pharmacy is licensed for buying drugs.
            </p>
          </div>


          <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 shadow-xl rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gray-900"
              style={{ fontFamily: '"Darker Grotesque"' }}> Scan </h3>


            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700"style={{ fontFamily: '"Darker Grotesque"' }} >
              We help consumers to identify if the drug is recalled or not, ensuring our consumers' health is safe.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BhetaSolutions;
