import React from "react";

type PricingCardProps = {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => (
  <div
    tabIndex={0}
    aria-label={`${plan} plan`}
    className={`
      flex flex-col items-center w-full sm:w-80
      ${
        isFeatured
          ? "sm:scale-110 bg-slate-700 text-white z-20 shadow-2xl sm:-mt-8"
          : "bg-white text-slate-700 z-10 border border-slate-200 shadow-lg"
      }
      transition
      duration-200
      outline-none
      ring-0
      focus-visible:ring-4 focus-visible:ring-blue-400
      hover:shadow-2xl
      hover:-translate-y-1
      cursor-pointer
      mx-auto
    `}
  >
    <div className="flex flex-col items-center px-8 py-8 w-full">
      <span
        className={`text-lg font-semibold mb-2 tracking-wide ${
          isFeatured ? "text-white" : "text-slate-500"
        }`}
      >
        {plan}
      </span>
      <span className="text-5xl font-extrabold mb-12 tracking-tight">
        {price}
      </span>
      <div
        className={`w-full h-px ${
          isFeatured ? "bg-slate-500" : "bg-slate-200"
        }`}
      ></div>
      <div className="w-full py-2">
        <ul className="w-full">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`py-4 border-b last:border-b-0 text-center text-base font-medium ${
                isFeatured ? "border-slate-500" : "border-slate-200"
              } list-none`}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`w-full h-px ${
          isFeatured ? "bg-slate-500" : "bg-slate-200"
        }`}
      ></div>
      <button
        className={`
          w-full mt-8 font-bold
          bg-transparent border-none shadow-none rounded-none
          p-0
          ${isFeatured ? "text-white" : "text-slate-700"}
          hover:underline focus:underline
          cursor-pointer
          transition
          uppercase
          tracking-wide
          outline-none focus-visible:ring-2 focus-visible:ring-blue-400
        `}
        style={{ fontFamily: "inherit", fontSize: "inherit" }}
      >
        SUBSCRIBE
      </button>
    </div>
  </div>
);

export const PricingSection: React.FC = () => (
  <div className="bg-[#232323] min-h-screen flex flex-col items-center py-12 px-2">
    <h2 className="text-white text-3xl font-bold mb-10">Pricing</h2>
    <div
      className="
        relative
        flex flex-col sm:flex-row
        gap-8 sm:gap-0
        max-w-5xl w-full
        items-center
        justify-center
        pt-12
      "
    >
      {/* Standard Card (left) */}
      <div className="w-full sm:absolute sm:left-[calc(50%-480px)] z-0 flex justify-center sm:justify-end">
        <PricingCard
          plan="Standard"
          price="$100"
          features={[
            "50,000 Requests",
            "4 contributors",
            "Up to 3 GB storage space",
          ]}
        />
      </div>
      {/* Pro Card (center, featured) */}
      <div className="w-full z-20 flex justify-center">
        <PricingCard
          plan="Pro"
          price="$200"
          features={[
            "100,000 Requests",
            "7 contributors",
            "Up to 6 GB storage space",
          ]}
          isFeatured
        />
      </div>
      {/* Expert Card (right) */}
      <div className="w-full sm:absolute sm:right-[calc(50%-480px)] z-0 flex justify-center sm:justify-start">
        <PricingCard
          plan="Expert"
          price="$500"
          features={[
            "200,000 Requests",
            "11 contributors",
            "Up to 10 GB storage space",
          ]}
        />
      </div>
    </div>
  </div>
);

export default PricingCard;
