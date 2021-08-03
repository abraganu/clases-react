import Article from './components/Article/Article'

function App() {
  return (
    <>
      <div className="App" style={{ width: '30%' }}>
        <Article
          title="mi primer Articulo"
          titleColor="#757ce8"
        />
      </div>
      <div style={{ width: '30%' }}>
        <Article
          title="mi segundo Articulo"
          titleColor="#ff7961"
        />
      </div>
    </>
  );
}

export default App;
