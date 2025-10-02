import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { CategorizedCertifications } from "@/components/certifications/CategorizedCertifications";
import { baseURL, certifications, certificationCategories, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: certifications.title,
    description: certifications.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certifications.title)}`,
    path: certifications.path,
  });
}

export default function CertificationsPage() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={certifications.title}
        description={certifications.description}
        path={certifications.path}
        image={`/api/og/generate?title=${encodeURIComponent(certifications.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/certifications`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading variant="heading-strong-xl" marginBottom="l" marginLeft="24">
        {certifications.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <CategorizedCertifications categories={certificationCategories} columns="1" />
      </Column>
    </Column>
  );
}
