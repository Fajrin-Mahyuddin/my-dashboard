import BaseLayout from "components/templates/Layout";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(params, searchParams);
  return (
    <BaseLayout>
      <div className="flex flex-col items-center justify-between bg-[#eaeaea] h-full p-4 rounded-[20px]">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          ratione suscipit nisi non dicta odio temporibus nostrum similique,
          aliquam cum quod quibusdam explicabo ad, consectetur officia aperiam
          eum eos assumenda quae odit quas dolorum doloribus. Quibusdam eligendi
          recusandae, perspiciatis doloremque perferendis fuga dolor! Inventore
          perferendis accusantium ipsam. Consequuntur amet itaque laudantium.
          Nostrum aut necessitatibus, suscipit nisi odit tenetur corporis ipsam
          aliquid omnis, fuga nihil ut quia ea veritatis nam asperiores. Quo
          beatae quia optio sint delectus dolores atque, pariatur tenetur,
          quibusdam repudiandae dignissimos deserunt corrupti eaque? Repellendus
          facere temporibus exercitationem officiis culpa. Ut sunt sit corporis
          qui et maxime exercitationem?
        </p>
      </div>
    </BaseLayout>
  );
}
