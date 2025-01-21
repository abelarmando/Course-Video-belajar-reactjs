function Deskripsi({ children }) {
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-5 bg-white">
      <h3>Deskripsi</h3>
      <p>{children}</p>
    </div>
  );
}

export default Deskripsi;
