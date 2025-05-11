import ListGroup from "./components/ListGroup";

let items = [
  'Apples',
  'Bananas',
  'Grapes'
];

function App(){
  return <div>
    <ListGroup items = {items} heading= "Fruits"/>
    </div>
}

export default App;