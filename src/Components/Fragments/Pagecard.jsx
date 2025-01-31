import Pagination from "./Pagination";
import { Products } from "../Data/Data";
import { useState } from "react";
import CardProduct from "./Card/CardProduct";
import FilterKelas from "./FilterKelas";

function Pagecard() {
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(6);

  const indexOfLastPost = CurrentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = Products.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div className="space-y-3 w-full">
      <FilterKelas />
      <div className="grid gap-3 w-full grid-cols-2 max-md:grid-cols-1">
        {currentPosts.map((product) => (
          <CardProduct id={product.id}>
            <div className=" max-md:flex max-md:gap-3">
              <CardProduct.Header img={product.imgproduct} />
              <CardProduct.Body
                title={product.title}
                author={product.author}
                position={product.position}
                work={product.work}
                imgprofile={product.imgprofile}
              >
                {product.text}
              </CardProduct.Body>
            </div>
            <CardProduct.Footer rating={product.rating} price={product.price} />
          </CardProduct>
        ))}
      </div>
      <Pagination
        totalPost={Products.length}
        postsPerPage={PostsPerPage}
        setCurrentPage={setCurrentPage}
        CurrentPage={CurrentPage}
      />
    </div>
  );
}

export default Pagecard;
