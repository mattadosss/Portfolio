'use client';

export default function Datenschutz() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Datenschutzerklärung</h1>

      <p className="mb-4">
        Der Schutz Ihrer persönlichen Daten ist mir sehr wichtig. Nachfolgend informiere ich Sie darüber, welche Daten auf meiner Website erfasst und wie diese verwendet werden – selbstverständlich unter Beachtung der geltenden Datenschutzgesetze, insbesondere der DSGVO.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Verantwortliche Stelle</h2>
      <p className="mb-4">
        Max Mustermann<br />
        Musterstraße 123<br />
        12345 Musterstadt<br />
        E-Mail: max@example.com
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
      <p className="mb-4">
        Beim Besuch dieser Website werden durch den Hosting-Provider automatisch Informationen erfasst, wie z. B.:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp und -version</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer-URL</li>
      </ul>
      <p className="mb-4">
        Diese Daten sind technisch notwendig, um die Website korrekt anzuzeigen und dienen ausschließlich statistischen Zwecken sowie zur Verbesserung der Website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Kontaktaufnahme</h2>
      <p className="mb-4">
        Wenn Sie mir per E-Mail oder über das Kontaktformular schreiben, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Ihre Rechte</h2>
      <p className="mb-4">
        Sie haben das Recht auf:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Auskunft über Ihre gespeicherten Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Datenübertragbarkeit</li>
        <li>Widerspruch gegen die Verarbeitung</li>
      </ul>
      <p className="mb-4">
        Bitte wenden Sie sich hierzu an: <strong>max@example.com</strong>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Änderungen dieser Datenschutzerklärung</h2>
      <p className="mb-4">
        Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen umzusetzen.
      </p>

      <p className="text-sm text-gray-500 mt-8">
        Stand: Mai 2025
      </p>
    </div>
  );
}
