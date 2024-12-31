'use client';
import PartiallyFillForm from '@/components/homePage/PartiallyFillForm';
import PaymentForCompletedForm from '@/components/homePage/PaymentForCompletedForm';
import VisaStatusForm from '@/components/homePage/VisaStatusForm';
import ApplySection from '@/components/india/homepage/ApplySection';
import Banner from '@/components/india/homepage/Banner';
import { useFormContext } from '@/context/formContext';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const { dispatch } = useFormContext();
  const [isPaymentForCompletedFormOpen, setPaymentForCompletedFormOpen] =
    useState(false);
  const [isPartiallyFillFormOpen, setPartiallyFillFormOpen] = useState(false);
  const [isVisaStatusFormOpen, setVisaStatusFormOpen] = useState(false);

  const handlePartiallyFillFormOpen = () => {
    setPartiallyFillFormOpen(prev => !prev);
  };

  const handlePaymentForCompletedFormOpen = () => {
    setPaymentForCompletedFormOpen(prev => !prev);
  };
  const handleVisaStatusFormOpen = () => {
    setVisaStatusFormOpen(prev => !prev);
  };

  useEffect(() => {
    localStorage.removeItem('formId');
  }, [dispatch]);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-success/5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/assets/images/india/common/pattern.png')] bg-repeat opacity-5 pointer-events-none"></div>

        {/* Main Content */}
        <Banner />

        {/* Action Buttons Section */}
        <div className="container relative w-full py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 px-4 md:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Apply for India */}
            <Link href="/visa/step-one" className="group">
              <div className="relative flex flex-col h-full p-8 transition-all duration-300 bg-white border-2 border-transparent rounded-2xl hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-success/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4">
                  <span className="text-xl font-semibold text-secondary">
                    Apply for e-Visa
                  </span>
                  <span className="text-sm text-gray-500">
                    Start New Application
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-xl bg-gradient-to-r from-primary to-success group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            {/* Amend or Complete */}
            <button
              onClick={() => setPartiallyFillFormOpen(true)}
              className="group w-full"
            >
              <div className="relative flex flex-col h-full p-8 transition-all duration-300 bg-white border-2 border-transparent rounded-2xl hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4">
                  <span className="text-xl font-semibold text-secondary">
                    Resume Application
                  </span>
                  <span className="text-sm text-gray-500">
                    Continue Saved Form
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-xl bg-gradient-to-r from-accent to-primary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Make Payment */}
            <button
              onClick={() => setPaymentForCompletedFormOpen(true)}
              className="group w-full"
            >
              <div className="relative flex flex-col h-full p-8 transition-all duration-300 bg-white border-2 border-transparent rounded-2xl hover:border-success/20 hover:shadow-2xl hover:shadow-success/5 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-success/10 via-primary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4">
                  <span className="text-xl font-semibold text-secondary">
                    Complete Payment
                  </span>
                  <span className="text-sm text-gray-500">
                    For Submitted Form
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-xl bg-gradient-to-r from-success to-primary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            {/* Visa Status */}
            <button
              onClick={() => setVisaStatusFormOpen(true)}
              className="group w-full"
            >
              <div className="relative flex flex-col h-full p-8 transition-all duration-300 bg-white border-2 border-transparent rounded-2xl hover:border-orange/20 hover:shadow-2xl hover:shadow-orange/5 group-hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange/10 via-primary/5 to-transparent rounded-bl-full -z-10"></div>
                <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4">
                  <span className="text-xl font-semibold text-secondary">
                    Track Status
                  </span>
                  <span className="text-sm text-gray-500">
                    Check Application Progress
                  </span>
                  <span className="inline-flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 rounded-xl bg-gradient-to-r from-orange to-primary group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <ApplySection />
      </div>

      {/* Modals */}
      <PartiallyFillForm
        isFormModalOpen={isPartiallyFillFormOpen}
        handleFormModal={handlePartiallyFillFormOpen}
      />
      <PaymentForCompletedForm
        isFormModalOpen={isPaymentForCompletedFormOpen}
        handleFormModal={handlePaymentForCompletedFormOpen}
      />
      <VisaStatusForm
        isFormModalOpen={isVisaStatusFormOpen}
        handleFormModal={handleVisaStatusFormOpen}
      />
    </>
  );
};

export default Home;
