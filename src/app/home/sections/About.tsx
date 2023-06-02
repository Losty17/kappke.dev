import { Box, Container, Heading, Section } from "@/components";
import { useI18n } from "@/hooks";

export default () => {
  const i18n = useI18n();

  return (
    <Section id="who-am-i">
      <Container type="inner" className="tablet:!flex-row">
        <div className="bg-[url(https://avatars.githubusercontent.com/u/45098519)] bg-cover w-full h-fit tablet:w-[220px] tablet:h-[220px] m-auto aspect-square rounded"></div>
        <Box className="gap-4 text-justify !m-0">
          <Heading type="h2">{i18n.whoAmI.title}</Heading>
          {i18n.whoAmI.content}
        </Box>
      </Container>
    </Section>
  );
};
