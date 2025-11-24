export default function CharacterGrid({
  characters,
}: {
  characters: Array<{ id: string; src: string; name: string }>
}) {
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.src} alt={character.name} />
        </div>
      ))}
    </div>
  )
}
