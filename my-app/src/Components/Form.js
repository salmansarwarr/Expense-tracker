import React from 'react'
import * as Yup from "yup"
import { Formik } from "formik"
import { add } from "../Redux/actions"
import { useDispatch } from "react-redux"

function Form() {
    const dispatch = useDispatch()
    const validations = Yup.object().shape({
        name: Yup.string().required("Must be filled").max(10, "must be less than 10 characters"),
        price: Yup.number().required("Must be filled")
    })

    return (
        <section className='form flex'>
            <div className='container card'>
                <h2>New Transaction</h2>
                <Formik
                    initialValues={{name: "", price: ""}}
                    validationSchema={validations}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setTimeout(() => {
                            dispatch(add(values));
                            setSubmitting(false);
                            resetForm();    
                        }, 1000);
                    }}
                >
                    {
                        ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                            <form onSubmit={handleSubmit} className='flex'>
                                <div className='input-row flex'>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        name="name"
                                        id='name'
                                        placeholder={`Enter item's name`}
                                        autoComplete="off"
                                    />
                                    <div className='error'>{ touched.name && errors.name }</div>
                                </div>
                                <div className='input-row flex'>
                                    <label htmlFor='price'>Price(+ for income, - for expense)</label>
                                    <input
                                        type="number"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        name="price"
                                        id='price'
                                        placeholder={`Enter price`}
                                        autoComplete="off"
                                    />
                                    <div className='error'>{ touched.price && errors.price }</div>
                                </div>
                                <div className='input-row'>
                                    <button 
                                        type='submit' 
                                        disabled={isSubmitting}
                                    >
                                        Add new transaction
                                    </button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
                <img src='https://assets.materialup.com/uploads/c2b5ecb4-ccae-4d53-b0fb-117058776fb4/preview.png' alt='expense tracker'/>
            </div>
        </section>
    )
}

export default Form
