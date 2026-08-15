import LinkTree from "@/components/LinkTree";

export default async function Page({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const { tab } = await searchParams;
  return <LinkTree initialTab={tab} />;
}
