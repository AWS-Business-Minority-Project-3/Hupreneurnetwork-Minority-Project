import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import { listReviews } from "../../graphql/queries";
import "./Reviews.css";

const client = generateClient();

const Reviews = () => {
    const { businessId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, [businessId]);

    const fetchReviews = async () => {
        try {
            const apiReviewsData = await client.graphql({ 
                query: listReviews, 
                variables: { 
                    businessId,
                    filter: {},
                    limit: 10,
                    nextToken: null
                } 
            });
            const reviewsData = apiReviewsData.data.listReviews.items;
            setReviews(reviewsData);
        } catch (error) {
            console.error("Error fetching reviews", error);
        }
    };    

    return (
        <div className="reviews-page">
            <h1>Reviews</h1>
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div key={index} className="review-item">
                        <h3>{review.title}</h3>
                        <p>{review.reviewText}</p>
                        <p>By: {review.userId}</p>
                        <p>Date: {review.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
