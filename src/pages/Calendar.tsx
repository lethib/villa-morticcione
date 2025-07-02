export default function Calendar() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-8 w-[80vw] max-w-6xl">
        {/* Calendrier */}
        <div className="flex-1 mt-2 border-2 border-blue-200 rounded-md p-3 bg-white">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Place calendar images here, but using placeholder tables for demonstration */}
            {/* Replace below with your own SVG/calendar images as needed */}
            <div>
              <table className="border-collapse border text-xs mb-2">
                <caption className="font-semibold mb-1">avr-25</caption>
                <thead>
                  <tr>
                    <th>Lu</th>
                    <th>Ma</th>
                    <th>Me</th>
                    <th>Je</th>
                    <th>Ve</th>
                    <th>Sa</th>
                    <th>Di</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-green-400">1</td>
                    <td className="bg-green-400">2</td>
                    <td className="bg-green-400">3</td>
                    <td className="bg-green-400">4</td>
                    <td className="bg-green-400">5</td>
                    <td className="bg-green-400">6</td>
                    <td className="bg-green-400">7</td>
                  </tr>
                  <tr>
                    <td className="bg-green-400">8</td>
                    <td className="bg-green-400">9</td>
                    <td className="bg-green-400">10</td>
                    <td className="bg-green-400">11</td>
                    <td className="bg-green-400">12</td>
                    <td className="bg-green-400">13</td>
                    <td className="bg-green-400">14</td>
                  </tr>
                  <tr>
                    <td className="bg-green-400">15</td>
                    <td className="bg-green-400">16</td>
                    <td className="bg-green-400">17</td>
                    <td className="bg-green-400">18</td>
                    <td className="bg-green-400">19</td>
                    <td className="bg-green-400">20</td>
                    <td className="bg-green-400">21</td>
                  </tr>
                  <tr>
                    <td className="bg-green-400">22</td>
                    <td className="bg-green-400">23</td>
                    <td className="bg-green-400">24</td>
                    <td className="bg-green-400">25</td>
                    <td className="bg-green-400">26</td>
                    <td className="bg-green-400">27</td>
                    <td className="bg-green-400">28</td>
                  </tr>
                  <tr>
                    <td className="bg-green-400">29</td>
                    <td className="bg-green-400">30</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Duplicate similar tables for mai-25, juin-25, etc. */}
          </div>
        </div>
        {/* Tarifs */}
        <div className="flex flex-col gap-2 mt-2 w-80">
          <div className="bg-green-500 text-white font-semibold rounded-md px-4 py-2 shadow">
            Basse Saison
            <br />
            1200 €/semaine
          </div>
          <div className="bg-yellow-400 text-white font-semibold rounded-md px-4 py-2 shadow">
            Moyenne Saison
            <br />
            1800 €/semaine
          </div>
          <div className="bg-rose-400 text-white font-semibold rounded-md px-4 py-2 shadow">
            Haute Saison
            <br />
            2500 €/semaine
          </div>
          <div className="bg-red-800 text-white font-semibold rounded-md px-4 py-2 shadow">
            Très Haute Saison
            <br />
            3000 €/semaine
          </div>
          <div className="border-2 border-blue-200 bg-white text-gray-700 p-2 rounded-md mt-3 text-sm shadow">
            Un forfait de 200 € par séjour est facturé pour couvrir :
            <ul className="list-disc ml-5">
              <li>Le ménage de fin de séjour</li>
              <li>La taxe de séjour</li>
            </ul>
            La location des draps et des serviettes de toilette est proposée
            pour 20€/personne
          </div>
        </div>
      </div>
    </div>
  );
}
