import { useEffect, useRef, useState } from "react";
import FormRow from "../ui/FormRow";
import Button from "../ui/Button";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function User() {
  const [isDisabled, setDisaled] = useState(true);
  const { username, email, password } = useSelector(
    (state) => state.users.AuthentificatedUser
  );
  const input = useRef();

  function handleUpdate() {
    setDisaled(false);
  }
  useEffect(
    function () {
      !isDisabled && input.current.focus();
    },
    [isDisabled]
  );

  const { handleSubmit, reset, register } = useForm();

  return (
    <div className=" relative mt-20  w-full  ">
      <h1 className="text-slate-600 mb-10 font-bold text-2xl">
        Personal informations
      </h1>
      <div className="w-full flex items-center justify-center">
        <div>
          <form>
            <FormRow>
              <label className="text-slate-600 px-2 font-semibold">
                username
              </label>
              <input
                ref={input}
                defaultValue={username}
                disabled={isDisabled}
                className="input"
                type="text"
              />
            </FormRow>
            <FormRow>
              <label className="text-slate-600 px-2 font-semibold">email</label>
              <input
                disabled={isDisabled}
                defaultValue={email}
                className="input"
                type="text"
              />
            </FormRow>
            <FormRow>
              <label className="text-slate-600 px-2 font-semibold">
                password
              </label>
              <input
                disabled={isDisabled}
                defaultValue={password}
                className="input"
                type="password"
              />
            </FormRow>
          </form>
          <div>
            {isDisabled && (
              <Button type="primary" onClick={() => handleUpdate()}>
                update infos
              </Button>
            )}
            <Button type="primary">save </Button>
            <Button type="secondary">delete account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
