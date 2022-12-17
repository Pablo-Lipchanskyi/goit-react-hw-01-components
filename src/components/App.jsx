import { Profile } from 'components/Profile/userProfileComponent';
import { Statistic } from './Statistics/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import user from './Profile/user.json'
import data from './Statistics/data.json'
import friends from './FriendList/friends.json';
export const App = () => {
  return (
    <div>
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} 
      />
      <Statistic
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        transactions={transactions}
      />
    </div>
    
  );
};
