import chambre from "../assets/chambre.jpg";

export default function Villa() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-7 mt-4 mb-6 w-[85vw] max-w-6xl">
        {/* Chambres */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
          <img
            src={chambre}
            alt="Chambres"
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold text-orange-600 mb-2">
            Chambres & Sanitaires
          </h3>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>
              La villa dispose de 3 chambres, chacune avec sa salle d&apos;eau.
            </li>
            <li>
              Deux chambres sont équipées d&apos;un lit double de 140cm et la
              troisième d&apos;un lit double 140cm et d&apos;un lit simple 90
              cm.
            </li>
            <li>
              Un canapé banquette dans le salon permet un couchage
              supplémentaire.
            </li>
            <li>
              Un lit parapluie est mis à disposition pour les plus petits.
            </li>
            <li>
              La salle de bain de la suite parentale est équipée d&apos;une
              baignoire et d&apos;un WC.
            </li>
          </ul>
        </div>
        {/* Cuisine */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
          <img
            src={chambre}
            alt="Cuisine"
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold text-orange-600 mb-2">
            Cuisine & Salon
          </h3>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>
              La cuisine s&apos;ouvre sur la terrasse qui surplombe la piscine.
              Elle dispose de tous les équipements nécessaires : Lave-vaisselle,
              four, four micro-ondes, cafetière Nespresso, bouilloire,
              grille-pain.
            </li>
            <li>Un lave linge est également installé dans la cuisine.</li>
            <li>
              Un bar central, séparant la cuisine du salon / salle-à-manger,
              permet de s&apos;installer pour un repas informel, pour cuisiner
              ou faire diner les enfants.
            </li>
          </ul>
        </div>
        {/* Exterieur */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
          <img
            src={chambre}
            alt="Extérieur"
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold text-orange-600 mb-2">
            Extérieur
          </h3>
          <ul className="text-gray-700 text-sm list-disc list-inside">
            <li>
              Une grande table (12 places) avec parasol permet de
              s&apos;installer pour déjeuner dehors en profitant de la vue sur
              la piscine.
            </li>
            <li>
              La piscine 7mx4m est entourée de caillebotis en teck. Le système
              d&apos;adoucisseur au sel préservera votre peau. Elle est clôturée
              pour éviter que les plus jeunes puissent accéder à la piscine sans
              surveillance.
            </li>
            <li>
              Des transats et un salon de jardin sont installés pour se relaxer.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-7 w-[85vw] max-w-6xl mb-6">
        <img
          src={chambre}
          alt="Maison"
          className="flex-1 h-56 object-cover rounded-lg shadow-lg"
        />
        <iframe
          width="853"
          height="480"
          className="flex-1 h-56 rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/RubCdxgDI8s`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}
