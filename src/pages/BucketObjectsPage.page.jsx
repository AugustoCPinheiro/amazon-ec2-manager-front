import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer/PageContainer.component';
import useListBucket from '../hooks/s3/useListBucket';
import BucketObjectList from '../components/BucketObjectList';
import axios from 'axios';
import useListObjects from '../hooks/s3/useListObjects'

const BucketObjectsPage = () => {

  const name = window.location.pathname.split("/")[2];

  const result = useListObjects(name);
  const [bucketObjects, setBucketObjects] = useState();

  useEffect(() =>{
    result.then(e=>{
      setBucketObjects(e);
      console.log(bucketObjects);
    })
  },[]);

  return bucketObjects ? (
    <PageContainer>
      <BucketObjectList bucketObjects={bucketObjects} />
    </PageContainer>
  ) : 
    (<label>calma</label>)  
  ;
};

export default BucketObjectsPage;
