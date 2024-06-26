import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
