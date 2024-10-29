import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

type TFieldValues = {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<TFieldValues>();
  const [signUp] = useSignUpMutation(undefined);
  const navigate = useNavigate();

  const onSubmit = async (data: TFieldValues) => {
    const toastId = toast.loading("sign up");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        password: data.password,
      };
      const res = await signUp(userInfo).unwrap();
      console.log(res);

      toast.success("signUp success", { id: toastId, duration: 2000 });
      if (await res.success) {
        navigate("/login");
        toast.info("Please, Log in", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("something wrong");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-2/4">
        <div className="card bg-base-100 w-2/4 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
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
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="phone"
                className="input input-bordered"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered"
                {...register("address", { required: true })}
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p>
              Don't have an account? please{" "}
              <Link
                to={"/logIn"}
                className="text-primary-foreground font-semibold text-green-600"
              >
                Log In!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
