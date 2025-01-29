function App() {
  return (
    <div>
      <h1>Bem vindo ao React</h1>
      <p>Exemplo 2 de Componentização</p>
      <Button />
    </div>
  );
}

function Button() {
  function click() {
    alert("Voce clicou no botão");
  }

  return (
    <button
      style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      onClick={()=>click()}
    >
      Clique aqui
    </button>
  );
}

export default App;
