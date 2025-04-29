import { FriendListItem } from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id} className={styles.item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};
