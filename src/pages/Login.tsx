import facebook from "../assets/images/facebook.png";
import gmail from "../assets/images/gmail.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import background from "../assets/images/background-log-in.png";
import Logo from "../components/Logo";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../apis/auth";
import { setToken } from "../helpers/token";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const loginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(10, "Password must be at least 10 characters long"),
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin12345",
    },
  });

  const handleLogin: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const json = await login(data.email, data.password);

      if (json.status !== 200) {
        throw new Error(json.message);
      }

      setToken(json.token);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <section
      className="md:py-16 bg-no-repeat bg-left-top"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 rounded-lg shadow-none md:w-1/2 2xl:w-1/3">
        <a
          href="#/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Logo />
          <span className="self-center text-3xl font-base whitespace-nowrap text-[#232D42]">
            Hope Ui
          </span>
        </a>
        <div className="text-center w-full  p-6 space-y-4 sm:p-8 ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#000000]">
            Sign In
          </h2>
          <p className="text-[#8A92A6]">Sign in to stay connected.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-[#8A92A6]"
            >
              Email
            </label>
            <Input
              type="email"
              placeholder="abc@gmail.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-[#8A92A6]"
            >
              Password
            </label>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div className="flex flex-row ">
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
                Remember me?
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-base font-base text-[#3A57E8] hover:underline "
            >
              Forgot Password
            </a>
          </div>
          <div className="flex justify-center">
            <Button type="submit"> Sign in</Button>
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
          <div className="text-base font-base text-[#232D42] flex justify-between ">
            Dont have an account?
            <Link
              to="/sign-up"
              className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
            >
              Click here to sign up.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
