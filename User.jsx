function User({ Name, name, getuser }) {
  return (
    <>
      <button onClick={() => Name(name)}>Display User Name</button>
      <button onClick={() => getuser()}>Get User</button>
    </>
  );
}
export default User;
