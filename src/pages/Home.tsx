import chambre from "../assets/chambre.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row mt-2 w-[90vw] max-w-6xl">
        <img
          src={chambre}
          alt="Villa Morticcione"
          className="w-[65%] rounded-lg shadow-lg object-cover"
        />
        <div className="flex-1 flex flex-col items-center px-4 space-y-4">
          <img src={chambre} alt="Compass" className="w-16 mt-2" />
          <img src={chambre} alt="Corse" className="w-40" />
          <img
            src={chambre}
            alt="Satellite"
            className="w-36 border-4 border-red-500"
          />
          <img src={chambre} alt="Plage" className="w-36" />
          <img src={chambre} alt="Google Map" className="w-40" />
          <div className="mt-2 p-2 border-2 border-blue-200 bg-white rounded-md text-gray-700 shadow text-sm w-60">
            <b>Villa Morticcione</b>
            <br />
            Lieu dit Morticcione
            <br />
            Route de Pinarello <br />
            20137 Lecci
            <br />
            <span className="text-xs">
              GPS : 41°38'53"N 9°20'40"E
              <br />
              • 15 min Porto Vecchio
              <br />• 30 min Aéroport de Figari
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
