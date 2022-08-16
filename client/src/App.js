import Score from './components/Score/ScoreList.jsx'
import { GlobalStyles } from './components/GlobalStyles/GlobalStyles'
import Container from './components/Container/Container'

function App() {
  return (
    <div  >
      <GlobalStyles />
      <Container>
        <h1>Horses' score</h1>
        <Score />
      </Container>
    </div>
  );
}

export default App;
