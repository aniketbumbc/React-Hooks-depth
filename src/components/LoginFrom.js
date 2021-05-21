import React, { useState } from 'react';

const LoginFrom = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showData, setShowData] = useState(false);
  const getFormData = (e) => {
    e.preventDefault();
    setShowData(true);
    console.log(userName, password);
  };
  return (
    <div>
      <h4>Login From In Progress</h4>
      <form onSubmit={getFormData}>
        <input
          type='text'
          name='username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type='text'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>

      <div>
        {showData ? (
          <div>
            <h2> User Name is {userName}</h2>
            <h3> Password is {password}</h3>{' '}
          </div>
        ) : (
          <h2> No Data</h2>
        )}
      </div>
    </div>
  );
};

export default LoginFrom;
