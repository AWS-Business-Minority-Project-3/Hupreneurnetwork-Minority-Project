import React, { useState, FormEvent } from 'react';
import {Button, Flex, TextField, View, Authenticator,} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';
import { createReview } from '../../graphql/mutations'
import {v4 as uuid} from 'uuid';

const client = generateClient();

const CreateBusinessReview = () => {

    async function createNewReview(event){

        const form = event.target;
        const formData = new FormData(form);

        event.preventDefault();

        try {

          // Get the user making the request
          const { username, userId, signInDetails } = await getCurrentUser();
          console.log(`The username: ${username}`);
          console.log(`The userId: ${userId}`);
          console.log(`The signInDetails: ${signInDetails}`);

          const newReviewDetails = {
              id: uuid(),
              userId: userId,
              title: formData.get("title"),
              date: "12/12/12",
              reviewText: formData.get("reviewText")
          };

          await client.graphql({
            query: createReview,
            variables: { input: newReviewDetails }
          });

          console.log('Succeeded, data uploaded to dynamoDB')

        } catch (error){
            console.log('Error : ', error);
        }
    }

    return (
      <Authenticator loginMechanism={['email']}>
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
        </Authenticator>
      );

};

export default CreateBusinessReview;

