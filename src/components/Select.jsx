const techs = ["ReactJS", "NextJS", "NodeJS", "TypeScript"];

export default function Select({ value, setProps}) {
  return (
    <select
      name="select"
      value={value}
      onChange={(e) => setProps(e.target.value)}
    >
      <option value="">Selecione uma tecnologia</option>
      {techs.map((tech) => (
        <option key={tech} value={tech}>
          {tech}
        </option>
      ))}
    </select>
  );
}
