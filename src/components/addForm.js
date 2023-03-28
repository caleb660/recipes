import React, {useState} from 'react'
import {Field, Form} from 'react-final-form'
import {useDispatch} from "react-redux";
import {setRecipe} from "../redux/recipeSlice";

const makeRequest = async (values) => {
    const request = {
        spreadsheetId: '11C_U7Xm2X43oT30uS2T4-T8HcrNLvfW-mYZKuhqEzNg',
        range: 'recipeServerSpreadsheet!A2:E',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            "majorDimension": "ROWS",
            "values": [[values.title, values.contributor, values.category, values.ingredients, values.directions]]
        },
    };

    try {
        await window.gapi.client.sheets.spreadsheets.values.append(request);
        document.getElementById("clearButton").click()
    } catch (err) {
        alert("The recipe could not be saved. Try again later");
        throw "no-save";
    }
}

const AddForm = props => {
    const [isSubmitting, setSubmitting] = useState(false);
    const dispatch = useDispatch();

    return (
        <Form
            onSubmit={async values => {
                setSubmitting(true);
                makeRequest(values).then(() => {
                    let newRecipe = {
                        title: values.title,
                        contributor: values.contributor,
                        category: values.category,
                        ingredients: values.ingredients,
                        directions: values.directions,
                    };
                    dispatch(setRecipe(newRecipe));
                }).catch(() => {
                    console.log("not a successful save");
                }).finally(() => {
                    setSubmitting(false);
                });
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
                                required
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
                    <div className="buttonContainer">
                        <button type="submit" disabled={pristine || submitting || isSubmitting}>
                            Submit
                        </button>
                        &nbsp;
                        <button id="clearButton" type="button" onClick={form.reset}>
                            Clear
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
}

export default AddForm;