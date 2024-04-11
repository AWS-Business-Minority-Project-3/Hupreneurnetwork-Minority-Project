import React from 'react';
import {  MarketingPricing  } from '../../ui-components';
import { Entrepenuer } from '../../ui-components';
import "./BusinessOwnerOverview.css"


function BusinessOwnerOverview() {
    return (
      <div className='business-overview-page'>
        <Entrepenuer width='100%'/>
        <MarketingPricing width='100%'/>
      </div>
    );
  }
  
export default BusinessOwnerOverview;