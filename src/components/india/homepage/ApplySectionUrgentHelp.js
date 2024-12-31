import { FaHeadset, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ApplySectionUrgentHelp = () => {
  const contactMethods = [
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: '24/7 Support',
      info: '+1 (555) 123-4567',
      gradient: 'from-primary to-tertiary',
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: 'WhatsApp',
      info: '+1 (555) 987-6543',
      gradient: 'from-accent to-primary',
    },
    {
      icon: <MdEmail className="w-5 h-5" />,
      title: 'Email Support',
      info: 'support@indianvisa.com',
      gradient: 'from-tertiary to-accent',
    },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center mb-6 space-x-3">
        <div className="relative">
          <div className="absolute inset-0 scale-150 blur-xl bg-gradient-to-r from-primary via-accent to-tertiary opacity-20"></div>
          <div className="relative flex items-center justify-center w-12 h-12 text-white rounded-xl bg-gradient-to-r from-primary to-tertiary">
            <FaHeadset className="w-6 h-6" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
          Urgent Assistance
        </h3>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="relative group">
            <div
              className="absolute inset-0 transition-transform duration-500 bg-gradient-to-r rounded-xl opacity-5 group-hover:opacity-10 group-hover:scale-105"
              style={{
                background: `linear-gradient(to right, var(--tw-gradient-stops))`,
              }}
            ></div>
            <div className="relative p-4 transition-all duration-300 border-2 rounded-xl border-primary/10 hover:border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/5">
              <div className="flex items-center space-x-3">
                <div
                  className={`flex items-center justify-center w-10 h-10 text-white rounded-lg bg-gradient-to-r ${method.gradient} transition-transform duration-300 group-hover:scale-110`}
                >
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {method.title}
                  </p>
                  <p className="font-semibold break-all text-secondary">
                    {method.info}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="p-4 mt-6 text-sm text-center text-gray-500 border-2 rounded-xl border-primary/10 bg-primary/5">
        Available 24/7 for emergency visa assistance and inquiries
      </div>
    </div>
  );
};

export default ApplySectionUrgentHelp;
