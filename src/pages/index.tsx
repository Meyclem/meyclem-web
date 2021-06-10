import { Deck } from "@components/Deck";
import { useEffect } from "react";

const Index = (): JSX.Element => {
  useEffect(() => {
    import("reveal.js")
      .then((pkg) => pkg.default)
      .then((Reveal) => new Reveal().initialize({ embedded: true }));
  }, []);

  return (
    <Deck>
      <section>
        <div className="flex items-center justify-center">
          <div>
            <p className="font-bold">
              Hi! I'm <span className="text-pink-400">Clement</span>
            </p>
            <p>Fullstack web developer</p>
          </div>
          <img
            className="rounded-full w-32 h-32"
            src="https://avatars.githubusercontent.com/u/29123047?v=4"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center">
          <img
            className="rounded-full w-32 h-32"
            src="https://avatars.githubusercontent.com/u/29123047?v=4"
            alt=""
          />
          <p className="font-bold">
            Hi! I'm <span className="fragment text-pink-400">still there</span>
          </p>
        </div>
      </section>
    </Deck>
  );
};

export default Index;
