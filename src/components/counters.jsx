import React, { Component } from "react";
import Counter from "./miniCounter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // this.setState({ counters: counters });  // 上下两种是一样的
    this.setState({ counters });
  };

  render() {
    // let testValue = 0;
    // console.log("测试重复值", testValue++);
    // key比较特殊不会成为props值，属于react内部使用，我们访问不到
    // 可以只传counter属性，也可以直接传整个counter
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
