import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';


import { UnmarkedList } from './FriendList.styled';

export const FriendList = ({friends}) => (
  <UnmarkedList>{friends.map(FriendListItem)}</UnmarkedList>
);

FriendList.propTypes = {friends: PropTypes.array};