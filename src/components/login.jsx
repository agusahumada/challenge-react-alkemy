import { useFormik } from 'formik';
import { enviarDatos } from './Request';
import { useHistory } from 'react-router-dom';
import validate from './validates/Login'
import Swal from 'sweetalert2'

const Login = () => {
    let history = useHistory();
    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validate,
      onSubmit: values => {
          enviarDatos(formik.values.email, formik.values.password,(res)=>{         
              localStorage.setItem('token', res.data.token);
              history.push("/home");
          },(err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.error,
              })
          });
        }
    });

    return (
        <div>
            <h3 className="text-light d-flex justify-content-center p-3">Para formar tu propia liga primero necesitas acceder</h3>
            <form onSubmit={formik.handleSubmit} className="bg-form">
                <div className="p-3 blur">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={formik.handleChange} value={formik.values.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">Contraseña </label>
                        <input type="password" name="password" onChange={formik.handleChange} value={formik.values.password}className="form-control" id="password" />
                        {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                    </div>
                    <div className="d-grid gap-2 col-12 mx-auto">
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;