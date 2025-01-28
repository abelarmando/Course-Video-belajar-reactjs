function Bank({ children, id, title, img }) {
  return (
    <li
      className="flex justify-between items-center border-[1px] border-[#F1F1F1] rounded-md p-3"
      onClick={() => console.log(id)}
      key={id}
    >
      <label className="flex gap-2">
        <img src={img} alt="bca" />
        {children}
        {title}
      </label>
      <input
        id={id}
        type="checkbox"
        className="appearance-none w-6 h-6 checked:bg-[url('/images/Icon/Icon/Bank/Checked.svg');] checked:bg-no-repeat checked:bg-cover "
      />
    </li>
  );
}

export default Bank;
