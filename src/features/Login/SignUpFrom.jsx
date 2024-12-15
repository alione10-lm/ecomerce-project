import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { addUser } from "../../slices/usersSlice";
import FormRow from "../../ui/FormRow";
import Error from "../../ui/Error";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

function SignUpFrom({ LoginSession }) {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function Onsubmit(data) {
    toast.success("you account created successfuly");
    dispatch(addUser(data));
    LoginSession(true);
  }

  return (
    <form
      onSubmit={handleSubmit(Onsubmit)}
      className="flex flex-col  p-20 gap-2 items-start"
    >
      <FormRow>
        <label className="text-slate-500">username</label>
        <input
          className="input"
          type="text"
          {...register("username", { required: "this filed is required" })}
        />
        {errors?.username?.message && (
          <Error>{errors?.username?.message}</Error>
        )}
      </FormRow>
      <FormRow>
        <label className="text-slate-500"> email</label>
        <input
          className="input"
          type="text"
          {...register("email", { required: "this field is required " })}
        />
        {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
      </FormRow>
      <FormRow>
        <label className="text-slate-500"> password</label>
        <input
          className="input"
          type="text"
          {...register("password", {
            required: "this field is required",
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
      <Button type="primary">Sign up</Button>
      <p className="flex gap-2">
        <span className="text-slate-500">already have an account?</span>
        <span onClick={LoginSession} className="text-slate-900 cursor-pointer">
          Sign in
        </span>
      </p>
    </form>
  );
}

export default SignUpFrom;
