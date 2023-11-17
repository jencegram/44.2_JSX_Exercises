const Person = (props) => {
  let nameDisplay = props.name.length > 8 ? props.name.substring(0, 6) : props.name;
  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>Name: {nameDisplay}</h3>
      <h3>Age: {props.age}</h3>
      {props.age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
      <ul>
        {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </div>
  );
};


const App = () => (
  <div>
    <Person name="Jennifer" age={27} hobbies={["Reading", "Coffee", "Hiking"]} />
    <Person name="Kristy" age={13} hobbies={["Dancing", "Walking"]} />
    <Person name="Susana" age={33} hobbies={["Gaming", "Drawing"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
