import React from "react";

import { UserClass } from "./UserClass";
import {User} from "./User";

export class About extends React.Component {
  constructor(props) {
    super(props);
  }

  // Parent componentDidMount will trigger after all the children's componentDidMount triggers
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>This is about page.</h1>
        <UserClass name="First" />
        {/*<User />*/}
      </div>
    );
  }
}
