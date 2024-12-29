export function NameField({
  name,
  setName,
}: {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <input
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
}
