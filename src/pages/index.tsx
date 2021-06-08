import { GetStaticPropsResult } from "next";

type Cv = { experiences: string[] };

const Index = ({ experiences }: Cv): JSX.Element => (
  <>
    <h1 className="text-pink-400">Clem</h1>
    <div className="w-1/2 mx-auto">
      {experiences.map((xp, index) => (
        <section
          key={xp}
          className={`border w-1/2 ${
            index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"
          }`}
        >
          <p>{xp}</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            asperiores voluptatem alias nostrum voluptate rem ut consequatur
            vitae minus. Ducimus dolorem, non dolores magnam necessitatibus
            velit tempore a cupiditate odio.
          </p>
        </section>
      ))}
    </div>
  </>
);

export default Index;

export async function getStaticProps(): Promise<GetStaticPropsResult<Cv>> {
  return {
    props: { experiences: new Array(10).fill("job") },
  };
}
