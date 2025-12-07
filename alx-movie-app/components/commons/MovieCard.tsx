const MovieCard: React.FC = () => {
  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-lg font-bold">Movie Title</h2>
      <p className="text-sm text-gray-600">Movie description goes here.</p>
    </div>
  );
};

export default MovieCard;