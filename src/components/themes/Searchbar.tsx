interface SearchbarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbar = ({ value, onChange }: SearchbarProps) => {
  return (
    <input
      className='h-11 w-full rounded-lg bg-black/5 px-5 focus:bg-transparent dark:bg-white/10'
      placeholder='Enter the theme name'
      type='text'
      value={value}
      onChange={onChange}
    />
  );
};

export default Searchbar;
