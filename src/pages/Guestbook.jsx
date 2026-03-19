import { useState, useMemo } from 'react';
import GuestbookEntry from '../components/GuestbookEntry';
import '../styles/guestbook.css';

const MAX_CHARS = 280;

function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [ownIds, setOwnIds] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: Date.now(),
      reactions: {},
      userReactions: [],
    };

    setEntries((prev) => [newEntry, ...prev]);
    setOwnIds((prev) => [...prev, newEntry.id]);
    setName('');
    setMessage('');
  };

  const handleReact = (entryId, emoji) => {
    setEntries((prev) =>
      prev.map((entry) => {
        if (entry.id !== entryId) return entry;

        const alreadyReacted = entry.userReactions?.includes(emoji);
        const newReactions = { ...entry.reactions };
        let newUserReactions = [...(entry.userReactions || [])];

        if (alreadyReacted) {
          newReactions[emoji] = Math.max((newReactions[emoji] || 1) - 1, 0);
          if (newReactions[emoji] === 0) delete newReactions[emoji];
          newUserReactions = newUserReactions.filter((r) => r !== emoji);
        } else {
          newReactions[emoji] = (newReactions[emoji] || 0) + 1;
          newUserReactions.push(emoji);
        }

        return { ...entry, reactions: newReactions, userReactions: newUserReactions };
      })
    );
  };

  const handleDelete = (entryId) => {
    setEntries((prev) => prev.filter((e) => e.id !== entryId));
    setOwnIds((prev) => prev.filter((id) => id !== entryId));
  };

  const totalReactions = (entry) =>
    Object.values(entry.reactions).reduce((sum, n) => sum + n, 0);

  const sortedAndFiltered = useMemo(() => {
    let result = [...entries];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.message.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.timestamp - a.timestamp);
        break;
      case 'oldest':
        result.sort((a, b) => a.timestamp - b.timestamp);
        break;
      case 'reactions':
        result.sort((a, b) => totalReactions(b) - totalReactions(a));
        break;
      default:
        break;
    }

    return result;
  }, [entries, sortBy, searchQuery]);

  const charsLeft = MAX_CHARS - message.length;

  return (
    <section className="guestbook">
      <div className="container">
        <h1 className="page-title">Guestbook</h1>
        <p className="page-subtitle">
          Leave a message, react to others, and say hello!
        </p>

        <form className="guestbook-form" onSubmit={handleSubmit}>
          <h3>Leave a Message</h3>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
              required
              aria-label="Your name"
            />
          </div>
          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, MAX_CHARS))}
            rows={3}
            required
            aria-label="Your message"
          />
          <div className="form-footer">
            <span className={`char-counter ${charsLeft < 30 ? 'warning' : ''}`}>
              {charsLeft} characters remaining
            </span>
            <button
              type="submit"
              className="submit-btn"
              disabled={!name.trim() || !message.trim()}
            >
              Post Message
            </button>
          </div>
        </form>

        <div className="guestbook-controls">
          <input
            type="text"
            className="guestbook-search"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search guestbook messages"
          />
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort messages"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="reactions">Most Reacted</option>
          </select>
          <span className="message-count">
            {entries.length} {entries.length === 1 ? 'message' : 'messages'}
          </span>
        </div>

        <div className="guestbook-feed">
          {sortedAndFiltered.length > 0 ? (
            sortedAndFiltered.map((entry) => (
              <GuestbookEntry
                key={entry.id}
                entry={entry}
                onReact={handleReact}
                onDelete={handleDelete}
                canDelete={ownIds.includes(entry.id)}
              />
            ))
          ) : (
            <p className="guestbook-empty">
              {entries.length === 0
                ? 'No messages yet. Be the first to leave one!'
                : 'No messages match your search.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Guestbook;
