// src/components/MusicControls.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Music, List, Search, X } from 'lucide-react';
import YouTube from 'react-youtube';

const API_KEY = 'AIzaSyAmNoBRiFlCR19i7SopE-doeqrZjkTUrO8';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

interface Track {
  id: string;
  title: string;
}

const MusicControls: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Track[]>([]);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const playerRef = useRef<any>(null);

  const searchYouTube = async () => {
    const response = await fetch(
      `${YOUTUBE_API_URL}?part=snippet&q=${encodeURIComponent(
        query
      )}&type=video&maxResults=6&key=${API_KEY}`
    );
    const data = await response.json();
    const videos = data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
    }));
    setResults(videos);
  };

  const addToPlaylist = (track: Track) => {
    setPlaylist((prev) => [...prev, track]);
    if (playlist.length === 0) setCurrentTrackIndex(0);
    setResults([]);
    setQuery('');
    setShowSearch(false);
  };

  const playFromPlaylist = (index: number) => {
    setCurrentTrackIndex(index);
  };

  const handleEnd = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchYouTube();
    }
  };

  return (
    <>
      {/* Control Icons */}
      <div className="fixed top-[32%] right-4 z-50 space-y-3 flex flex-col items-end">
        <button
          onClick={() => setShowSearch((prev) => !prev)}
          className="w-10 h-10 rounded-full bg-black/70 backdrop-blur text-white flex items-center justify-center hover:bg-accent-cyan"
          title="Search YouTube"
        >
          <Music size={18} />
        </button>
        <button
          onClick={() => setShowPlaylist((prev) => !prev)}
          className="w-10 h-10 rounded-full bg-black/70 backdrop-blur text-white flex items-center justify-center hover:bg-accent-purple"
          title="Playlist"
        >
          <List size={18} />
        </button>
      </div>

      {/* Search Panel */}
      {showSearch && (
        <div className="fixed top-[32%] right-20 w-96 bg-black/90 backdrop-blur-xl p-4 rounded-lg shadow-lg text-white z-[9999]">
          <div className="flex items-center mb-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search YouTube..."
              className="flex-1 px-3 py-2 rounded bg-zinc-800 text-sm z-[9999]"
            />
            <button onClick={searchYouTube} className="ml-2">
              <Search size={16} />
            </button>
            <button onClick={() => setShowSearch(false)} className="ml-2">
              <X size={16} />
            </button>
          </div>

          {results.length > 0 && (
            <ul className="space-y-1 max-h-64 overflow-y-auto">
              {results.map((track) => (
                <li
                  key={track.id}
                  className="flex justify-between items-center px-3 py-2 rounded hover:bg-zinc-700 cursor-pointer"
                >
                  <span className="text-sm line-clamp-1">{track.title}</span>
                  <button
                    onClick={() => addToPlaylist(track)}
                    className="text-xs px-2 py-1 bg-accent-cyan rounded"
                  >
                    Add
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Playlist Panel */}
      {showPlaylist && (
        <div className="fixed top-[50%] right-20 translate-y-[-50%] w-72 bg-black/85 backdrop-blur-xl p-3 rounded-lg shadow-lg text-white z-[9998]">
          <h4 className="text-sm font-semibold mb-2">Playlist</h4>
          <ul className="space-y-1 max-h-48 overflow-y-auto text-sm">
            {playlist.map((track, i) => (
              <li
                key={track.id}
                className={`truncate px-2 py-1 rounded cursor-pointer ${
                  i === currentTrackIndex ? 'bg-accent-purple/40' : 'hover:bg-zinc-700'
                }`}
                onClick={() => playFromPlaylist(i)}
              >
                {track.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* YouTube Player */}
      {playlist.length > 0 && (
        <div className="fixed bottom-4 right-4 w-72 rounded-xl overflow-hidden shadow-lg z-[9997] bg-black">
          <YouTube
            videoId={playlist[currentTrackIndex].id}
            opts={{
              width: '100%',
              height: '190',
              playerVars: { autoplay: 1 },
            }}
            onEnd={handleEnd}
            ref={playerRef}
          />
        </div>
      )}
    </>
  );
};

export default MusicControls;
