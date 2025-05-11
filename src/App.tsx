import ListGroup from "./components/ListGroup";

function App(){
  let items = [
    'Apples',
    'Bananas',
    'Grapes'
  ];

  const handleSelectItem = (item: string) => {console.log(item);}

  return <div>
    <ListGroup items = {items} heading= "Fruits" onSelectItem={handleSelectItem}/>
    </div>
}

export default App;