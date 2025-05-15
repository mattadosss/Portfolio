'use client';

export default function ImpressumCH() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Impressum</h1>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Angaben gemäss Art. 3 Abs. 1 lit. s UWG</h2>
      <p className="mb-4">
        Max Muster<br />
        Beispielweg 12<br />
        8000 Zürich<br />
        Schweiz
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Kontakt</h2>
      <p className="mb-4">
        Telefon: +41 76 123 45 67<br />
        E-Mail: <a href="mailto:max@example.ch" className="text-blue-600 hover:underline">max@example.ch</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Haftungsausschluss</h2>
      <p className="mb-4">
        Alle Angaben auf dieser Website wurden sorgfältig geprüft. Es wird jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität übernommen. Jegliche Haftung wird ausgeschlossen.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Urheberrecht</h2>
      <p className="mb-4">
        Die Inhalte dieser Website sind urheberrechtlich geschützt. Jede Verwendung oder Weiterverbreitung bedarf der ausdrücklichen Zustimmung des Autors, sofern nicht anders gekennzeichnet.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Stand: Mai 2025
      </p>
    </div>
  );
}
