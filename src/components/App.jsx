// import './App.css';
import Profile from './profile/Profile';
import user from './profile/user.json';
// import data from './data.json';
// import Statistics from './components/Statistics/Statistics';
// import FriendList from './components/FriendList/FriendList';
// import friends from './friends.json';
// import transactions from './transactions.json';
// import TransactionHystory from './components/TransactionHistory/TransactionHistory';

// function transformDataArrayToObject(dataArray) {
//   const dataObject = {};
//   dataArray.forEach(item => {
// //     dataObject[item.label] = item.percentage;
// //   });
// //   return dataObject;
// }

function App() {
  return (
    <div>
      <div>
        <h1>Profil</h1>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      {/* <div>
        <Statistics
          title="Statistics Title"
          stats={transformDataArrayToObject(data)}
        />
      </div>
      <div>
        <FriendList friends={friends}></FriendList>
      </div>
      <div>
        <TransactionHystory items={transactions} />;
      </div> */}
    </div>
  );
}

export default App;
