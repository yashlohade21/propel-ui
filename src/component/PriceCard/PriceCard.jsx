import "./PriceCard.css";

function PriceCard() {
  return (
    <div className="PriceCard-Section ">
      <h2 className="text-3xl text-white text-center ">
        Our Unique Learning Methodology
      </h2>
      <div className="PriceCard-Collection  lg:flex  md:block   justify-center  ">
        <div className="PriceCard   rounded overflow-hidden shadow-lg py-2 lg:w-1/4 w-4/5 lg:mx-0  mx-auto my-4">
          <h2 className=" px-3 mt-2 text-2xl text-start">Foundation</h2>
          <p className=" px-3  text-xs text-start mb-4">
            Perfect for individuals.
          </p>
          <button
            className="
PriceCard-btn text-start px-5 "
          >
            Team members: 1
          </button>
          <button
            className="
PriceCard-btn text-start  px-5 "
          >
            Users: Unlimited
          </button>
          <button
            className="
PriceCard-btn text-start  px-5"
          >
            Integrations: Unlimited
          </button>
          <button
            className="
PriceCard-btn text-start px-5 mb-9"
          >
            Total message: 150
          </button>
        </div>

        {/* ------------------------ */}
        <div className="rounded overflow-hidden shadow-lg py-2 PriceCard lg:w-1/4  w-4/5  lg:mx-[50px]  mx-auto my-4 ">
          <h2 className=" px-3 mt-2 text-2xl text-start">Foundation</h2>
          <p className=" px-3  text-xs text-start mb-4">
            Perfect for individuals.
          </p>
          <button
            className="
PriceCard-btn text-start px-5 "
          >
            Team members: 1
          </button>
          <button
            className="
PriceCard-btn text-start  px-5 "
          >
            Users: Unlimited
          </button>
          <button
            className="
PriceCard-btn text-start  px-5"
          >
            Integrations: Unlimited
          </button>
          <button
            className="
PriceCard-btn text-start px-5 mb-9"
          >
            Total message: 150
          </button>
        </div>

        {/* ------------------------ */}
        <div className="  rounded overflow-hidden shadow-lg py-2  PriceCard lg:w-1/4 w-4/5 lg:mx-0 mx-auto my-4 ">
          <h2 className=" px-3 mt-2 text-2xl text-start">Foundation</h2>
          <p className=" px-3  text-xs text-start mb-4">
            Perfect for individuals.
          </p>
          <button
            className="
PriceCard-btn text-start px-5 "
          >
            Team members: 1
          </button>
          <button
            className="
PriceCard-btn text-start  px-5 "
          >
            Users: Unlimited
          </button>
          <button
            className="
PriceCard-btn text-start  px-5"
          >
            Integrations: Unlimited
          </button>
          <button
            className="
PriceCard-btn text-start px-5 mb-9"
          >
            Total message: 150
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
