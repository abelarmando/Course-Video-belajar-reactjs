import { useProduct } from "../../../../store";
function Card_Profile({ Data, title }) {
  const product = useProduct((state) => state.product);
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white space-y-3">
      <h3>{title}</h3>
      <div className="md:flex gap-5 max-md:space-y-3">
        {product.length == undefined &&
          product.background.map((x, i) => (
            <div
              className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white space-y-2"
              key={i}
            >
              <div className="flex gap-3">
                <img src="/images/Icon/Avatar/Avatar-8.svg" alt="" />
                <div>
                  <b className="text-base">{x.name}</b>
                  <p className="text-sm  text-[#333333AD]">
                    {x.position}{" "}
                    {x.work && (
                      <span>
                        di <b>{x.work}</b>
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <p>{x.text}</p>
              <div className="flex gap-2">
                {x.imgrating && <img src={x.imgrating} alt="" />} {x.rating}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card_Profile;
