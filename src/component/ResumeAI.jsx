import React, { useState } from "react";

const ResumeAI = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a resume first.");
      return;
    }

    setIsLoading(true);

    // Simulate API call for analysis and ATS score
    setTimeout(() => {
      setAnalysis({
        strengths: ["Strong technical skills", "Relevant experience"],
        weaknesses: ["Lack of certifications", "Grammar issues"],
      });
      setAtsScore(85); // Simulated ATS score
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          AI Resume Analysis
        </h1>

        {/* Upload Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <div className="text-center">
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="bg-blue-100 p-6 rounded-lg border-2 border-dashed border-blue-300 hover:bg-blue-200 transition duration-300">
                <p className="text-blue-900 font-semibold">
                  {file ? file.name : "Upload Your Resume (PDF or DOC)"}
                </p>
              </div>
            </label>
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              {isLoading ? "Analyzing..." : "Analyze Resume"}
            </button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysis && (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              HR Analysis
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-green-600">Strengths</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600">Weaknesses</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {analysis.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ATS Score */}
        {atsScore && (
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">ATS Score</h2>
            <div className="flex items-center space-x-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${atsScore}%` }}
                ></div>
              </div>
              <span className="text-xl font-bold text-blue-900">{atsScore}%</span>
            </div>
            <p className="text-gray-600 mt-2">
              Your resume is {atsScore >= 80 ? "highly" : "moderately"} compatible with ATS systems.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAI;