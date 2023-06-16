import { Hero, Header, Section1 } from "./containers";

function App() {
  return (
    <div className="bg-background text-text font-primary pb-[1000px]">
      <header className="flex flex-col">
        <Header />
        <Hero />
      </header>
      <Section1 />
    </div>
  );
}

export default App;
