import { Hero, Header, Unleash } from "./containers";

function App() {
  return (
    <div className="bg-background text-text font-primary pb-[1000px] overflow-x-hidden">
      <header className="flex flex-col">
        <Header />
        <Hero />
      </header>
      <Unleash />
    </div>
  );
}

export default App;
