import React, { Component } from "react";
import ImgWork from "./../assets/imgs/work.jpg";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: ImgWork,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement() {
  //     //  这里的this因为指向window，然后严格模式下访问为undefined
  //     // 需要用绑定的bind方法
  //     console.log("Increment Clicked", this);
  //   }

  // 只需要箭头函数就能解决上面的问题
  handleIncrement = () => {
    console.log("Increment Clicked", this);
    // this.state.count++; // 不会奏效
    this.setState({ count: this.state.count + 1 });
  };

  handleIncrement1 = (product) => {
    console.log(product);
  };
  render() {
    let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <br />
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* 传参的另外一种做法 , 直接在里面弄箭头函数，而不是多次来回调用*/}
        <button
          onClick={() => this.handleIncrement1("id:1")}
          style={{ fontSize: 30, marginLeft: 10 }}
          className="btn btn-secondary btn-sm"
        >
          Increment1
        </button>
        <ul>
          {this.renderTags()}
          {/* 还有一种单独补充if */}
          {this.state.tags.length === 0 && "please create a new tag!"}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
