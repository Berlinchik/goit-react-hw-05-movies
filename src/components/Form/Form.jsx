import { FormStyled, Button, Input } from './Form.styled';
import { useSearchParams } from 'react-router-dom';

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.text.value });
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input type="text" name="text" />
      <Button>Search</Button>
    </FormStyled>
  );
};

export default Form;
