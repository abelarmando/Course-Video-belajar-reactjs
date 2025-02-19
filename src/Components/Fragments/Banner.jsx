function Banner(props) {
  const { img, children } = props;

  return (
    <div className={` bg-repeat bg-cover w-full h-fit rounded-xl ${img} `}>
      <div className={props.class}>{children}</div>
    </div>
  );
}
export default Banner;
