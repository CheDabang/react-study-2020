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
  render() {
    let testValue = 0;
    console.log("测试重复值", testValue++);
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} selected={true}>
            <h4>title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
