import React from "react";
import * as Yup from "yup";
import style from "./AddFilm.module.css";
import { useFormik } from "formik";
import { compose } from "redux";
import { connect } from "react-redux";
import { hideEditForm } from "../../../reducers/forms_reducer";
import Input from "./FormControl/Input";
import MultiSelect from "./FormControl/MultiSelect";

const EditFilm = (props) => {
    let filmInfo = props.filmInfo;
    
    let closeEditForm = () => {
        props.hideEditForm();
    };

    const validationSchema = Yup.object({
        film_id: Yup.number().required("Required"),
        title: Yup.string().required("Required"),
        rating: Yup.string().required("Required"),
        release_date: Yup.date().required("Required"),
        film_url: Yup.string().url(),
        genre: Yup.array().required("Required"),
        overview: Yup.string().required("Required"),
        runtime: Yup.number().moreThan(0).required("Required")
    });

    const formik = useFormik({
        initialValues: {
            film_id:  filmInfo.id,
            title: filmInfo.title,
            rating: filmInfo.vote_average,
            release_date: filmInfo.release_date,
            film_url: filmInfo.poster_path,
            genre: filmInfo.genres,
            overview: filmInfo.overview,
            runtime: filmInfo.runtime
        },
        onSubmit (values, onSubmitForms) {
            onSubmitForms.resetForm();        
        },
        validationSchema,
        enableReinitialize: true
    })
    
    return props.isEditFormShow && (
        <div className={style.root}>
            <div className={style.formWrapper}>
                <form onSubmit={ formik.handleSubmit } onReset={ formik.handleReset }>
                    <div className={style.closeDiv} onClick={ closeEditForm }>
                        &#10006;
                    </div>
                    <div className={style.actionText}>
                        EDIT MOVIE
                    </div>

                    <Input label="TITLE" id="title" type="text" placeholder="Moana"
                           {...formik.getFieldProps("title")}  
                           error={ formik.errors.title } 
                           touched={ formik.touched.title } />

                    <Input label="FILM ID" id="film_id" type="text" placeholder="1234"
                           {...formik.getFieldProps("film_id")} 
                           error={ formik.errors.film_id }
                           touched={ formik.touched.film_id } 
                           disabled={ true } />

                    <Input label="FILM URL" id="film_url" type="text" placeholder="http://"
                           {...formik.getFieldProps("film_url")} 
                           error={ formik.errors.film_url }
                           touched={ formik.touched.film_url } />
                        
                    <Input label="RATING" id="rating" type="text" placeholder="0.0"
                           {...formik.getFieldProps("rating")}  
                           error={ formik.errors.rating } 
                           touched={ formik.touched.rating } />

                    <MultiSelect label="GENRE" id="genre"
                            {...formik.getFieldProps("genre")} 
                            options={ props.options } 
                            error={ formik.errors.genre }
                            touched={ formik.touched.genre } />

                    <Input label="RELEASE DATE" id="release_date" type="date"
                           {...formik.getFieldProps("release_date")} 
                           error={ formik.errors.release_date }
                           touched={ formik.touched.release_date }
                           cls={ style.dateInput } />                     

                    <Input label="OVERVIEW" id="overview" type="text" placeholder="About film..."
                           {...formik.getFieldProps("overview")} 
                           error={ formik.errors.overview } 
                           touched={ formik.touched.overview }/> 

                    <Input label="RUNTIME" id="runtime" type="text" placeholder="120"
                           {...formik.getFieldProps("runtime")} 
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
    options: state.films.genres,
    filmInfo: state.forms.filmInfo,
    isEditFormShow: state.forms.isEditFormShow
}) 

let mapDispatchToProps = {
    hideEditForm
}

const EditFilmContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(EditFilm)

export default EditFilmContainer;