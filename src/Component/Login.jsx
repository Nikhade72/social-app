import React from 'react'
import styles from './Login.module.css'
import InputControl from "./InputControl"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
import  { useState } from 'react'

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  })

  const [errorMsg, setErrorMsg] = useState("")
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Filled All Fields")
      return;
    }
    setErrorMsg("");


    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async(res) => {
        setSubmitButtonDisabled(false);
navigate('/')
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message)
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl label="Email" placeholder="Enter Email Address" 
        onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))}
          />
        <InputControl label="Password" placeholder="Enter Password" 
        onChange={(event) =>
          setValues((prev) => ({ ...prev, pass: event.target.value }))}
        />

        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
          <p>Already have an account?{""}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login