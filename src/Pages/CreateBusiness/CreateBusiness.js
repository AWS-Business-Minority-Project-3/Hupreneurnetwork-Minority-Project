// CreateBusinessPage.js

import React, { useState } from 'react';
import {Button, Flex, TextField, View, Authenticator} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { uploadData } from 'aws-amplify/storage';
import { getCurrentUser } from 'aws-amplify/auth';
import { createBusiness } from '../../graphql/mutations';
import {v4 as uuid} from 'uuid';

const client = generateClient();

const CreateBusiness = () => {

  const [businessProfileImage, setBusinessProfileImage] = useState("");

  async function createNewBusiness(event) {

    const form = event.target;

    event.preventDefault();

    const formData = new FormData(form);
    try {
      
      // Get the user making the request
      const { username, userId, signInDetails } = await getCurrentUser();
      console.log(`The username: ${username}`);
      console.log(`The userId: ${userId}`);
      console.log(`The signInDetails: ${signInDetails}`);

      // Converting image file into blob
      const imageData = new Blob([businessProfileImage], {type: 'image/png'});
      console.log("Converted Image to blob");

      const key = await uploadData({
        key: `${uuid()}.png`,
        data: imageData,
        options: {
          accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          //onProgress // Optional progress callback.
        }
      }).result;

      console.log("Converted Image to key and uploaded to s3");
      console.log('Uploaded key:', key); 

    const newBusinessDetails = {
      userId: userId,
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      website: formData.get("website"),
      category: formData.get("category"),
      description: formData.get("description"),
      businessImagePath: key,
      //appointments: [] 
    };

    console.log("Populated business details");
  
    await client.graphql({
      query: createBusiness,
      variables: { input: newBusinessDetails }
    });

    console.log("Uploaded business details");

      console.log('Succeeded: ', key);
    } catch (error) {
      console.log('Error : ', error);
    }
  }

  return (
    <Authenticator loginMechanism={['email']}>
    <div>
      <h2>Create a New Business</h2>
      
      <View as="form" margin="3rem 0" onSubmit={createNewBusiness}>
        <Flex direction="column" justifyContent="center">
          
          <TextField
            name="name"
            placeholder="Business Name"
            label="Note Business Name"
            labelHidden
            variation="quiet"
            required
            autocomplete="organization"
          />
          <TextField
            name="phone"
            placeholder="Phone Number"
            label="Note Phone Number"
            labelHidden
            variation="quiet"
            required
            autocomplete="tel"
          />
          <TextField
            name="address"
            placeholder="Address"
            label="Note Address"
            labelHidden
            variation="quiet"
            required
            autocomplete="street-address"
          />
          <TextField
            name="website"
            placeholder="Website"
            label="Note Website"
            labelHidden
            variation="quiet"
            required
            autocomplete="url"
          />
          <TextField
            name="category"
            placeholder="Note Category"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
            autocomplete="category"
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
            autocomplete="description"
          />
          <TextField
            name="Image"
            placeholder="Note Image"
            label="Note Image"
            labelHidden
            type="file"
            InputLabelProps={{ shrink: true }}
            variation="quiet"
            required
            autocomplete="off" // Disable autocomplete for file input
            
          />
          <Button type="submit" variation="primary">
            Create Business
          </Button>
        </Flex>
      </View>
    </div>
    </Authenticator>
  );
};

export default CreateBusiness;