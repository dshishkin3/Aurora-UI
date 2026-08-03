export function Pagination({
  page,
  pages,
  onChange,
}: {
  page: number;
  pages: number;
  onChange: (p: number) => void;
}) {
  return (
    <nav aria-label="Пагинация" className="ui-pagination">
      {Array.from({ length: pages }, (_, i) => (
        <button
          type="button"
          key={i}
          aria-current={page === i + 1 ? "page" : undefined}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </nav>
  );
}
