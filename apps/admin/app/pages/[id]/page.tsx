import { Builder } from "../../../components/page-builder/Builder";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <Builder id={id} />;
}
