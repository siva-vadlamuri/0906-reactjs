import logo from "./logo.svg";
import "./App.css";
import Product from "./Components/Product";
import Counter from "./Components/Counter";
import CounterClass from "./Components/CounterClass";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GreetUser from "./Components/GreetUser";
import ListItems from "./Components/ListItems";
import User from "./Components/User";
import Validation from "./Components/Validation";
// import CounterClass from "./Components/CounterClass";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Main */}
      {/* <CounterClass /> */}
      {/* <GreetUser /> */}
      {/* <ListItems /> */}
      {/* <User data="Some Data" /> */}
      <Validation />
      {/* Footer */}
      <Footer />
      {/* <p>React 18</p> */}
      {/* <p className="error">Error Occured in App.js</p> */}
      {/* <button className="btn btn-primary">Button</button> */}

      {/* CSS Modules */}
      {/* Installing third party modules like bootstrap */}
      {/* How to import bootstrap */}

      {/* Statefull class component */}

      {/* What is State  */}
      {/* How to update the state */}

      {/* Component && props */}
      {/* How to write Inline styles */}
      {/* How to write external styles */}

      {/* How to attach events to the JSX */}
      {/* <Product
        name="Iphone"
        price={27000}
        description="It is a iphone description"
      />
      <Product
        name="Iphone"
        price={27000}
        description="It is a iphone description"
      />
      <Product
        name="Iphone"
        price={27000}
        description="It is a iphone description"
      /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
