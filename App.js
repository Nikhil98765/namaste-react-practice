import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional component
const Title = () => {
  return <h1 className="title" tabIndex="5">
    This is title component
  </h1>;
}

// Creates an object of type reactElement
// const title = (
//   <h1 className="title" tabIndex="5">
//     This is title component
//   </h1>
// );

// * Functional component is a function which returns React element / JSX element
function HeadingComponent() {
  return (
    // component composition
    <div id="container">
      {/* rendering functional component */}
      {/* <Title /> */}
      {/*{Title()}*/}
      <Title></Title>

      {/* rendering react element */}
      {/*{title}*/}

      <h1 className="heading" tabIndex="3">
        This is a heading component
      </h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// Converts the passed reactElement into browser node and append it to root
root.render(<HeadingComponent />);
