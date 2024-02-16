import css from './FriendList.moduled';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <ul className={css['friend-list']}>
            {friends.map((friend) => {
                return <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            })}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.array,
}