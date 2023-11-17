const App = () => (
  <div>
    <Tweet
      username = "jence"
      name="Jennifer"
      date="11-19-23"
      message = "Hello, this is my message"
      />

    <Tweet
      username = "jbnce"
      name="Bennifer"
      date="11-19-22"
      message = "Good Afternoon, this is my message"
      />

    <Tweet
      username = "jqnce"
      name="Qennifer"
      date="11-19-21"
      message = "Good night, this is my message"
      />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))