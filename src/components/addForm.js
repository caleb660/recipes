import React from 'react'
import {Field, Form} from 'react-final-form'

const AddForm = props => {
    return (
        <Form
            onSubmit={values => {
                // send values to the cloud
                console.log("submitting. But not yet implemented");
                console.log(values);
//                if (values.password === process.env.REACT_APP_ADD_RECIPE_PASSWORD) {
//                    console.log("well submit this");
//                } else {
//                    console.log("you cotton-headed ninny-muggins that's not the right password");
//                }
            }}
        >
            {({handleSubmit, pristine, form, submitting}) => (
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
                                <option/>
                                <option value="Appetizers, Beverages">Appetizers, Beverages</option>
                                <option value="Soups, Salads">Soups, Salads</option>
                                <option value="Main Dishes">Main Dishes</option>
                                <option value="Side Dishes">Side Dishes</option>
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
                            <Field name="ingredients" component="textarea" required/>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <label>Directions</label>
                        <div>
                            <Field name="directions" component="textarea" required/>
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
                    <br/>
                    <div className="buttonContainer">
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                        </button>
                        &nbsp;
                        <button type="button" disabled={pristine || submitting} onClick={form.reset}>
                            Clear
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default AddForm;