import { useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
    const location = useLocation();
  const { amount } = location.state || {};


  let date = getCurrentDateTime()
    
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-center mb-4">
        <div className="bg-green-500 rounded-full p-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Payment Successful</h2>
      <p className="text-gray-600 text-center mb-6">
        Thank you for your payment. Your order is being processed.
      </p>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Amount Paid:</span>
          <span className="font-semibold">{amount} ₹</span>
        </div>
      
        <div className="flex justify-between">
          <span className="text-gray-600">Date & Time:</span>
          <span className="font-semibold">{date}</span>
        </div>
      </div>
     
    </div>
  );
};

export default PaymentConfirmation;


function getCurrentDateTime() {
  // Create a new Date object for the current date and time
  const now = new Date();

  // Format date part
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', dateOptions);

  // Format time part
  const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate} at ${formattedTime}`;

  
}