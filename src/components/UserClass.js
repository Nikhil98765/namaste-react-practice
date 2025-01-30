import React from "react";

/**
 *  Lifecycle of React components
 *  1. componentDidMount
 *  2. componentDidUpdate
 *  3. componentWillUnmount
 *
 *  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */


export class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: '',
        email: '',
        avatar_url: ''
      },
      count: 0,
    }
    // console.log(this.props.name + ' constructor');
  }

  /**
   * Works similar to useEffect with empty dependencies array
   * but useEffect callback shouldn't be async as react throws error.
   */
  async componentDidMount() {

    this.timer = setInterval( () => {
      console.log('componentDidMount');
    }, 1000);

    // console.log(this.props.name + ' component DidMount');
    const data = await fetch("https://api.github.com/users/Nikhil98765");
    const json = await data.json();
    this.setState({
      userInfo:  json
    });

    console.log('render');
  }

  componentDidUpdate(prevProps) {
    // Works same as useEffect with non-empty dependencies array.
    if (this.state.count !== prevProps.count) {
      console.log('useEffect');
    }

    // console.log(this.props.name + ' component DidUpdate');
  }

  // works same as return callback of useEffect
  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    // console.log(this.props.name + ' render');
    const {name, email, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>click</button>
        <h2>Name: {name}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Email: {email}</h4>
        <img src={avatar_url} alt="User Avatar" />
      </div>
    );
  }
}
