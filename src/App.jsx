import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div>
        <h1>Buttons</h1>
        <Button text="Run Payroll" size="Small" color="Primary" />
        <Button text="Run Late Payroll" size="Small" color="Warning" />
        <Button text="Make Changes" />
        <Button text="Bug button" size="Large" color="Danger" />
      </div>
    </>
  );
}

export default App;
