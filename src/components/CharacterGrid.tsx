export default function CharacterGrid({
  characters,
}: {
  characters: Array<{ id: string; src: string; name: string }>
}) {
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
    gap: '8px',
    border: '1px solid #afafafff',
    borderRadius: '8px',
    padding: '8px',
    backgroundColor: '#161616',
    userSelect: 'none' as const,
  }

  return (
    <div style={styles}>
      {characters.map((character) => (
        <div key={character.id}>
          <img
            className="border border-gray-400 rounded"
            draggable={false}
            src={character.src}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  )
}
