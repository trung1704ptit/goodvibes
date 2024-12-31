import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 fade-in-up">999 Global Clients</h2>
          <h3 className="text-xl text-gray-700 fade-in-up">Trust GoodVibesITSolution</h3>
          <p className="text-lg text-gray-500 fade-in-up">
            The #1 recruiter agency in Singapore for 2 years.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center bg-white p-6 rounded-lg fade-in-up">
            <h4 className="text-xl font-medium text-gray-900">World-Class Support</h4>
            <p className="text-base text-gray-600">
              We build long-term professional relationships with our customers that you can rely on & trust.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center bg-white p-6 rounded-lg fade-in-up">
            <h4 className="text-xl font-medium text-gray-900">Documentation and Tutorials</h4>
            <p className="text-base text-gray-600">
              Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center bg-white p-6 rounded-lg fade-in-up">
            <h4 className="text-xl font-medium text-gray-900">Built In House</h4>
            <p className="text-base text-gray-600">
              Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center bg-white p-6 rounded-lg fade-in-up">
            <h4 className="text-xl font-medium text-gray-900">Free Lifetime Updates</h4>
            <p className="text-base text-gray-600">
              Your website will receive free & regular updates, compatible with industry standards & trends, for life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
