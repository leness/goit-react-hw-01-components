import Profile from "../src/components/Profile/Profile"
import Statistics from "../src/components/Statistics/Statistics"
import FriendList from "../src/components/FriendList/FriendList"
import TransactionHistory from "../src/components/TransactionHistory/TransactionHistory"
import user from './data_json/user.json'
import statisticalData from './data_json/statistical-data.json'
import friends from './data_json/friends.json'
import transactions from './data_json/transactions.json'

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
