import '../styles/login/login.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//TD1a
const Login: React.FC = () => {
    return (
        <div className='login'>
            <img src={require('../img/login.png')} alt="Login Image" />
            <form>
                <label htmlFor="email" className='form-label'>e-mail</label>
                <input type="text" name="email" id="email" className='form-control' />
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" name="password" id="password" className='form-control' />
                <button className='btn btn-success'>Login</button>
                <a href="#" className='link-primary'>SignUp</a>
            </form>
        </div>
    );
};

export default Login;