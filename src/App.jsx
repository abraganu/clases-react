import Button from './components/Button/Button'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Buttons</h1>
            <Button text="Run Payroll" size="Small" color="Primary" />
            <Button text="Run Late Payroll" size="Small" color="Warning" />
            <Button text="Make Changes" />
            <Button text="Bug button" size="Large" color="Danger" />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col'>
            <h1>Cards</h1>
            <Card 
              imgSrc="https://user-images.githubusercontent.com/1204692/30697506-9fd3020c-9eb5-11e7-95ca-a6c56785dd66.png"
              cardTitle="Accessibility"
              cardText="Un textillo nomas pa pobrar"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
