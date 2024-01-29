import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const dataCars = await fetchCars();

  const isDataEmpty =
    !Array.isArray(dataCars) || dataCars.length < 1 || !dataCars;

  return (
    <main className={"overflow-hidden"}>
      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className={"text-4xl font-extrabold"}>Каталог автомобилей</h1>
          <p>Изучите автомобили, которые могут вам понравиться</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {dataCars.map((car) => {
                return <CarCard car={car} />;
              })}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Результатов нет</h2>
            <p>{dataCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
