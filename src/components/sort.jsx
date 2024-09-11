import { useTodo } from "../context/todocontext";

export default function Sort() {
  const { setSortBy } = useTodo();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <select
        onChange={handleSortChange}
        className="p-2 rounded-lg font-bold text-base"
      >
        <option className="font-bold text-base">Select</option>
        <option value="A-B" className="font-bold text-base">
          Alphabetically (A-B)
        </option>
        <option value="Status" className="font-bold text-base">
          By Status
        </option>
      </select>
    </>
  );
}
