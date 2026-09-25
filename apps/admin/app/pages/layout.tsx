import { CmsBoundary } from "../../components/page-builder/CmsBoundary";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CmsBoundary>{children}</CmsBoundary>;
}
