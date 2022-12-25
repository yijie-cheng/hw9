import { useState } from 'react';
import Button from '@material-ui/core/Button/index.js';
import FormControl from '@material-ui/core/FormControl/index.js';
import FormControlLabel from '@material-ui/core/FormControlLabel/index.js';
import Paper from '@material-ui/core/Paper/index.js';
import Radio from '@material-ui/core/Radio/index.js';
import RadioGroup from '@material-ui/core/RadioGroup/index.js';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField/index.js';
import Typography from '@material-ui/core/Typography/index.js';

import { useStyles } from '../hooks/useStyles.js';
import axios from '../api.js';
import { useScoreCard } from '../hooks/useScoreCard.js';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1em;
`;

// const StyledFormControl = styled(FormControl)`
//   min-width: 120px;
// `;

// const ContentPaper = styled(Paper)`
//   height: 300px;
//   padding: 2em;
//   overflow: auto;
// `;

const Body = () => {
  const classes = useStyles();

  const { messages, addCardMessage, addRegularMessage, addErrorMessage } =
    useScoreCard();

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [score, setScore] = useState(0);

  const [queryType, setQueryType] = useState('name');
  const [queryString, setQueryString] = useState('');

  const handleChange = (func) => (event) => {
    func(event.target.value);
  };

  const handleAdd = async () => {
    const {
      data: { message, card },
    } = await axios.post('/card', {
      name,
      subject,
      score,
    });
    // console.log("99999", message);
    if (!card) addErrorMessage(message);
    else addCardMessage(message);
  };

  const handleQuery = async () => {
    const {
      data: { messages, message },
    } = await axios.get('/cards', {
      params: {
        type: queryType,
        queryString,
      },
    });
    // console.log(messages, message)
    if (!messages) addErrorMessage(message);
    else addRegularMessage(...messages);
  };

  return (
    <Wrapper>
      <Row>
        {/* Could use a form & a library for handling form data here such as Formik, but I don't really see the point... */}
        <TextField.default
          className={classes.input}
          placeholder="Name"
          value={name}
          onChange={handleChange(setName)}
        />
        <TextField.default
          className={classes.input}
          placeholder="Subject"
          style={{ width: 240 }}
          value={subject}
          onChange={handleChange(setSubject)}
        />
        <TextField.default
          className={classes.input}
          placeholder="Score"
          value={score}
          onChange={handleChange(setScore)}
          type="number"
        />
        <Button.default
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={!name || !subject}
          onClick={handleAdd}
        >
          Add
        </Button.default>
      </Row>
      <Row>
        <FormControl.default>
          <FormControl.default component="fieldset">
            <RadioGroup.default
              row
              value={queryType}
              onChange={handleChange(setQueryType)}
            >
              <FormControlLabel.default
                value="name"
                control={<Radio.default color="primary" />}
                label="Name"
              />
              <FormControlLabel.default
                value="subject"
                control={<Radio.default color="primary" />}
                label="Subject"
              />
            </RadioGroup.default>
          </FormControl.default>
        </FormControl.default>
        <TextField.default
          placeholder="Query string..."
          value={queryString}
          onChange={handleChange(setQueryString)}
          style={{ flex: 1 }}
        />
        <Button.default
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={!queryString}
          onClick={handleQuery}
        >
          Query
        </Button.default>
      </Row>
      <Paper.default variant="outlined">
        {messages.map((m, i) => (
          <Typography.default variant="body2" key={m + i} style={{ color: m.color }}>
            {m.message}
          </Typography.default>
        ))}
      </Paper.default>
    </Wrapper>
  );
};

export default Body;
