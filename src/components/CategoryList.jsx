export default function CategoryList({ categs, onChange }) {
  return (
    <>
      <select
        name="categs"
        id="categs"
        defaultValue="defect"
        onChange={onChange}
      >
        <option value="defect"> - Filter by category -</option>
        {categs.map((categ) => (
          <option key={categ.id} value={categ.category}>
            {categ.title}
          </option>
        ))}
      </select>
    </>
  );
}
