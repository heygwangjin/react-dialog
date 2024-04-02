import "./App.css";
import DialogDemo from "./components/DialogDemo";
import DialogManager from "./components/DialogManager";
import DialogProvider from "./components/DialogProvider";

function App() {
  return (
    <DialogProvider>
      <DialogManager />
      <DialogDemo />
    </DialogProvider>
  );
}

export default App;
