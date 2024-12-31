import { FaPassport, FaFileUpload, FaCheckCircle } from 'react-icons/fa';
import UnderlineTextCenter from '../common/UnderlineTextCenter';
import ApplySectionContentSection from './ApplySectionContentSection';
import ApplySectionUrgentHelp from './ApplySectionUrgentHelp';

const ApplySection = () => {
  const stepData = [
    {
      id: 1,
      title: 'Complete Online Form',
      icon: <FaFileUpload className="w-8 h-8" />,
      description:
        'Fill out your e-Visa application securely with our advanced online system. Track your progress and save for later completion.',
      gradient: 'from-primary to-tertiary',
    },
    {
      id: 2,
      title: 'Document Verification',
      icon: <FaPassport className="w-8 h-8" />,
      description:
        'Upload required documents and photos. Our system verifies your submission in real-time for accuracy and completeness.',
      gradient: 'from-accent to-primary',
    },
    {
      id: 3,
      title: 'Visa Processing',
      icon: <FaCheckCircle className="w-8 h-8" />,
      description:
        'Receive your e-Visa directly via email. Digital format for easy printing and immediate travel authorization.',
      gradient: 'from-tertiary to-accent',
    },
  ];

  return (
    <div className="container pb-16 md:pb-24">
      <div className="grid-cols-12 gap-8 p-4 mx-auto md:grid">
        <div className="col-span-3 mb-6 md:mb-0">
          <div className="h-full p-6 transition-all duration-500 bg-white border-2 shadow-lg rounded-2xl border-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
            <ApplySectionUrgentHelp />
          </div>
        </div>
        <div className="col-span-9">
          <div className="h-full p-6 transition-all duration-500 bg-white border-2 shadow-lg rounded-2xl border-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
            <ApplySectionContentSection />
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="pt-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-tertiary font-display">
            Streamlined e-Visa Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience our efficient three-step application process designed for
            quick and hassle-free Indian e-Visa acquisition
          </p>
        </div>

        <div className="container grid gap-8 md:grid-cols-3">
          {stepData.map((step, index) => (
            <div key={index} className="relative group">
              <div
                className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r rounded-2xl opacity-5 group-hover:opacity-10 group-hover:scale-105"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              ></div>
              <div className="relative p-8 transition-all duration-500 bg-white border-2 rounded-2xl border-primary/5 hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/5">
                <div className="absolute -top-6 left-8">
                  <div className="relative">
                    <div
                      className="absolute inset-0 w-16 h-16 transition-all duration-500 scale-110 opacity-0 blur-lg bg-gradient-to-r group-hover:opacity-20"
                      style={{
                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                    ></div>
                    <div
                      className={`flex items-center justify-center w-12 h-12 text-white transition-transform duration-500 rounded-xl bg-gradient-to-r ${step.gradient} group-hover:scale-110`}
                    >
                      {step.icon}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex items-center mb-4 space-x-2">
                    <span className="flex items-center justify-center w-8 h-8 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-primary to-tertiary">
                      {step.id}
                    </span>
                    <h3 className="text-xl font-semibold text-secondary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {index < stepData.length - 1 && (
                  <div className="absolute z-10 hidden -translate-y-1/2 md:block -right-4 top-1/2">
                    <div className="w-8 h-8 transition-all duration-500 transform rotate-45 border-t-2 border-r-2 border-primary/20 group-hover:scale-110 group-hover:border-primary/40"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Section */}
      <div className="px-8 py-12 mt-24 bg-gradient-to-r from-primary/5 via-accent/5 to-tertiary/5 rounded-2xl backdrop-blur-sm">
        <div className="relative">
          <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
          <div className="relative">
            <h2 className="mb-6 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary font-display">
              Important Travel Advisory
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-center">
              <p className="text-gray-600">
                The Government of India maintains strict regulations regarding
                visa facilitation services. No intermediary is authorized to
                charge additional fees for expedited visa processing. All
                official fees are transparently listed on our platform.
              </p>
              <p className="text-gray-600">
                A valid passport and appropriate visa/e-Visa are mandatory for
                travel to India. Certain travelers may be exempt under bilateral
                agreements. Persons of Indian origin must carry their OCI
                (Overseas Citizen of India) card for seamless entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplySection;
