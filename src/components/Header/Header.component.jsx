import React from 'react';
import { useIsFetching } from 'react-query';
import Loading from '../Loading';
import { HeaderContainer } from './Header.style';

const Header = () => {
  const isFetching = useIsFetching();
  return (
    <HeaderContainer>
      Gerenciador AWS {isFetching ? <Loading /> : ''}
    </HeaderContainer>
  );
};

export default Header;
