import './App.css';
  const users = [
{
  fullname:"shahriar",
  age:"27",
  phone : [
    {
      home:"017425555",
      office: "017524654"
    }
  ]
},
{
  fullname:"kabir",
  age:"27",
  phone : [
    {
      home:"017425555",
      office: "017524654"
    }
  ]
}
]
//nested mapping
function App() {
  return (
    <div className="App">
     { users.map((kebol,index)=> (<article>
        <h3> {kebol.fullname}</h3>
        <p>{kebol.age}</p>
     </article>))}
      
    </div>
  );
}
export default App;
