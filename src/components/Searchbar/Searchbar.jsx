import { Formik } from 'formik';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.modules';

export const Searchbar = ({ onSubmit }) => {
  const hendleSubmitForm = (values, actions) => {
    if (values.textSearch.trim() === '') return;
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ textSearch: '' }} onSubmit={hendleSubmitForm}>
      {({ values }) => (
        <SearchBar>
          <SearchForm>
            <SearchFormButton type="submit" p={values.textSearch.trim().length}>
              <ButtonLabel>Search</ButtonLabel>
            </SearchFormButton>
            <SearchFormInput
              name="textSearch"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBar>
      )}
    </Formik>
  );
};
