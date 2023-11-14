import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import SearchWrapper from '../assets/wrappers/SearchForm'
const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <SearchWrapper>
      <Form method='Post'className='form'>

      </Form>
    </SearchWrapper>
  )
}

export default SearchForm