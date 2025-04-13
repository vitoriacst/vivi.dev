export default function ProjectsCards() {
  return (
    <section className="flex items-start w-full justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold">Meus Projetos</h1>
          <div className="flex flex-col items-start">
            <div className="flex flex-col items-start shadow-md p-4 rounded-md h-full">
            <h2 className="text-lg font-semibold">Vivi.ui</h2>
            <p>Minha biblioteca de componentes</p>
            </div>
          </div>
        </div>
    </section>
  );
}
