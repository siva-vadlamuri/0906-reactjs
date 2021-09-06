function GreetUser() {
  const isLogined = true;
  return <div>{isLogined ? <p>Welcome User</p> : <p>Welcome Guest</p>}</div>;
}

export default GreetUser;
