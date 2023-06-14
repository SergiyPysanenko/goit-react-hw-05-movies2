import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button} from './SearchForm.styled';

function SearchForm({ onSubmit, defaultValue }) {
  const searhRef = useRef();

  const handleSubmitForm = event => {
    event.preventDefault();

    onSubmit(searhRef.current.value);
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Input defaultValue={defaultValue} ref={searhRef} type="text" required />
      <Button>Search</Button>
    </Form>
  );
}

SearchForm.propTypes = {
  defaultValue: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SearchForm;