import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const Navigate = useNavigate();
  const schema = yup.object({
    fullName: yup.string().required("Please fill out this form"),
    email: yup
      .string()
      .required("Please put in your email")
      .email("Not a real email"),
    age: yup
      .number("Age must be a number")
      .required("Please put in your age")
      .min(18, "You must be at least 18"),
    password: yup
      .string()
      .required("Please put in a password")
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    (console.log(data), Navigate("/"));
  };

  return (
    <div>
      <h1>Ensar's Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullName")}
        />
        <p>{errors.fullName?.message}</p>

        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="number" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <input type="submit" value="Submit" />
      </form>
      <button onClick={()=> Navigate("/")}>Return Home</button>
    </div>
  );
};
