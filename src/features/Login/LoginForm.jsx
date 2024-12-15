import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Islogin } from "../../slices/usersSlice";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import Button from "../../ui/Button";

function LoginForm({ SingUpSession }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Users = useSelector((state) => state.users.users);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function Onsubmit(data) {
    const CurrentUser = Users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    CurrentUser ? navigate("/app") : toast.error("invalid credentiels");
    CurrentUser && dispatch(Islogin(CurrentUser));
  }

  return (
    <form
      onSubmit={handleSubmit(Onsubmit)}
      className="flex flex-col  p-20 gap-2 items-start"
    >
      <FormRow>
        <label className="text-slate-500"> email</label>
        <input
          className="input"
          type="text"
          {...register("email", {
            required: "this filed is required",
          })}
        />
        {errors?.email?.message && <Error>{errors?.email?.message} </Error>}
      </FormRow>
      <FormRow>
        <label className="text-slate-500"> password</label>

        <input
          className="input"
          type="text"
          {...register("password", {
            required: "this filed is required",
            minLength: {
              value: 5,
              message: "password  should be contains more than 5 caracters",
            },
          })}
        />
        {errors?.password?.message && (
          <Error>{errors?.password?.message}</Error>
        )}
      </FormRow>
      <Button type="primary">Sign in</Button>
      <p className="flex gap-2">
        <span className="text-slate-500">Don't have an account?</span>
        <span onClick={SingUpSession} className="text-slate-900 cursor-pointer">
          Sign up
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
