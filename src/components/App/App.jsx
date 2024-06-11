import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  function updateFeedback(feedback) {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        console.log('Click good feedback');
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        console.log('Click neutral feedback');
        break;
      case 'bad':
        setBad(bad + 1);
        console.log('Click bad feedback');
        break;
      default:
        return;
    }
  }

  // function handleFeedback(type) {
  //   setFeedback(prevFeedback => ({
  //     ...prevFeedback,
  //     [type]: prevFeedback[type] + 1,
  //   }))
  // }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={updateFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
