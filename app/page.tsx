import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "./_components/header";

export default function Home() {
  return (
    <main className="w-[1188px] space-y-5 p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Dashboard</HeaderSubtitle>
          <HeaderTitle>Painel de controle</HeaderTitle>
        </HeaderLeft>
      </Header>
    </main>
  );
}
