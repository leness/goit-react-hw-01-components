import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
        
            {friends.map(({id, ...rest}) => (
                <FriendListItem key={id} {...rest}/>
        )   
        )}
        </ul> )
}

export default FriendList