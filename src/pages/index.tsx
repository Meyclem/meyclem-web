import { Layout } from "@components/layout";

const Index = (): JSX.Element => {
  return (
    <Layout title="About">
      <div className="container mx-auto">
        <div className="flex items-center h-72 justify-center">
          <img
            className="rounded-full w-32 h-32 mr-16"
            src="https://avatars.githubusercontent.com/u/29123047?v=4"
            alt="Clement's picture"
          />
          <div>
            <h1 className="font-bold text-3xl">
              Hi! I'm <span className="text-pink-400">Clement</span>
            </h1>
            <h2 className="font-semibold text-xl">Fullstack web developer</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
