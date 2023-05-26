import { DefaultSectionProps } from ".";
import { Container, Section, Box, Heading } from "@components";

export default ({ i18n }: DefaultSectionProps) => (
  <Section id="who-am-i">
    <Container type="inner" class="sm:!flex-row">
      <div class="bg-gray-100 w-full h-fit sm:w-[200px] sm:h-[200px] m-auto aspect-square rounded"></div>
      <Box class="gap-4 text-justify !m-0">
        <Heading type="h2" side="right">
          {i18n.whoAmI.title}
        </Heading>
        {i18n.whoAmI.content}
      </Box>
    </Container>
  </Section>
);
