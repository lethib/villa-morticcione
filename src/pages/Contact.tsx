export default function Contact() {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="bg-blue-300 text-white font-semibold text-xl tracking-widest text-center py-3 w-[70vw] max-w-xl rounded mb-8">
        NOUS CONTACTER
      </div>
      <div className="text-center mb-5">
        <div className="font-semibold text-2xl text-gray-700">
          Dorothée et Hervé
        </div>
        <a
          href="mailto:cavaliedorothee@free.fr"
          className="text-blue-700 underline block"
        >
          cavaliedorothee@free.fr
        </a>
        <div className="text-blue-700">sms ou WhatsApp : +33(0)618776883</div>
      </div>
      <div className="text-orange-600 text-center text-xl font-semibold mb-6">
        Nous avons besoin de quelques informations
        <br />
        concernant votre séjour
      </div>
      <form className="flex flex-row gap-4 w-[70vw] max-w-3xl">
        <div className="flex flex-col gap-2 flex-1">
          <input
            className="border border-gray-400 px-2 py-1 rounded"
            placeholder="Nom"
          />
          <input
            className="border border-gray-400 px-2 py-1 rounded"
            placeholder="E-mail"
          />
          <input
            className="border border-gray-400 px-2 py-1 rounded"
            placeholder="Téléphone"
          />
          <input
            className="border border-gray-400 px-2 py-1 rounded"
            placeholder="Nombre d'adultes"
          />
          <input
            className="border border-gray-400 px-2 py-1 rounded"
            placeholder="Nombre d'enfants"
          />
        </div>
        <textarea
          className="border border-gray-400 px-2 py-1 rounded flex-1 min-h-[120px]"
          placeholder="Rédigez votre message ici..."
        />
      </form>
      <div className="text-gray-400 mt-6 text-center">
        Données utilisées à l'usage exclusif de la prise de contact.
        <br />
        Pas de stockage, pas de revente.
      </div>
    </div>
  );
}
