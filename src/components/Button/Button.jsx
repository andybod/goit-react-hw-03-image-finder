import css from './Button.module.css';
import PropTypes from 'prop-types';
export const Button = ({ click }) => {
  return (
    <button type="Button" className={css['Button']} onClick={click}>
      Load more
    </button>
  );
};
Button.propTypes = {
  click: PropTypes.func,
};
