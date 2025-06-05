'use client';

export default function Impressum() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Impressum</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Angaben gemäß § 5 TMG</h2>
      <p className="mb-4">
        Max Mustermann<br />
        Musterstraße 123<br />
        12345 Musterstadt<br />
        Deutschland
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h2>
      <p className="mb-4">
        Telefon: +49 123 456789<br />
        E-Mail: <a href="mailto:max@example.com" className="text-blue-600 hover:underline">max@example.com</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p className="mb-4">
        Max Mustermann<br />
        Adresse wie oben
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Haftungsausschluss</h2>
      <p className="mb-4">
        Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Urheberrecht</h2>
      <p className="mb-4">
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Stand: Mai 2025
      </p>
    </div>
  );
}
