import React from "react";

export default class WidgetLayout extends React.Component {
  // constructor(props) {
  // super(props);
  // this.user = this.props;
  // this.somedata = JSON.parse(this.props.info);
  // this.somedata = this.props.info;
  // console.log("this.somedata " + this.somedata);
  // }

  render() {
    return (
      <>
        <div>widget</div>
        <div>{this.props.info}</div>
      </>
    );
  }
}