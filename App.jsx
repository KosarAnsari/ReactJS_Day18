import User from './User';
import { useRef, useState } from 'react';

function App() {
  const handleDisplay = (name) => {
    alert(name);
  };

  //q8
  const userRef = useRef();
  const [role, setRole] = useState('User');

  const handleSubmit4 = (e) => {
    e.preventDefault();
    alert(`Username: ${userRef.current.value}, Role ${role}`);
  };

  //q7

  const handlesubmit2 = (e) => {
    e.preventDefault();
    const email2 = emailRef.current.value;
    const pass = passwordRef.current.value;
    if (!email2.includes('@')) {
      alert('Invalid email');
      return;
    }
    if (pass.length < 6) {
      alert('Password Character must be atleast 6 characters');
      return;
    }

    alert('Login Successful');
  };

  //q6
  const fileRef = useRef();

  const showfilename = () => {
    if (fileRef.current.files.length > 0) {
      alert('Selected files: ' + fileRef.current.files[0].name);
    } else {
      alert('No file Selected');
    }
  };

  //q5
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef1 = useRef();
  const [data, setData] = useState({});
  const handleSubmit1 = (e) => {
    e.preventDefault();
    setData({
      name: nameRef.current.value,
      age: ageRef.current.value,
      email: emailRef1.current.value,
    });
  };

  //q4
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
  };

  //q3
  const checkboxRef = useRef();
  const checkStatus = () => {
    alert(checkboxRef.current.checked ? 'checked' : 'Unchecked');
  };

  //q2
  const inputRef1 = useRef();
  const [text, setText] = useState('');
  const handleClick = () => {
    setText(inputRef1.current.value);
  };

  //q1
  const inputRef = useRef();
  const showval = () => {
    alert(inputRef.current.value);
  };

  const getUser = () => {
    alert('getUser function called');
  };

  return (
    <>
      <h1>passing Functions into other functions as props</h1>
      <p>Disclaimer! There is no such thing as passing event.</p>
      <User Name={handleDisplay} name="John" getuser={getUser} />
      <br />
      <br />
      <User Name={handleDisplay} name="Peter" getuser={getUser} />
      <br />
      <br />
      <User Name={handleDisplay} name="Bruce" getuser={getUser} />
      <br />
      <br />
      <User Name={handleDisplay} name="Sam" getuser={getUser} />
      <br />
      <br />
      <hr />
      <h2>Uncontrolled Components Practice</h2>
      <h3>Q1: Simple Input with Ref</h3>
      <input type="text" placeholder="type something here" ref={inputRef} />
      <button onClick={() => showval()}>Show Value</button>
      <h3>Q2: Default Value</h3>
      <input type="text" defaultValue="Hello React" ref={inputRef1} />
      <button onClick={handleClick}>show Text</button>
      <p>Current Value:{text}</p>
      <h3>Q3: Handle checkbox</h3>
      <input type="checkbox" ref={checkboxRef} /> Accept Terms
      <br />
      <button onClick={checkStatus}>Check status</button>
      <div>
        <h3>Q4: Login Form</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" ref={emailRef} placeholder="Enter Email" />
          <br />
          <br />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <h3>Q5: Multiple Inputs</h3>
      <form onSubmit={handleSubmit1}>
        <input type="text" placeholder="Type name here" ref={nameRef} />
        <br />
        <br />
        <input
          type="email"
          placeholder="Type your email here"
          ref={emailRef1}
        />
        <br />
        <br />
        <input type="number" placeholder="Enter your age" ref={ageRef} />

        <button type="submit">Submit</button>
        {data.name && (
          <div>
            <h4>Submitted Data</h4>
            <p>Name:{data.name}</p>
            <p>Age:{data.age}</p>
            <p>Email:{data.email}</p>
          </div>
        )}
      </form>
      <div>
        <h3>Q6: File Upload</h3>
        <input type="file" ref={fileRef} />
        <button onClick={showfilename}>Show file Name</button>
      </div>
      <h3>Q7: Validation </h3>
      <form onSubmit={handlesubmit2}>
        <input type="email" ref={emailRef} placeholder="Enter email" />
        <br />
        <br />
        <input type="password" ref={passwordRef} placeholder="password" />{' '}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h3>Q8: Mixed Form</h3>
      <form onSubmit={handleSubmit4}>
        <input type="text" ref={userRef} placeholder="Username" /> <br />
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="admin">Admin</option>
        </select>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default App;
