import { DollarSignIcon } from "lucide-react";
import Header, {
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";
import {
  SummaryCard,
  SummaryCardContent,
  SummaryCardHeader,
  SummaryCardTitle,
  SummaryCardValue,
} from "./_components/summary-card";

export default function Home() {
  return (
    <main className="w-[1188px] space-y-5 p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Dashboard</HeaderSubtitle>
          <HeaderTitle>Painel de controle</HeaderTitle>
        </HeaderLeft>
      </Header>

      <div className="space-y-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          <SummaryCard>
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita</SummaryCardTitle>
              <SummaryCardValue>R$ 999.000.000.000,00</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>

          <SummaryCard>
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita</SummaryCardTitle>
              <SummaryCardValue>R$ 1.000,00</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,2fr))] gap-4">
          <SummaryCard>
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita</SummaryCardTitle>
              <SummaryCardValue>R$ 1.000,00</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>

          <SummaryCard>
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita</SummaryCardTitle>
              <SummaryCardValue>R$ 1.000,00</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>

          <SummaryCard className="max-[1135px]:col-span-2 max-[820px]:col-span-1">
            <SummaryCardHeader>
              <DollarSignIcon />
            </SummaryCardHeader>
            <SummaryCardContent>
              <SummaryCardTitle>Receita</SummaryCardTitle>
              <SummaryCardValue>R$ 1.000,00</SummaryCardValue>
            </SummaryCardContent>
          </SummaryCard>
        </div>
      </div>
    </main>
  );
}
