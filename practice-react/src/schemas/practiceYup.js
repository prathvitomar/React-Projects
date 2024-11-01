import * as Yup from "yup";

const practiceSchema = Yup.object({
    name : Yup.string().max(20).min(3).required("Please Enter Name"),
    email : Yup.string().email().required("Please Enter Email"),
    password : Yup.string().required("Please Enter Password"),
    confirmPassword : Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match")
})

export default practiceSchema