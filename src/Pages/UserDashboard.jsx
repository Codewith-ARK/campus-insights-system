import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const ThankYouModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
      <p className="text-gray-700">Your feedback has been submitted successfully.</p>
      <button
        onClick={onClose}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Close
      </button>
    </div>
  </div>
);

const UserDashboard = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [satisfaction, setSatisfaction] = useState("");
  const [likedMost, setLikedMost] = useState("");
  const [improvement, setImprovement] = useState("");
  const [recommend, setRecommend] = useState("");

  useEffect(() => {
    const hasSubmitted = localStorage.getItem("feedbackSubmitted");
    if (hasSubmitted) setSubmitted(true);
  }, []);

  const handleSubmit = () => {
    if (satisfaction && likedMost.trim() && improvement.trim() && recommend) {
      const feedback = {
        satisfaction,
        likedMost,
        improvement,
        recommend,
        submittedAt: new Date().toISOString(),
      };

      const allFeedbacks = JSON.parse(localStorage.getItem("userFeedback")) || [];
      allFeedbacks.push(feedback);
      localStorage.setItem("userFeedback", JSON.stringify(allFeedbacks));
      localStorage.setItem("feedbackSubmitted", "true");

      setSubmitted(true);
      setShowModal(true);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <div className="min-h-screen  p-6 flex flex-col items-center">
    <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Feedback Form</h2>

        {submitted ? (
          <p className="text-green-600 text-center font-medium">
            ✅ Feedback already submitted. Thank you!
          </p>
        ) : (
          <>
            {/* Question 1 */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                1. How satisfied are you with our service?
              </label>
              <div className="flex space-x-4">
                {["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="satisfaction"
                      value={option}
                      checked={satisfaction === option}
                      onChange={(e) => setSatisfaction(e.target.value)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                2. What did you like the most?
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded"
                rows="3"
                placeholder="Your answer..."
                value={likedMost}
                onChange={(e) => setLikedMost(e.target.value)}
              />
            </div>

            {/* Question 3 */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                3. What can we improve?
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded"
                rows="3"
                placeholder="Your answer..."
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
              />
            </div>

            {/* Question 4 */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                4. Would you recommend us to others?
              </label>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="recommend"
                    value="Yes"
                    checked={recommend === "Yes"}
                    onChange={(e) => setRecommend(e.target.value)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="recommend"
                    value="No"
                    checked={recommend === "No"}
                    onChange={(e) => setRecommend(e.target.value)}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Submit Feedback
            </button>
          </>
        )}
      </div>

      {showModal && <ThankYouModal onClose={() => setShowModal(false)} />}
        <Footer></Footer>
    </div>
  );
};

export default UserDashboard;

