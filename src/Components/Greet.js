import React from 'react';

// function Greet(){
//     return <h1>Hello Aruna</h1>
// }

// const Greet = ({ name, heroName }) => (
//   <h1>
//     Hello {name} and {heroName}
//   </h1>
// );

const Greet = (props) => {
    const { name, heroName } = props;
    return (
      <h1>
        Hello {name} and {heroName}
      </h1>
    );
  };

export default Greet;
