import css from './Button.module.css';
import PropTypes from 'prop-types';
export const Button = ({ onClick }) => {
  return (
    <button type="Button" className={css['Button']} onClick={onClick}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
