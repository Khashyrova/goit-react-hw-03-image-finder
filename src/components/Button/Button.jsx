import PropTypes from 'prop-types';
import s from './Button.module.css';

function LoadMoreBtn({ onButtonClick }) {
  return (
    <div className={s.BtnContainer}>
      <button className={s.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onButtonClick: PropTypes.func,
};
