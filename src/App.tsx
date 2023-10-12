import AppContext from "./context";
import Router from "./router";

function App() {
  return (
    <>
      <AppContext>
        <Router />
      </AppContext>
    </>
  );
}

export default App;
