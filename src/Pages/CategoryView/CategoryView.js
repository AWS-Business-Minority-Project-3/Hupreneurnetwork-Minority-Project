// CategoriesPage.jsx
import React from 'react';
import { Button, Flex, Heading, View, Card, Image, 
  Badge, Collection, Divider} from "@aws-amplify/ui-react";
import categoriesData from './CategoryView.json'; // Import categories data

function CategoriesView() {

  const items = categoriesData.map(category => ({
    title: category.name,
  }));

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Collection
      items={items}
      type="grid"
      templateColumns="12fr 12fr 12fr 12fr 12fr"
      templateRows="12rem 12rem 12rem 12rem 12rem"
      gap="5px"
      wrap="nowrap"
      background="none"
    >
      {(item, index) => (
        <Button key={index} variation="primary" isFullWidth>
          <Card
            borderRadius="medium"
            maxWidth="20rem"
            variation="outlined"
            style={{ backgroundColor: 'white', border: '1px solid grey' }}
          >
            <View padding="xs">
              <Heading padding="medium">{item.title}</Heading>
            </View>
          </Card>
        </Button>
      )}
    </Collection>
  </div>
  );
}

export default CategoriesView;