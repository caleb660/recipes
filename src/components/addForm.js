import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AddForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <div>
          <Field
            autoComplete="off"
            name="title"
            component="input"
            type="text"
            placeholder="Recipe Title"
            required
          />
        </div>
      </div>
      <br/>
      <div>
        <label>Contributor</label>
        <div>
          <Field
            autoComplete="off"
            name="contributor"
            component="input"
            type="text"
            placeholder="Your name here"
          />
        </div>
      </div>
      <br/>
      <div>
        <label>Category</label>
        <div>
          <Field required name="category" component="select">
            <option />
            <option value="Appetizers, Beverages">Appetizers, Beverages</option>
            <option value="Soups, Salads">Soups, Salads</option>
            <option value="Main Dishes">Main Dishes</option>
            <option value="Breads, Rolls">Breads, Rolls</option>
            <option value="Desserts">Desserts</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </Field>
        </div>
      </div>
      <br/>
      <div>
        <label>Ingredients</label>
        <div>
          <Field name="ingredients" component="textarea" required />
        </div>
      </div>
      <br/>
      <div>
        <label>Directions</label>
        <div>
          <Field name="directions" component="textarea" required />
        </div>
      </div>
      <br/>
      <label>Password</label>
      <div>
        <Field
          name="password"
          component="input"
          type="password"
          required
        />
      </div>
      <br />
      <div className="buttonContainer">
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        &nbsp;
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(AddForm)