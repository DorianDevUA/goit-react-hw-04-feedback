import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(feedback => (
    <button
      key={feedback}
      type="button"
      onClick={() => onLeaveFeedback(feedback)}
    >
      {feedback}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
