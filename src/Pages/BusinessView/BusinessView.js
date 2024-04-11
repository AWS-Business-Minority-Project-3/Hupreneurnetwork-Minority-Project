import React, { useState, useEffect, FormEvent } from "react";
import { Button, Flex, Heading, View, Card, Image, 
   Badge, Collection, Divider} from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";


import "@aws-amplify/ui-react/styles.css";
import { listBusinesses } from "../../graphql/queries";

import { generateClient } from "aws-amplify/api";

const client = generateClient();

const BusinessView = ({ match }) => {
  const [businesses, setBusiness] = useState([]);

  useEffect(() => {
    fetchBusiness();
  }, []);

  async function fetchBusiness() {
      const apiBusinessData = await client.graphql({ query: listBusinesses });
      const businessFromAPI = apiBusinessData.data.listBusinesses.items;
      setBusiness(businessFromAPI);
      console.log("Retrieved businesses", businessFromAPI);
    }

  return (

    <Collection
      items={businesses}
      type="grid"
      templateColumns="22fr 22fr 22fr 22fr 22fr"
      templateRows="22rem 22rem 22rem 22rem 22rem"
      //direction="row"
      gap="20px"
      wrap="nowrap"
    >
      {(item, index) => (
        <Card
          key={index}
          borderRadius="medium"
          width="300px" // Set fixed width for the card
          variation="outlined"
        >
          <Image
            src={`https://howardpreneurnetworkac918fdfec654a55b833b713884175800-traven.s3.amazonaws.com/public/${item.businessImagePath}`}
            alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
          />
          <View padding="xs">
            <Flex justifyContent="center">
              <Badge
                backgroundColor={'yellow.40'}
              >
                {item.category}
              </Badge>
            </Flex>
            <Divider padding="xs" />
            <Heading padding="medium">{item.name}</Heading>
            {/* Apply text-overflow ellipsis to the description */}
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {item.description}
            </p>
            <Link to={`/entrepreneur/${item.id}`}>
              <Button variation="primary" isFullWidth>
                Details
              </Button>
            </Link>
          </View>
        </Card>
      )}
    </Collection>
  );
};

export default BusinessView;