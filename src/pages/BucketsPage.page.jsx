import React from 'react';
import PageContainer from '../components/PageContainer/PageContainer.component';
import useListBucket from '../hooks/s3/useListBucket';
import BucketList from '../components/BucketList';

const BucketPage = () => {
  const { buckets = [] } = useListBucket();


  return (
    <PageContainer>
       <BucketList buckets={buckets}/>
    </PageContainer>
  );
};

export default BucketPage;
