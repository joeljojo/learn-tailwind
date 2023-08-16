import image from "./assets/images/illustration-sign-up-desktop.svg";
import iconList from "./assets/images/icon-list.svg";
const NewsLetter = () => {
  const handleOnFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" bg-white rounded-xl flex w-auto my-12 mx-0 xs:m-0 xs:rounded-none xs:flex-col-reverse xs:w-full xs:bg-white">
      <div className=" w-full p-6 xs:w-1/2 xs:mr-7 xs:my-14">
        <h1 className="font-bold text-4xl text-slate-900 mt-14">
          Stay updated!
        </h1>
        <p className=" my-4">
          Join 60,000+ product managers receiveing monthly updates on:
        </p>
        <div className=" flex flex-col gap-2">
          <div className="flex align-middle">
            <span className=" pr-2">
              <img src={iconList} alt="" />
            </span>
            <p className=" text-base align-middle">
              Product discovery and building what matters
            </p>
          </div>
          <div className=" flex align-middle">
            <span className="pr-2">
              <img src={iconList} alt="" />
            </span>
            <p className=" text-base align-middle">
              Measuring to ensure updates are a success
            </p>
          </div>
          <div className="flex align-middle">
            <span className="pr-2">
              <img src={iconList} alt="" />
            </span>
            <p className=" text-base">And much more!</p>
          </div>
        </div>
        <form onSubmit={handleOnFormSubmit}>
          <div className=" mt-8">
            <label htmlFor="email" className=" text-gray-900 font-bold">
              Email address
            </label>
          </div>
          <div className="mt-1 xs:mt-3 w-full xs:w-auto xs:mr-4">
            <input
              className="border border-gray-300 w-full py-2 px-4 rounded bg-transparent focus:outline-none focus:border-gray-400"
              type="email"
              name="email"
              id="email"
              placeholder="email@company.com"
            />
          </div>
          <div className=" mt-3 w-full xs:mt-4 xs:w-auto">
            <button
              className=" bg-slate-900 text-white text-base p-3 rounded-lg w-full hover:bg-red-500 focus:outline-none focus:bg-red-500"
              type="submit"
            >
              Subsscribe to monthly newsletter
            </button>
          </div>
        </form>
      </div>
      <div className="w-full xs:w-screen xs:m-0">
        <img
          className=" w-full p-6  h-full object-contain xs:w-full xs:h-full xs:mx-0"
          src={image}
          alt="Illustration Desktop Sign Up"
        />
      </div>
    </div>
  );
};
export default NewsLetter;
