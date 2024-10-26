import { useForm } from "react-hook-form";
import { useLogInMutation } from "../../redux/features/auth/authApi";
import { Link } from "react-router-dom";

type TData = {
  email: string;
  password: string;
};

const LogIn = () => {
  const { register, handleSubmit } = useForm();
  const [logIn] = useLogInMutation();

  const onSubmit = async (data: TData) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await logIn(userInfo).unwrap();
    console.log(res);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-2/4">
        <div className="card bg-base-100 w-2/4 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Don't have an account? please{" "}
              <Link
                to={"/signUp"}
                className="text-primary-foreground font-semibold"
              >
                Sign up!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
