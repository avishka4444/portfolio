import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Recommendations } from "@/components/recommendations/Recommendations";
import { baseURL, recommendations, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: recommendations.title,
    description: recommendations.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(recommendations.title)}`,
    path: recommendations.path,
  });
}

export default function RecommendationsPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={recommendations.title}
        description={recommendations.description}
        path={recommendations.path}
        image={`/api/og/generate?title=${encodeURIComponent(recommendations.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/recommendations`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {recommendations.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Recommendations recommendations={recommendations.recommendations} />
      </Column>
    </Column>
  );
}

