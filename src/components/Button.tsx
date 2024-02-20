type Props = {
  onClick?: (e: React.SyntheticEvent) => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
