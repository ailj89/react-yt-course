export const Planet = (props) => {
  const planets = [
    { name: "Mars", isGas: false },
    { name: "Earth", isGas: false },
    { name: "Jupiter", isGas: true },
    { name: "Venus", isGas: false },
    { name: "Neptune", isGas: true },
    { name: "Uranus", isGas: true },
  ];

  return (
    <div>
      <ul>
        {planets.map(
          (planet) =>
            planet.isGas && (
              <li key={planet.name}>
                <h1>{planet.name}</h1>
              </li>
            )
        )}
      </ul>
      {/* Displays only gas planets */}
    </div>
  );
};
