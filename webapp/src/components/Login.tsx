import '../styles/login/login.scss';

//TD1a
const Login: React.FC = () => {
    return (
        <div className='login'>
            <img src={require('../img/login.png')} alt="Login Image" />
            <form>
                <label htmlFor="email">e-mail</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button>Login</button>
                <a href="#">SignUp</a>
            </form>
        </div>
    );
};

export default Login;