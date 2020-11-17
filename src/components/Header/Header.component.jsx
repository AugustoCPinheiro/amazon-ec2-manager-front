import React from 'react';
import { useIsFetching } from 'react-query';
import Loading from '../Loading';
import RouteList from '../RouteList';
import { HeaderContainer } from './Header.style';

const Header = () => {
  const isFetching = useIsFetching();
  return (
    <HeaderContainer>
 
      <RouteList
        routes={[
          { to: '/ec2', label: 'EC2' },
          { to: '/s3', label: 'S3' },
        ]}
      />
      {isFetching ? <Loading /> : ''}
    </HeaderContainer>
  );
};

export default Header;
