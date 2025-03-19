import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
      {/* Job Image */}
      <div className="h-48 bg-blue-100 flex items-center justify-center">
        <img
          src={job.companyLogo}
          alt={job.companyName}
          className="h-16 w-16 object-cover rounded-full"
        />
      </div>

      {/* Job Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-900">{job.jobTitle}</h3>
        <p className="text-gray-600 mt-2">{job.companyName}</p>
        <p className="text-gray-500 text-sm mt-2">{job.location}</p>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {job.jobType}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            {job.experienceLevel}
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
            {job.salary}
          </span>
        </div>

        {/* Apply Button */}
        <div className="mt-6">
          <a
            href={job.applyLink}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 block text-center"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;