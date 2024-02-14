import Button from './Button';

const ButtonSet = ({ onAgree }) => {
  return (
    <div className="btn_set">
      <Button agree onClick={onAgree} />
      <Button />
    </div>
  );
};

export default ButtonSet;
