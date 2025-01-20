import FilterKategori from "../Fragments/FilterKategori";
import Pagecard from "../Fragments/Pagecard";

function KategoriLayouts() {
  return (
    <div className="flex gap-12">
      <FilterKategori />
      <Pagecard />
    </div>
  );
}

export default KategoriLayouts;
