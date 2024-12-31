import { FaPassport, FaPlane, FaHotel, FaUserTie } from 'react-icons/fa';
import { MdHealthAndSafety, MdEventAvailable } from 'react-icons/md';
import Link from 'next/link';

const ApplySectionContentSection = () => {
  const visaTypes = [
    {
      icon: <FaPlane className="w-6 h-6" />,
      title: 'Tourist e-Visa',
      description:
        'For leisure travel, sightseeing, and casual visits to India',
      gradient: 'from-primary to-tertiary',
      duration: 'Up to 180 days',
    },
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: 'Business e-Visa',
      description: 'For business meetings, trade, and commercial activities',
      gradient: 'from-accent to-primary',
      duration: 'Up to 365 days',
    },
    {
      icon: <MdHealthAndSafety className="w-6 h-6" />,
      title: 'Medical e-Visa',
      description: 'For medical treatment and wellness procedures in India',
      gradient: 'from-tertiary to-accent',
      duration: 'Up to 60 days',
    },
    {
      icon: <MdEventAvailable className="w-6 h-6" />,
      title: 'Conference e-Visa',
      description: 'For attending conferences, seminars, and workshops',
      gradient: 'from-primary to-accent',
      duration: 'Up to 30 days',
    },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center mb-8 space-x-3">
        <div className="relative">
          <div className="absolute inset-0 scale-150 blur-xl bg-gradient-to-r from-primary via-accent to-tertiary opacity-20"></div>
          <div className="relative flex items-center justify-center w-12 h-12 text-white rounded-xl bg-gradient-to-r from-primary to-tertiary">
            <FaPassport className="w-6 h-6" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Available e-Visa Types
          </h3>
          <p className="text-sm text-gray-500">
            Select the most suitable visa category for your visit
          </p>
        </div>
      </div>

      {/* Visa Types Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {visaTypes.map((type, index) => (
          <div key={index} className="relative group">
            <div
              className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r rounded-xl opacity-5 group-hover:opacity-10 group-hover:scale-105"
              style={{
                background: `linear-gradient(to right, var(--tw-gradient-stops))`,
              }}
            ></div>
            <div className="relative p-5 transition-all duration-300 border-2 rounded-xl border-primary/10 hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5">
              <div className="flex items-start space-x-4">
                <div
                  className={`flex items-center justify-center flex-shrink-0 w-12 h-12 text-white rounded-lg bg-gradient-to-r ${type.gradient} transition-transform duration-300 group-hover:scale-110`}
                >
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 text-lg font-semibold text-secondary">
                    {type.title}
                  </h4>
                  <p className="mb-2 text-sm text-gray-600">
                    {type.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Duration: {type.duration}
                    </span>
                    <Link
                      href="/visa/step-one"
                      className="text-sm font-medium text-transparent transition-all duration-300 bg-clip-text bg-gradient-to-r from-primary to-tertiary group-hover:scale-105"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="p-4 mt-6 text-sm text-center text-gray-500 border-2 rounded-xl border-primary/10 bg-primary/5">
        Processing time: 3-5 business days for most applications
      </div>
    </div>
  );
};

export default ApplySectionContentSection;
