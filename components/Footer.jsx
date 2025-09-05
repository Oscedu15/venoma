const Footer = () => {
  return (
    <footer className="pt-24">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
        gap-10"
        >
          {/* 1 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Products </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Shoes
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Clothing
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Accesories
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Gift Cards
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Sale
                </a>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Resources</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Find a Store
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Become A Member
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Student Discounts
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Send Us Feedback
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Golf Shorts
                </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Help</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  Get Help
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Order Status
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Delivery
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Returns
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Payment Options
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div className="">
            <h6 className="h6 pb-4 mb-6 border-b-2">Company</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a className="link-secondary" href="#">
                  About Venoma
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  News
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Carrers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Investors
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
