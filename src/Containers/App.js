import Header from './Header.js';
import Body from './Body.js';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper/index.js';

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// const StyledPaper = styled(Paper)`
//   padding: 2em;
// `;


const StyledPaper = () => {
  return Paper;
};

function App() {
  return (
    // <Wrapper>
    //   <Paper elevation="3">
    //     <Header />
    //     <Body />
    //   </Paper>
    // </Wrapper>
    <Wrapper>
        <Header />
        <Body />
    </Wrapper>
  );
}

export default App;
