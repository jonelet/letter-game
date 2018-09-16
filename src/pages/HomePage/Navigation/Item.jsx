import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: block;
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Item = ({
  path,
  children,
}) => {
  return (
    <StyledLink to={path}>
      {children}
    </StyledLink>
  );
};

export default Item;
