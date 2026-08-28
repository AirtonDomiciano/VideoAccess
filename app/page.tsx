import BookSection from "./book-section/book-section";
import Hero from "./hero/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-va-bg-secondary text-va-text-primary">
      <Hero />
      <BookSection />
    </main>
  );
}
