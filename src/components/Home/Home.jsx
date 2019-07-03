import React from 'react';

const Home = ({ fetchGetUsers, usersFetchGet, users }) => {
  React.useEffect(() => {
    fetchGetUsers({
      page: 2
    });
  }, [fetchGetUsers]);

  if (usersFetchGet.get('isLoading')) return <div>loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.get('id')}>
          {user.get('last_name')} {user.get('first_name')}
        </li>
      ))}
    </ul>
  );
};

export default Home;
