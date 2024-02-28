import SignSignUpForm from "./SignSignUpForm";


const Login = () => {
  
  return (
    <div className="relative h-screen w-full bg-black">
      <div>
        <img
          className="w-full h-screen object-cover hidden md:block"
          src={'/assets/kalam.jpg'}
          alt="bg-image"
        />
      </div>
      <SignSignUpForm/>
    </div>
  );
};

export default Login;
