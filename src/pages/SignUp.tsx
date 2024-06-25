import background from "../assets/images/background-sign-up.png";
import Logo from "../components/Logo";
import gmail from "../assets/images/gmail.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
  );
  const signUpSchema = z
    .object({
      firstName: z
        .string()
        .min(3, "First Name must be at least 3 characters long"),
      lastName: z
        .string()
        .min(3, "Last Name must be at least 3 characters long"),
      email: z
        .string()
        .email({ message: "Please enter a valid email address" }),
      phone: z.string().regex(phoneRegex, "Invalid Number!"),
      password: z
        .string()
        .min(10, "Passwords must be at least 10 characters long"),
      confirmPassword: z.string(),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Passwords must match!",
        path: ["confirmPassword"],
      },
    );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const handleSignUp: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
    navigate("/Login");
  };

  return (
    <section
      className="md:py-16 bg-no-repeat bg-right-top"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="py-8 mx-auto max-w-screen-xl lg:py-16 rounded-lg shadow-none w-5/6 lg:w-3/4 2xl:w-1/2">
        <a href="#" className="flex items-center space-x-1 rtl:space-x-reverse">
          <Logo />
          <span className="self-center text-3xl font-base whitespace-nowrap text-[#232D42]">
            Hope Ui
          </span>
        </a>

        <div className="text-center w-full  p-6 space-y-4 sm:p-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000]">
            Sign Up
          </h2>
          <p className="text-[#8A92A6]">Create your Hope UI account</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
          <div className=" grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="First Name"
                className="block mb-2 text-sm text-[#8A92A6]"
              >
                First Name
              </label>
              <Input
                type="First Name"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="Last Name"
                className="block mb-2 text-sm text-[#8A92A6]"
              >
                Last Name
              </label>
              <Input
                type="Last Name"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="Email"
                className="block mb-2 text-sm text-[#8A92A6]"
              >
                Email
              </label>
              <Input
                type="Email"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="Phone Number"
                className="block mb-2 text-sm text-[#8A92A6]"
              >
                Phone Number
              </label>
              <Input
                type="Phone Number"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block mb-2 text-sm text-[#8A92A6]"
              >
                Password
              </label>
              <Input
                type="PassWord"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="Last Name"
                className="block mb-2 text-sm text-[#8A92A6]"
              >
                Confirm Password
              </label>
              <Input
                type="Password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-center ">
            <div className="flex items-center ">
              {/* <input */}
              {/*   id="remember" */}
              {/*   aria-describedby="remember" */}
              {/*   name="remember" */}
              {/*   type="checkbox" */}
              {/*   className="w-5 h-5 border-gray-300 rounded bg-gray-50 accent-[#3A57E8] " */}
              {/*   required */}
              {/* /> */}
            </div>
            <div className="ms-3 text-sm">
              <label
                htmlFor="remember"
                className="font-base text-base text-[#8A92A6]"
              >
                I agree with the terms of use
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <Button type="submit">Sign Up</Button>
          </div>
        </form>
        <div className="space-y-4 py-4">
          <a
            href="#"
            className="hover:underline hover:font-semibold text-base font-base text-[#232D42] flex justify-center"
          >
            or sign in with other accounts?
          </a>

          <div className="flex justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#">
              <img src={gmail} alt="Gmail" />
              <span className="sr-only">Gmail</span>
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#">
              <img src={linkedin} alt="Linkedin" />
              <span className="sr-only">Linkedin</span>
            </a>
          </div>
          <div className="text-base font-base text-[#232D42] flex justify-center ">
            Already have an Account
            <Link
              to="/login"
              className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
