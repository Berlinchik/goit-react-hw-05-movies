import { FormStyled, Button, Input } from './Form.styled';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.text.value);
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input type="text" name="text" />
      <Button>Search</Button>
    </FormStyled>
  );
};

export default Form;
