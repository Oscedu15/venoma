import { FolderClock, Rss } from "lucide-react";

const About = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16">
          <h2 className="h2">Found with a passion for excellence</h2>
          <div className="flex flex-col gap-12">
            <div className="">
              <div className="text-primary flex items-center gap-2 mb-4">
                <FolderClock className="text-2xl" />
                <h6 className="h6">Our Story</h6>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                provident architecto accusantium dolore consectetur quae aut
                dolorem minima, esse doloremque expedita cumque velit veritatis
                odio culpa! Possimus quasi optio sapiente.
              </p>
            </div>
            <div className="">
              <div className="text-primary flex items-center gap-2 mb-4">
                <Rss className="text-2xl" />
                <h6 className="h6">Our Story</h6>
              </div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                provident architecto accusantium dolore consectetur quae aut
                dolorem minima, esse doloremque expedita cumque velit veritatis
                odio culpa! Possimus quasi optio sapiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
