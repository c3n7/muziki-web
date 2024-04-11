import DrawerLayout from "@/components/layout/drawer-layout";
import { PageContent } from "@/components/layout/page";

export default function Page() {
  return (
    <DrawerLayout>
      <PageContent>
        <div className="flex items-end justify-between mb-4">
          <div className="text-xl font-semibold">Welcome Back</div>
        </div>
      </PageContent>
    </DrawerLayout>
  );
}
