import React, { useState, useEffect, FormEvent } from "react";
import { Button, Flex, Heading, Text, TextField, View,
   WithAuthenticatorProps, withAuthenticator, Card, Image, 
   Badge, useTheme, Collection, Divider} from "@aws-amplify/ui-react";


import "@aws-amplify/ui-react/styles.css";
import { listBusinesses } from "../../graphql/queries";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

const BusinessView = ({ match }) => {
  const [showModal, setShowModal] = useState(false);
  const [businesses, setBusiness] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //@@@@@@@@@@@@@@

  useEffect(() => {
    fetchBusiness();
  }, []);

  async function fetchBusiness() {
    const apiBusinessData = await client.graphql({ query: listBusinesses });
    const businessFromAPI = apiBusinessData.data.listBusinesses.items;
    setBusiness(businessFromAPI);
    console.log("Retrieved businesses", businessFromAPI);
  }

  // const items = [
  //   {
  //     title: 'Milford - Room #1',
  //     badges: ['Waterfront', 'Verified'],
  //   },
  //   {
  //     title: 'Milford - Room #2',
  //     badges: ['Mountain', 'Verified'],
  //   },
  // ];
  return (
    // <section className="main container section">

    //   <div className="ssecTitle">
    //     <h3 className="title">
    //       Featured Businesses
    //     </h3>
    //   </div>

    //   <div className="secContent grid">
    //     Data.map(())

    //   </div>
    // </section>
    
    <Collection
      items={businesses}
      type="list"
      direction="row"
      gap="20px"
      wrap="nowrap"
    >
      {(item, index) => (
        <Card
          key={index}
          borderRadius="medium"
          maxWidth="20rem"
          variation="outlined"
        >
          <Image
            src={`https://howardpreneurnetworkac918fdfec654a55b833b713884175800-traven.s3.amazonaws.com/public/${item.businessImagePath}`}
            alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
          />
          <View padding="xs">
            <Flex>
                <Badge
                  
                  backgroundColor={
                    item.category === 'Waterfront' ? 'blue.40' 
                    : item.category === 'Mountain' ? 'green.40' : 'yellow.40'}
                >
                  {item.category}
                </Badge>
            </Flex>
            <Divider padding="xs" />
            <Heading padding="medium">{item.name}</Heading>
            <Heading padding="medium">{item.description}</Heading>
            <Button variation="primary" isFullWidth>
              Details
            </Button>
          </View>
        </Card>
      )}
    </Collection>
  );
};

export default BusinessView;
