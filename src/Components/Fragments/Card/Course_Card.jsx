function Course_Card({ text, children, handleclick }) {
  return (
    <div
      className="border-[1px] border-[#F1F1F1] rounded-md p-5 flex gap-2 cursor-pointer"
      onClick={handleclick}
    >
      <div className="h-10 flex items-center justify-center">{children}</div>
      <div>
        <p>Video: {text}</p>
        <p>12 menit</p>
      </div>
    </div>
  );
}

export default Course_Card;
