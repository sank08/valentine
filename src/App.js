import './App.css';

function App() {
  const query = new URLSearchParams(window.location.search);
  const token = query.get('token')
  console.log(token)
  return (
    <Heart name={token} />
  );
}

function Heart(props) {
  let name = props.name ? props.name : "From Sank8";
  return (
    <div class="container">
      <div class="valentines">
        <div class="envelope"></div>
        <div class="front"></div>
        <div class="card">
          <div class="text">Happy<br /> Valentine's<br /> Day! <br /><span>{name}</span></div>
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
