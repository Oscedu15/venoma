import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <section className="mt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-[72px]">
          <h4 className="h4 w-max border-b-2">Shop by Category</h4>
          <Link
            href={"#"}
            className="link-primary text-accent2
          hover:text-primary"
          >
            View All
          </Link>
        </div>
        {/* img grid */}
        <div className="grid grid-cols-3 gap-4 xl:gap-10 mb-10">
          {/* img 1 */}
          <div
            className="relative w-full h-[146px] 
          sm:h-[416px] xl:h-[496px]"
          >
            <Image
              src="/assets/img/category/1.jpg"
              fill
              quality={100}
              alt="grid-1"
              className="object-contain"
            />
          </div>
          {/* img 2 */}
          <div
            className="relative w-full h-[146px] 
          sm:h-[416px] xl:h-[496px]"
          >
            <Image
              src="/assets/img/category/2.jpg"
              fill
              quality={100}
              alt="grid-2"
              className="object-contain"
            />
          </div>
          {/* img 3 */}
          <div
            className="relative w-full h-[146px] 
          sm:h-[416px] xl:h-[496px]"
          >
            <Image
              src="/assets/img/category/3.jpg"
              fill
              quality={100}
              alt="grid-3"
              className="object-contain"
            />
          </div>
        </div>
        {/* category links */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
        gap-10"
        >
          {/* 1 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Inspiration</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Summer Clothes
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Summer Outfits
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Summer Tops
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Summer Hots
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Summer Dresses
                </a>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Casual</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Summer Tops
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Summer Tees
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  White Tees
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  High Waisted Shorts
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Short Shorts
                </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Sports</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Bike Shorts
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Basketball Shorts
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Plus-Size Swimwear
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Running Sunglasses
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Golf Shorts
                </a>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Summer Essentials</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Summer Shoes
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Summer Pants
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Sleeveless Shirts
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Sunglasses
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Moisture-Wicking Shirts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
