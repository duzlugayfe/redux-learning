import AddPost from "./components/AddPost";
import Header from "./components/Header";
import ListPosts from "./components/ListPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <AddPost />
      <ListPosts />
    </div>
  );
}

export default App;
