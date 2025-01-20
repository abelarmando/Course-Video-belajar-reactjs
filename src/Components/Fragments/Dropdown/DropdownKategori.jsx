function DropdownKategori({ text, classname, Drop }) {
  return (
    <li className={` flex gap-3 ${Drop} `}>
      <input type="checkbox" className={classname} id={text} />
      <label htmlFor={text}>{text}</label>
    </li>
  );
}

export default DropdownKategori;
