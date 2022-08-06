import React from 'react'
import FeatureBox from '../HomePage/FeatureBox';
import featureimage1 from '../../assets/feature_1.jpg';
import featureimage2 from '../../assets/feature_2.jpg';
import featureimage3 from '../../assets/feature_3.jpg';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage1} title='Upload Documents' />
            <FeatureBox image={featureimage2} title='Download Documents' />
            <FeatureBox image={featureimage3} title=' Contact' />
        </div>
    </div>
  )
}

export default Feature