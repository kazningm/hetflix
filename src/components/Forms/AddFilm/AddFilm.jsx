import React from "react";
import * as Yup from "yup";
import style from "./AddFilm.module.css";
import { useFormik } from "formik";
import { compose } from "redux";
import { connect } from "react-redux";
import Input from "./FormControl/Input";
import MultiSelect from "./FormControl/MultiSelect";
import Textarea from "./FormControl/Textarea";
import { hideAddForm, addFilm } from "./../../../reducers/forms_reducer";

const AddFilm = (props) => {
    let closeAddForm = () => {
        props.hideAddForm();
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("Required"),
        vote_average: Yup.number().min(0).max(10).required("Required"),
        release_date: Yup.date().required("Required"),
        poster_path: Yup.string().url().required("Required"),
        genres: Yup.array().required("Required"),
        overview: Yup.string().required("Required"),
        runtime: Yup.number().moreThan(0).required("Required")
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            vote_average: "",
            release_date: "",
            poster_path: "",
            genres: [],
            overview: "",
            runtime: ""
        },
        onSubmit (values, onSubmitForms) {
            props.addFilm(values);
            onSubmitForms.resetForm();        
        },  
        onReset (values) {
            // console.log(values);
        },
        validationSchema,
        enableReinitialize: true,
        // validateOnMount: true
    })

    return props.isAddFormShow && (
        <div className={style.root}>
            <div className={style.formWrapper}>
                <form onSubmit={ formik.handleSubmit } onReset={ formik.handleReset }>
                    <div className={style.closeDiv} onClick={ closeAddForm }>
                        &#10006;
                    </div>
                    <div className={style.actionText}>
                        ADD MOVIE
                    </div>

                    {/* <Input label="FILM ID" id="film_id" type="text" placeholder="1234"
                           { ...formik.getFieldProps("film_id") } 
                           error={ formik.errors.film_id }
                           touched={ formik.touched.film_id } /> */}

                    <Input label="TITLE" id="title" type="text" placeholder="Moana"
                           { ...formik.getFieldProps("title") } 
                           error={ formik.errors.title } 
                           touched={ formik.touched.title } />
                    
                    <Input label="VOTE AVERAGE" id="vote_average" type="text" placeholder="0.0"
                           { ...formik.getFieldProps("vote_average") } 
                           error={ formik.errors.vote_average }
                           touched={ formik.touched.vote_average } /> 

                    <Input label="POSTER PATH" id="poster_path" type="text" placeholder="http://"
                           { ...formik.getFieldProps("poster_path") } 
                           error={ formik.errors.poster_path }
                           touched={ formik.touched.poster_path } /> 

                    <Input label="RELEASE DATE" id="release_date" type="date"
                           { ...formik.getFieldProps("release_date") } 
                           error={ formik.errors.release_date }
                           touched={ formik.touched.release_date }
                           cls={ style.dateInput } />                      

                    <MultiSelect label="GENRES" id="genres"
                           { ...formik.getFieldProps("genres") } 
                            options={ props.options } 
                            error={ formik.errors.genres }
                            touched={ formik.touched.genres } />

                    <Input label="RUNTIME" id="runtime" type="text" placeholder="120"
                           { ...formik.getFieldProps("runtime") } 
                           error={ formik.errors.runtime } 
                           touched={ formik.touched.runtime }/> 
                    
                    <div className={ style.textareaBlock } >
                    <Textarea label="OVERVIEW" id="overview" type="text" placeholder="About film..."
                           {...formik.getFieldProps("overview")} 
                           error={ formik.errors.overview } 
                           touched={ formik.touched.overview }/>
                    </div>

                    <div className={style.buttonsDiv}>
                        <button className={style.reset} type="reset">RESET</button>
                        <button className={style.save} type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    options: state.films.genres,
    isAddFormShow: state.forms.isAddFormShow
}) 

let mapDispatchToProps = {
    hideAddForm,
    addFilm
}

const AddFilmContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(AddFilm)

export default AddFilmContainer;