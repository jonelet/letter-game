import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyledNavigation = styled.div`

`;

const Navigation = ({ list }) => {
  return (
    <StyledNavigation>
      {list.map(route => (
        <Item
          key={route.path}
          path={route.path}
        >
          {route.name}
        </Item>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
