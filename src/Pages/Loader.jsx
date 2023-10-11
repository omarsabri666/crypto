import { Oval } from "react-loader-spinner";

function Loader() {
    return (
      <div className=" w-screen h-screen   flex justify-center items-center ">
        <Oval
          height={80}
          width={80}
          color="#ff00ea"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#271396"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
}

export default Loader
