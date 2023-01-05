interface ColorProps {
  color: string;
}

const Color = ({ color }: ColorProps) => {
  return (
    <span
      key={color}
      className={`inline-block h-4 w-4 rounded-sm border`}
      style={{ backgroundColor: color }}
    />
  );
};

export default Color;
