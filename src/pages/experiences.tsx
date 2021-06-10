import { Deck } from "@components/Deck";
import { useEffect } from "react";

const Experiences: React.FC = () => {
  useEffect(() => {
    import("reveal.js")
      .then((pkg) => pkg.default)
      .then((Reveal) => new Reveal().initialize({ embedded: true }));
  }, []);

  return (
    <Deck>
      <section id="experiences">
        <p>Toto's list</p>
        {["job1", "job2"].map((xp, index) => (
          <section key={xp + index} className="">
            <p className="font-bold text-xl text-pink-400">{xp + index}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              asperiores voluptatem alias nostrum voluptate rem ut consequatur
              vitae minus. Ducimus dolorem, non dolores magnam necessitatibus
              velit tempore a cupiditate odio.
            </p>
          </section>
        ))}
      </section>
    </Deck>
  );
};

export default Experiences;
