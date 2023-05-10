import React from 'react';
import Person from './Person';

function NameList() {
  // const names = ['Aruna', "Priyankara", "John"]

  const persons = [
    {
      id: 1,
      name: 'Aruan',
      age: 24,
      skill: 'programming',
    },
    {
      id: 2,
      name: 'John',
      age: 28,
      skill: 'Java',
    },
    {
      id: 3,
      name: 'Doe',
      age: 20,
      skill: 'JavaScript',
    },
    {
      id: 4,
      name: 'Alex',
      age: 25,
      skill: 'Python',
    },
  ];
  const personList = persons.map((person) => (
    <Person person={person}/>
  ));
  return (
    <div>
      {personList}

      {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
    </div>
  );
}

export default NameList;
