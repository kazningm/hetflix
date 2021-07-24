import React from "react";
import style from "./AddFilm.module.css";
import { useFormik } from "formik";
import { compose } from "redux";
import { connect } from "react-redux";

const AddFilm = (props) => {
    debugger
    const formik = useFormik({
        initialValues: {
            film_id: "",
            title: "",
            release_date: "",
            film_url: "",
            genre: "",
            overview: "",
            runtime: ""
        },
        onSubmit (values) {
            console.log(values)
        }
    })

    return props.isAddFormShow && (
        <div className={style.root}>
            <div className={style.formWrapper}>
                <form onSubmit={ formik.handleSubmit }>
                    <div className={style.closeDiv}>
                        &#10006;
                    </div>
                    <div className={style.actionText}>
                        EDIT MOVIE
                    </div>
                    <label htmlFor="film_id">FILM ID</label>
                    <input type="text" 
                           id="film_id" 
                           name="film_id" 
                           onChange={ formik.handleChange } 
                           value={ formik.values.film_id }
                           disabled />

                    <label htmlFor="title">TITLE</label>
                    <input type="text" 
                           id="title" 
                           name="title" 
                           onChange={ formik.handleChange }
                           value={ formik.values.title } />

                    <label htmlFor="release_date">RELEASE DATE</label>
                    <input type="date" 
                           id="release_date" 
                           name="release_date" 
                           className={style.dateInput} 
                           onChange={ formik.handleChange }
                           value={ formik.values.release_date } />

                    <label htmlFor="film_url">FILM URL</label>
                    <input type="text" 
                           id="film_url" 
                           name="film_url" 
                           onChange={ formik.handleChange }
                           value={ formik.values.film_url } />

                    <label htmlFor="genre">GENRE</label>
                    <select name="genre" 
                            id="genre"
                            onChange={ formik.handleChange }
                            value={ formik.values.genre } >
                        <option value="Action">Action</option>
                        <option value="Crime">Crime</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>

                    <label htmlFor="overview">OVERVIEW</label>
                    <input type="text" 
                           id="overview" 
                           name="overview"
                           onChange={ formik.handleChange }
                           value={ formik.values.overview } />

                    <label htmlFor="runtime">RUNTIME</label>
                    <input type="text" 
                           id="runtime" 
                           name="runtime" 
                           onChange={ formik.handleChange }
                           value={ formik.values.runtime }/>

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
    isAddFormShow: state.forms.isAddFormShow
}) 

const AddFilmContainer = compose(
    connect(mapStateToProps, null)
)(AddFilm)

export default AddFilmContainer;