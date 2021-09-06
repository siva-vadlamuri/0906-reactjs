const Counter = () => {
  //
  const increment = (e) => {
    alert("Clicked");
    // console.log(e);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  //   const condtionalRendering = ()=>{
  //       console.log(true && false)
  //   }

  // if you want to display some text or html condtionaly

  const age = 12;

  return (
    <div className="counter">
      <form>
        <input type="text" name="firstName" onChange={handleChange} />
        {/* <img src="" alt="" /> */}

        <button onClick={increment}>Click Me</button>
      </form>

      {age > 18 && <p>I am 18</p>}

      {/* Condtional Rendering */}
    </div>
  );
};

export default Counter;
