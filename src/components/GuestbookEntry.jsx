const REACTIONS = [
  { emoji: '👍', label: 'thumbs up' },
  { emoji: '❤️', label: 'heart' },
  { emoji: '🔥', label: 'fire' },
  { emoji: '😂', label: 'laugh' },
  { emoji: '🎉', label: 'party' },
];

function GuestbookEntry({ entry, onReact, onDelete, canDelete }) {
  const timeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div className="guestbook-entry">
      <div className="entry-header">
        <span className="entry-author">{entry.name}</span>
        <span className="entry-time" title={new Date(entry.timestamp).toLocaleString()}>
          {timeAgo(entry.timestamp)}
        </span>
      </div>
      <p className="entry-message">{entry.message}</p>
      <div className="entry-footer">
        <div className="entry-reactions">
          {REACTIONS.map(({ emoji, label }) => {
            const count = entry.reactions[emoji] || 0;
            const reacted = entry.userReactions?.includes(emoji);
            return (
              <button
                key={emoji}
                className={`reaction-btn ${reacted ? 'reacted' : ''}`}
                onClick={() => onReact(entry.id, emoji)}
                aria-label={`React with ${label}, ${count} reactions`}
              >
                <span className="reaction-emoji">{emoji}</span>
                {count > 0 && <span className="reaction-count">{count}</span>}
              </button>
            );
          })}
        </div>
        {canDelete && (
          <button className="delete-btn" onClick={() => onDelete(entry.id)} aria-label="Delete your message">
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default GuestbookEntry;
