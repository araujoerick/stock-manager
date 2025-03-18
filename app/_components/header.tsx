interface HeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <header className="flex w-full justify-between">
      <div className="space-y-2">
        <span className="text-xs font-semibold text-primary">{subtitle}</span>
        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      </div>
      {children}
    </header>
  );
};

export default Header;
