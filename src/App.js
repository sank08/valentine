import './App.css';

function App() {
  return (
    <Heart />
  );
}

function Heart(props) {
  let name = props.name?props.name:"From Sank8";
  return (
    <div class="container">
      <div class="valentines">
        <div class="envelope"></div>
        <div class="front"></div>
        <div class="card">
          <div class="text">Happy<br /> Valentine's<br /> Day! <br/>{name}</div>
        </div>
      </div>
      <div class="hearts">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
        <div class="four"></div>
        <div class="five"></div>
      </div>
      <div class="shadow"></div>
    </div>
  )
}

export default App;
