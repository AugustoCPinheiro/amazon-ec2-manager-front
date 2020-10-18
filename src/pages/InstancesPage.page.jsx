import React from 'react';
import InstanceList from '../components/InstanceList';
import PageContainer from '../components/PageContainer/PageContainer.component';
import useListInstances from '../hooks/useListInstances';

const InstancePage = () => {
  const { instances = [] } = useListInstances();

  return (
    <PageContainer>
      <InstanceList instances={instances} />
    </PageContainer>
  );
};

export default InstancePage;
