import "./App.css";
import StudentsPage from "./pages/StudentsPage";
import ContextProvider from "./context/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <StudentsPage />
      </ContextProvider>
    </div>
  );
}

export default App;
