import logo from "./logo.svg";
import "./App.css";
// import Product from "./Components/Product";
// import Counter from "./Components/Counter";
// import CounterClass from "./Components/CounterClass";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import GreetUser from "./Components/GreetUser";
// import ListItems from "./Components/ListItems";
import User from "./Components/User";
import Validation from "./Components/ContactUs/Validation";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
import { Route } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Counter from "./Components/Hooks/Counter";
import Todos from "./Components/Hooks/Todo";
import UseEffectHook from "./Components/Hooks/UseEffectHook";
import Pagination from "./Components/Hooks/Pagination";
import Products from "./Components/Products/Products";
import Product from "./Components/Products/Product";
import UseReducerHook from "./Components/Hooks/UseReducerHook";
import CartPage from "./Components/Products/CartPage";
// import CounterClass from "./Components/CounterClass";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* <UseReducerHook/> */}

      {/* <Counter /> */}
      {/* <Todos /> */}
      {/* <UseEffectHook /> */}
      {/* <Pagination /> */}

      {/* Routes Goes Here */}
      

      <div>
        <Route path="/" exact component={Home} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/about" exact component={About} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contactus" component={Validation} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/cart"  component={CartPage} />
      </div>

      {/* Router Ends Here */}

      {/* Main */}
      {/* <CounterClass /> */}
      {/* <GreetUser /> */}
      {/* <ListItems /> */}
      {/* <User data="Some Data" /> */}
      {/* <Validation /> */}
      {/* Footer */}
      {/* <Footer /> */}
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
