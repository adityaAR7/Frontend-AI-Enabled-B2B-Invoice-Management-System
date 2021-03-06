import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'



export  function useForm(initailValues,validateOnChange=false,validate) {
    const [values,setValues]=useState(initailValues);
    const [errors,setErrors]=useState({});
    const handleChange=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnChange)
        validate({[name]:value})
    }
    const resetForm=()=>{
        setValues(initailValues)
        setErrors({})
    }
  return{
      values,
      setValues,
      errors,
      setErrors,
      handleChange,
      resetForm

  }
}
const useStyles = makeStyles(theme=>({
    root: {
        '& .MuiFormControl-root':{
            width:"60%",
            margin:theme.spacing(1)
        }
    },
}))
export function Form(props) {
const classes=useStyles();
const {children , ...other}=props
  return (
      <form className={classes.root} autoComplete='off' {...other}>
          {props.children}
      </form>
  )
}
