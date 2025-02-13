import React, { useState, useEffect } from 'react';
import './DailyReflection.css';
// Material UI imports
import { Grid, Paper, makeStyles } from '@material-ui/core';
// import useHistory for redirecting once quiz is done
import { useHistory } from 'react-router-dom'
//Import api routes to db
import API from '../../utils/API'
// Import question components
import MoodSlider from '../../components/QComponents/MoodSlider';
import Q1_1 from '../../components/QComponents/Q1_1';
import Q1_2 from '../../components/QComponents/Q1_2';
import Q1_3 from '../../components/QComponents/Q1_3';
import Q2_1 from '../../components/QComponents/Q2_1';
import Q2_2 from '../../components/QComponents/Q2_2';
import Q2_3 from '../../components/QComponents/Q2_3';
import Q3_1 from '../../components/QComponents/Q3_1';
import Q3_2 from '../../components/QComponents/Q3_2';
import Q3_3 from '../../components/QComponents/Q3_3';
import Q4_1 from '../../components/QComponents/Q4_1';
import Q4_2 from '../../components/QComponents/Q4_2';
import Q4_3 from '../../components/QComponents/Q4_3';
import LongForm from '../../components/QComponents/longform/LongForm'
import Results from '../../components/Results';



const DailyReflection = () => {

  // State that checks what component to render
  const [moodVisible, setMoodVisible] = useState(true)
  const [q1_1Visible, setQ1_1Visible] = useState(false)
  const [q1_2Visible, setQ1_2Visible] = useState(false)
  const [q1_3Visible, setQ1_3Visible] = useState(false)
  const [q2_1Visible, setQ2_1Visible] = useState(false)
  const [q2_2Visible, setQ2_2Visible] = useState(false)
  const [q2_3Visible, setQ2_3Visible] = useState(false)
  const [q3_1Visible, setQ3_1Visible] = useState(false)
  const [q3_2Visible, setQ3_2Visible] = useState(false)
  const [q3_3Visible, setQ3_3Visible] = useState(false)
  const [q4_1Visible, setQ4_1Visible] = useState(false)
  const [q4_2Visible, setQ4_2Visible] = useState(false)
  const [q4_3Visible, setQ4_3Visible] = useState(false)
  const [longFormVisible, setLongFormVisible] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  // Getting the id of the current user that is logged in
  const userId = localStorage.getItem("userId");

  // State that stores value from answer
  const [emotion, setEmotion] = useState('2');
  const [q1_1, setQ1_1] = useState('')
  const [q1_2, setQ1_2] = useState('')
  const [q1_3, setQ1_3] = useState('')
  const [q2_1, setQ2_1] = useState('')
  const [q2_2, setQ2_2] = useState('')
  const [q2_3, setQ2_3] = useState('')
  const [q3_1, setQ3_1] = useState('')
  const [q3_2, setQ3_2] = useState('')
  const [q3_3, setQ3_3] = useState('')
  const [q4_1, setQ4_1] = useState('')
  const [q4_2, setQ4_2] = useState('')
  const [q4_3, setQ4_3] = useState('')
  const [longForm, setLongForm] = useState('')
  const [longFormQuestion, setLongQuestion] = useState()
  const [voiceMemo, setVoiceMemo] = useState('');

  // State that stores the emotion state
  const [emotionState, setEmotionState] = useState('')

  const history = useHistory();

  const directToGraphs = () => {
    let path = '/Graphs'
    history.push(path)
  }

  function storeResponses() {


    // Saving values to the database
    API.saveJournal({
      postedBy: userId,
      mood: emotion,
      moodState: emotionState,
      q1_1: q1_1,
      q1_2: q1_2,
      q1_3: q1_3,
      q2_1: q2_1,
      q2_2: q2_2,
      q2_3: q2_3,
      q3_1: q3_1,
      q3_2: q3_2,
      q3_3: q3_3,
      q4_1: q4_1,
      q4_2: q4_2,
      q4_3: q4_3,
      longForm: longForm,
      longFormQuestion: longFormQuestion,
      voiceMemo: voiceMemo
    });
    directToGraphs()
  }



  // Run switch case once emotion has been set
  useEffect(() => {
    // Set value for current mood
    function renderMoodValue() {
      switch (emotion) {
        case '0':
          return setEmotionState('Very Unhappy');
        case '1':
          return setEmotionState('Unhappy');
        case '2':
          return setEmotionState('Ok');
        case '3':
          return setEmotionState('Happy');
        case '4':
          return setEmotionState('Very Happy');
        default:
          return setEmotion('2') + setEmotionState('Ok');
      }
    };
    renderMoodValue()
  }, [emotion]);


  // Function to handle what happens when the submit button is clicked
  function handleSubmit(e, getEmotion, getQ1_1, getQ1_2, getQ1_3, getQ2_1, getQ2_2, getQ2_3, getQ3_1, getQ3_2, getQ3_3, getQ4_1, getQ4_2, getQ4_3,) {

    e.preventDefault()

    if (moodVisible === true) {

      setEmotion(getEmotion)

      setMoodVisible(false);
      setQ1_1Visible(true)

    } else if (q1_1Visible === true) {

      setQ1_1(getQ1_1)

      setQ1_1Visible(false)
      setQ1_2Visible(true)

    } else if (q1_2Visible === true) {

      setQ1_2(getQ1_2)

      setQ1_2Visible(false)
      setQ1_3Visible(true)

    } else if (q1_3Visible === true) {

      setQ1_3(getQ1_3)

      setQ1_3Visible(false)
      setQ2_1Visible(true)

    } else if (q2_1Visible === true) {

      setQ2_1(getQ2_1)

      setQ2_1Visible(false)
      setQ2_2Visible(true)

    } else if (q2_2Visible === true) {

      setQ2_2(getQ2_2)

      setQ2_2Visible(false)
      setQ2_3Visible(true)

    } else if (q2_3Visible === true) {

      setQ2_3(getQ2_3)

      setQ2_3Visible(false)
      setQ3_1Visible(true)

    } else if (q3_1Visible === true) {

      setQ3_1(getQ3_1)

      setQ3_1Visible(false)
      setQ3_2Visible(true)

    } else if (q3_2Visible === true) {

      setQ3_2(getQ3_2)

      setQ3_2Visible(false)
      setQ3_3Visible(true)

    } else if (q3_3Visible === true) {

      setQ3_3(getQ3_3)

      setQ3_3Visible(false)
      setQ4_1Visible(true)

    } else if (q4_1Visible === true) {

      setQ4_1(getQ4_1)

      setQ4_1Visible(false)
      setQ4_2Visible(true)

    } else if (q4_2Visible === true) {

      setQ4_2(getQ4_2)

      setQ4_2Visible(false)
      setQ4_3Visible(true)

    } else if (q4_3Visible === true) {

      setQ4_3(getQ4_3)

      setQ4_3Visible(false)
      setLongFormVisible(true)

    }
  };

  const longFormSubmit = (e, getLongForm) => {
    e.preventDefault()
    setLongForm(getLongForm)
    setLongFormVisible(false)
    setQuizComplete(true)
    const blob = localStorage.getItem("voice")
    const longQuestion = localStorage.getItem("longFormQuestion");
    setLongQuestion(longQuestion);
    setVoiceMemo(blob)

  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minWidth: "50vw"
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Grid className='containerPadding' container alignItems='center' justify='center' style={{ minHeight: "100vh" }}>
        <Grid container className='gridContainer' spacing={10}>
          <Grid className='gridPadding' >
            <Paper className={classes.paper}>
              {/* dynamically render components */}
              {moodVisible === true ? <MoodSlider handleSubmit={handleSubmit} /> :

                q1_1Visible === true ? <Q1_1 handleSubmit={handleSubmit} /> :
                  q1_2Visible === true ? <Q1_2 handleSubmit={handleSubmit} /> :
                    q1_3Visible === true ? <Q1_3 handleSubmit={handleSubmit} /> :

                      q2_1Visible === true ? <Q2_1 handleSubmit={handleSubmit} /> :
                        q2_2Visible === true ? <Q2_2 handleSubmit={handleSubmit} /> :
                          q2_3Visible === true ? <Q2_3 handleSubmit={handleSubmit} /> :

                            q3_1Visible === true ? <Q3_1 handleSubmit={handleSubmit} /> :
                              q3_2Visible === true ? <Q3_2 handleSubmit={handleSubmit} /> :
                                q3_3Visible === true ? <Q3_3 handleSubmit={handleSubmit} /> :

                                  q4_1Visible === true ? <Q4_1 handleSubmit={handleSubmit} /> :
                                    q4_2Visible === true ? <Q4_2 handleSubmit={handleSubmit} /> :
                                      q4_3Visible === true ? <Q4_3 handleSubmit={handleSubmit} /> :

                                        longFormVisible === true ? <LongForm handleSubmit={longFormSubmit} /> :

                                          quizComplete === true ? <Results onClick={storeResponses}>end quiz</Results> : null}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
};
export default DailyReflection;

