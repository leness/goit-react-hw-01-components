import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
        
            {friends.map((el) => (
                <FriendListItem key={el.id} {...el}/>
        )   
        )}
        </ul> )
}

export default FriendList