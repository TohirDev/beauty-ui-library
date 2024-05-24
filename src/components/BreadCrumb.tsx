import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbDemo({ titles }: { titles: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {titles.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index == titles.length - 1 ? (
              <BreadcrumbPage>{item}</BreadcrumbPage>
            ) : (
              item
            )}
            {index !== titles.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
