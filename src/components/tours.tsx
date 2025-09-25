type Tour = {
  id: number;
  title: string;
  price: number;
  img: string;
  blurb: string;
};

const tours: Tour[] = [
  {
    id: 1,
    title: "Best Of Paris In 7 Days Tour",
    price: 1995,
    img: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of …",
  },
  {
    id: 2,
    title: "Best Of Ireland In 14 Days Tour",
    price: 3895,
    img: "https://images.unsplash.com/photo-1507371341162-763b5e419408?q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale …",
  },
  {
    id: 3,
    title: "Best Of Salzburg & Vienna In 8 Days Tour",
    price: 2695,
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop",
    blurb:
      "Where classical music, towering castles, and hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and Austria’s Golden Age. Your Rick Steves guide will bring the …",
  },
];

function PriceBadge({ price }: { price: number }) {
  return (
    <div className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white shadow-lg">
      ${price.toLocaleString()}
    </div>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
      <div className="relative">
        <img
          src={tour.img}
          alt={tour.title}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <PriceBadge price={tour.price} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          {tour.title}
        </h3>
        <p className="text-sm leading-6 text-gray-600">{tour.blurb}</p>
        <div className="mt-auto pt-2">
          <button
            type="button"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}

export default function OurToursSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <h2 className="text-4xl font-bold tracking-tight">Our Tours</h2>
        <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-emerald-500" />
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((t) => (
          <TourCard key={t.id} tour={t} />
        ))}
      </div>
    </section>
  );
}
