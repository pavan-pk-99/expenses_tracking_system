import { Link } from "react-router-dom";
import './Developers.css'; // Import your custom CSS for animations

const Developers = () => {
  return (
    <div className="font-['Roboto'] bg-gray-500 min-h-screen">
      <Link to="/">
        <div className=" absolute top-7 left-10 cursor-pointer animate-fadeIn " >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      <div className="pt-8">
        <h1 className="font-bold text-3xl flex ml-auto mr-auto  bg-gray-500  w-fit p-3 rounded-xl px-6 text-white animate-fadeIn">
          About This Website
        </h1>
      </div>

      {/* About This Website Section */}
      <div className="text-center pt-10 px-5 bg-gray-800 text-white animate-fadeIn mx-10 rounded-xl">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-xl mt-8 mx-6 mb-10">
          Welcome to our Personal Expense Tracker website! Our platform is designed to help you manage and monitor your personal finances with ease. By offering an intuitive interface, our tool enables you to record your expenses, categorize them, and analyze your spending habits.
         
          We believe in the importance of financial awareness and aim to provide you with valuable insights to make informed decisions about your money. Whether you're tracking daily expenses or planning your budget, our website is here to assist you in achieving your financial goals.
          
          Our team is committed to continuously improving the website to meet your needs and enhance your experience. Thank you for choosing us as your financial tracking solution!
        </p>
      </div>

      {/* How It Works Section */}
      <div className="text-center pt-10 px-5 bg-gray-800 text-white animate-fadeIn mx-10 rounded-2xl">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="space-y-12">
          <div className="flex items-start space-x-4 md:space-x-8 mx-auto max-w-4xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-black font-bold text-3xl shadow-lg animate-pulse">
              1
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-semibold mb-4">User Management</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Allow users to create an account and log in.</li>
                <li>Manage user sessions securely.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4 md:space-x-8 mx-auto max-w-4xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-black font-bold text-3xl shadow-lg animate-pulse">
              2
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-semibold mb-4">Expense Management</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Allow users to add new expense entries with the following details: date, amount, category, and description.</li>
                <li>Allow users to view a list of their expenses.</li>
                <li>Allow users to edit or delete existing expense entries.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4 md:space-x-8 mx-auto max-w-4xl">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-black font-bold text-3xl shadow-lg animate-pulse">
              3
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-semibold mb-4">Category Management</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Allow users to categorize their expenses (e.g., food, transportation, entertainment).</li>
                <li>Provide default categories and allow users to create custom categories.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4 md:space-x-8 mx-auto max-w-4xl mb-10">
  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-black font-bold text-3xl shadow-lg animate-pulse">
    4
  </div>
  <div className="text-left flex-1 mb-12"> 
    <h3 className="text-2xl font-semibold mb-4">Summary and Insights</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Provide a summary view that shows total spending for a given time period (e.g., daily, weekly, monthly).</li>
      <li>Display spending by category, allowing users to see which categories they spend the most on.</li>
    </ul>
  </div>
</div>


            

          </div>
        </div>
      </div>
    
  );
};

export default Developers;
