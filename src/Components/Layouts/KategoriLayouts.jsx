import FilterKategori from "../Fragments/FilterKategori";
import Pagecard from "../Fragments/Pagecard";

function KategoriLayouts() {
  return (
    <div className="md:flex gap-12 w-full">
      <FilterKategori />
      <Pagecard />
    </div>
  );
}

export default KategoriLayouts;
