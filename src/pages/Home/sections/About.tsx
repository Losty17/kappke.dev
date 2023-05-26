import { DefaultSectionProps } from ".";

export default ({ i18n }: DefaultSectionProps) => (
  <section id="who-am-i" class="bg-gray-900 text-gray-100 py-16">
    <div class="flex gap-6 justify-center w-1/2 m-auto">
      <div class="bg-gray-100 w-[200px] h-[200px] aspect-square rounded"></div>
      <div class="flex flex-col gap-4 text-justify">
        <span class="text-3xl font-semibold uppercase text-right">
          {i18n.whoAmI.title}
        </span>
        {i18n.whoAmI.content}
      </div>
    </div>
  </section>
);
