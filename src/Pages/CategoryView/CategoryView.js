//           </Card>
//         </Button>
//       )}
//     </Collection>
//   );
// }

// export default CategoriesView;

import React from 'react';
import { Button, Card, Heading } from "@aws-amplify/ui-react";
import categoriesData from './CategoryView.json'; // Import categories data
import "./CategoryView.css";

function CategoriesView() {
  return (
    <div className="collection">
      {categoriesData.map((category, index) => (
        <Button key={index} variation="primary" isFullWidth className='button'>
          <Card className="card">
            <div className="content">
              <Heading className="heading">{category.name}</Heading>
            </div>
          </Card>
        </Button>
      ))}
    </div>
  );
}

export default CategoriesView;
