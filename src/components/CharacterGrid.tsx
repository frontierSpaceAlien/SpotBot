export default function CharacterGrid({
  characters,
}: {
  characters: Array<{ id: string; src: string; name: string }>
}) {
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
    gap: '8px',
    border: '1px solid #363736',
    borderRadius: '8px',
    padding: '8px',
    backgroundColor: '#161616',
    userSelect: 'none' as const,
  }

  return (
    <div style={styles}>
      {characters.map((character) => (
        <div
          key={character.id}
          className="cursor-pointer hover:scale-105 hover:bg-[#303030]"
        >
          <img
            className="border border-[#363736] rounded"
            draggable={false}
            src={character.src}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  )
}
