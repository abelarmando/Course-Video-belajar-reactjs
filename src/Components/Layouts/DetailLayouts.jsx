import Banner from "../Fragments/Banner";

function DetailLayouts() {
  return (
    <Banner img="bg-bannerheaderImg">
      <h1>
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h1>
      <p>
        Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.
      </p>
      <div className="flex gap-1 underline underline-offset-2">
        <img src="./images/Rating.svg" alt="rating" />
        <span>3.5 (86)</span>
      </div>
    </Banner>
  );
}

export default DetailLayouts;
