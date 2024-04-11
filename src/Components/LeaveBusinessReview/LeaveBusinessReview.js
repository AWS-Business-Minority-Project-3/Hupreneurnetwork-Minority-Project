import React, { useState } from 'react';
import { Button, Flex, TextField, View } from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { createReview } from '../../graphql/mutations';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const client = generateClient();

const CreateBusinessReview = () => {
    const navigate = useNavigate();
    const { businessId } = useParams();

    async function createNewReview(event){
        event.preventDefault();

        try {
            // Get the user making the request
            const { userId } = await getCurrentUser();

            const formData = new FormData(event.target);
            const newReviewDetails = {
                id: uuid(),
                userId: userId,
                title: formData.get("title"),
                date: new Date().toISOString().split("T")[0],
                reviewText: formData.get("reviewText")
            };

            await client.graphql({
                query: createReview,
                variables: { input: newReviewDetails }
            });

            // Navigate to the reviews page for the current business
            navigate(`/entrepreneur/${businessId}/reviews`);

            console.log('Succeeded, data uploaded to DynamoDB');
        } catch (error){
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <h2>Leave a Review</h2>
            <View as="form" margin="3rem 0" onSubmit={createNewReview}>
                <Flex direction="column" justifyContent="center">
                    <TextField
                        name="title"
                        placeholder="Review Title"
                        label="Note Business Name"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="reviewText"
                        placeholder="Review Text"
                        label="Note Review Text"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <Button type="submit" variation="primary">
                        Leave Review
                    </Button>
                </Flex>
            </View>
        </div>
    );
};

export default CreateBusinessReview;
