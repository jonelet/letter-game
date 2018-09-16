import React from 'react';
import PropTypes from 'prop-types';

const PointItem = ({
  name,
  quantity,
  basePoints,
  bonusPoints,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{basePoints + bonusPoints}</td>
    </tr>
  );
};

PointItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  basePoints: PropTypes.number.isRequired,
  bonusPoints: PropTypes.number.isRequired,
};

export default PointItem;
