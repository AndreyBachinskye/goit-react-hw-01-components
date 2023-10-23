import PropTypes from 'prop-types';

import { ListItem } from './FriendLitItem.styled.js';

export const FriendListItem = ({ id, name, avatar, isOnline }) => (
  <ListItem isOnline={isOnline} key={id}>
    <span />
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </ListItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};