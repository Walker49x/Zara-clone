import React, { useState } from 'react';

const ProductReviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Jane Doe',
      rating: 4,
      comment: 'Great product, very comfortable!',
      date: '2023-05-15'
    },
    {
      name: 'John Smith',
      rating: 5,
      comment: 'Excellent quality and fit.',
      date: '2023-06-01'
    }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, { ...newReview, date: new Date().toISOString().split('T')[0] }]);
      setNewReview({ name: '', rating: 0, comment: '' });
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-lg font-semibold text-gray-800">Customer Reviews</h2>
      <div className="mt-4 space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-600">{review.date}</p>
            </div>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((star, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.428L24 9.335l-6 5.845 1.42 8.299L12 18.785l-7.42 3.694L6 15.18 0 9.335l8.332-1.32z" />
                </svg>
              ))}
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-md font-semibold text-gray-800">Leave a Review</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value={0}>Select rating</option>
              {[...Array(5)].map((star, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} Star</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 uppercase font-semibold hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;
