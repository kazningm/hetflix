import React from "react";
import * as Yup from "yup";
import style from "./AddFilm.module.css";
import { useFormik } from "formik";
import { compose } from "redux";
import { connect } from "react-redux";
import { closeAddForm } from "../../../reducers/forms_reducer";
import Input from "./FormControl/Input";
import Select from "./FormControl/Select";

const AddFilm = (props) => {
    
    let closeAddForm = props.closeAddForm;

    const validationSchema = Yup.object({
        film_id: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        release_date: Yup.date().required("Required"),
        film_url: Yup.string().url(),
        genre: Yup.string().required("Required"),
        overview: Yup.string().required("Required"),
        runtime: Yup.number().moreThan(0).required("Required")
    });

    const formik = useFormik({
        initialValues: {
            film_id:  "",
            title: "",
            release_date: "",
            film_url: "",
            genre: "",
            overview: "",
            runtime: ""
        },
        onSubmit (values) {
            console.log(values)            
        },
        validationSchema
        // validate (values) {
        //     let errors = {}

        //     for (let v in values) 
        //         if (!values[v]) errors[v] = "Required";

        //     return errors;
        // }
    })

    return props.isAddFormShow && (
        <div className={style.root}>
            <div className={style.formWrapper}>
                <form onSubmit={ formik.handleSubmit }>
                    <div className={style.closeDiv} onClick={ closeAddForm }>
                        &#10006;
                    </div>
                    <div className={style.actionText}>
                        ADD MOVIE
                    </div>
                    <Input label="FILM ID" id="film_id" type="text"
                           onChange={ formik.handleChange } 
                           onBlur={ formik.handleBlur }
                           value={ formik.values.film_id } 
                           error={ formik.errors.film_id }
                           touched={ formik.touched.film_id } />

                    <Input label="TITLE" id="title" type="text"
                           onChange={ formik.handleChange } 
                           onBlur={ formik.handleBlur }
                           value={ formik.values.title } 
                           error={ formik.errors.title } 
                           touched={ formik.touched.title } />

                    <Input label="RELEASE DATE" id="release_date" type="date"
                           onChange={ formik.handleChange } 
                           onBlur={ formik.handleBlur }
                           value={ formik.values.release_date } 
                           error={ formik.errors.release_date }
                           touched={ formik.touched.release_date }
                           cls={ style.dateInput } /> 
                    
                    <Input label="FILM URL" id="film_url" type="text"
                           onChange={ formik.handleChange } 
                           onBlur={ formik.handleBlur }
                           value={ formik.values.film_url } 
                           error={ formik.errors.film_url }
                           touched={ formik.touched.film_url } /> 

                    <Select label="GENRE" id="genre"
                            onChange={ formik.handleChange } 
                            onBlur={ formik.handleBlur }
                            value={ formik.values.genre }
                            options={ props.options } 
                            error={ formik.errors.genre }
                            touched={ formik.touched.genre } />

                    <Input label="OVERVIEW" id="overview" type="text"
                           onChange={ formik.handleChange } 
                           onBlur={ formik.handleBlur }
                           value={ formik.values.overview } 
                           error={ formik.errors.overview } 
                           touched={ formik.touched.overview }/> 

                    <Input label="RUNTIME" id="runtime" type="text"
                           onChange={ formik.handleChange } 
                           onBlur={ formik.handleBlur }
                           value={ formik.values.runtime } 
                           error={ formik.errors.runtime } 
                           touched={ formik.touched.runtime }/> 

                    <div className={style.buttonsDiv}>
                        <button className={style.reset} type="reset">RESET</button>
                        <button className={style.save} type="submit">SAVE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAddFormShow: state.forms.isAddFormShow,
    options: state.films.genres
}) 

let mapDispatchToProps = {
    closeAddForm
}

const AddFilmContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AddFilm)

export default AddFilmContainer;