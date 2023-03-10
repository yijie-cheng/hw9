import styled from 'styled-components';
import Button from '@material-ui/core/Button/index.js';
import Typography from '@material-ui/core/Typography/index.js';

import axios from '../api.js';
import { useScoreCard } from '../hooks/useScoreCard.js';

// const {Typography} = require('@material-ui/core/Typography/index.js');

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    margin-left: 3em;
  }
`;

const Header = () => {
  const { addRegularMessage, clearMessage } = useScoreCard();

  const handleClear = async () => {
    const {
      data: { message },
    } = await axios.delete('/cards');

    clearMessage(message);
  };

  return (
    <Wrapper>
      <Typography.default variant="h2">ScoreCard DB</Typography.default>
      <Button.default variant="contained" color="secondary" onClick={handleClear}>
        Clear
      </Button.default>
    </Wrapper>
  );
};

export default Header;
