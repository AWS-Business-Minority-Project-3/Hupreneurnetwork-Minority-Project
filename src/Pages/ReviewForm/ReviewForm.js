import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createReview } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { Heading } from "../../Components/Heading";
import { MyIcon } from "../../Components/MyIcon";
import { TypeEmail } from "../../icons/TypeEmail";
import { TypePhone } from "../../icons/TypePhone";
import "./ReviewForm.css";

const client = generateClient();

const ReviewForm = () => {
    const navigate = useNavigate();
    const { businessId } = useParams();
    const [reviewText, setReviewText] = useState("");
    const { userId } = useParams();
    const title = "Review Title"; // Default review title
    const date = new Date().toISOString().split("T")[0];
  
    const handleSubmitReview = async () => {
      try {
        await client.graphql({ query: createReview, variables: { input: { businessId, userId, title, date, reviewText } } });
        // Navigate back to the business page after submitting the review
        navigate(`/entrepreneur/${businessId}`);
      } catch (error) {
        console.error("Error submitting review", error);
      }
    };

  return (
    <div className="leave-a-review">
      <div className="frame-5">
        <Heading className="heading-instance" label="Leave a Review" level="one" />
        <p className="p">We appreciate your feedback!</p>
      </div>
      <div className="review-form">
        <textarea
          className="review-textarea"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          rows={6}
        />
        <button className="submit-review-button" onClick={handleSubmitReview}>Submit Review</button>
      </div>
      <div className="frame-6">
        <div className="frame-7">
          <div className="frame-8">
            <TypeEmail className="my-icon-2" />
            <div className="text-wrapper-3">By email</div>
            <a href="mailto:HUEntrepenuer@gmail.com" rel="noopener noreferrer" target="_blank">
              <img className="huentrepenuer-gmail" alt="Huentrepenuer gmail" src="/img/huentrepenuer-gmail-com.png" />
            </a>
          </div>
          <div className="frame-8">
            <TypePhone className="my-icon-2" />
            <div className="text-wrapper-3">By phone</div>
            <div className="text-wrapper-4">+1 (123) 456-7890</div>
          </div>
          <div className="frame-8">
            <MyIcon type="location" />
            <div className="text-wrapper-3">In person</div>
            <p className="element-main-street">
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const getCurrentUserId = async () => {
//     try {
//       const user = await Auth.currentAuthenticatedUser();
//       return user.attributes.sub; // Assuming 'sub' is the user ID attribute
//     } catch (error) {
//       console.error('Error fetching current user:', error);
//       return null;
//     }
// };

export default ReviewForm;
