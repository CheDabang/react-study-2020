import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter";
import Counters from "./components/counters";
// 渲染count组件
// ReactDOM.render(
//   <React.StrictMode>
//     <Counter />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// 此为严格模式，会出现2次渲染。官方用来专门帮你排错的，切换下面的正常模式，或者build打包之后不会出现。
// 有关官方的issues，https://github.com/facebook/react/issues/17786
// ReactDOM.render(
//   <React.StrictMode>
//     <Counters />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
