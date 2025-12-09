import { Link } from '@tanstack/react-router'

interface CharacterGridProps {
  characters: Array<{ id: string; src: string; name: string }>
}

export default function CharacterGrid({ characters }: CharacterGridProps) {
  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
    gap: '8px',
    border: '1px solid #363736',
    borderRadius: '8px',
    padding: '8px',
    userSelect: 'none' as const,
  }

  return (
    <div style={styles}>
      {characters.map((character) => (
        <div
          key={character.id}
          className="cursor-pointer hover:scale-105 hover:bg-[#303030]"
        >
          <Link to={'/character/' + character.name}>
            <img
              className="border border-[#363736] rounded"
              draggable={false}
              src={character.src}
              alt={character.name}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
