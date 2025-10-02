import { Column, Heading, Row, Text, Tag, Button } from "@once-ui-system/core";
import { Certification } from "@/types";

interface CertificationsProps {
  readonly certifications: Certification[];
  readonly range?: [number, number];
  readonly columns?: "1" | "2" | "3";
  readonly direction?: "row" | "column";
  readonly thumbnail?: boolean;
}

export function Certifications({
  certifications,
  range = [0, certifications.length],
  columns = "2",
  direction = "row",
  thumbnail = false,
}: CertificationsProps) {
  const [start, end] = range;
  const displayedCertifications = certifications.slice(start - 1, end);

  return (
    <Column
      fillWidth
      gap="l"
      direction={direction}
            style={{
              display: "grid",
              gridTemplateColumns: columns === "1"
                ? "1fr"
                : `repeat(auto-fit, minmax(300px, 1fr))`,
              gap: "var(--static-space-l)",
            }}
    >
      {displayedCertifications.map((certification, index) => (
        <Column
          key={`${certification.name}-${index}`}
          fillWidth
          gap="m"
          padding="l"
        >
          <Column fillWidth gap="s">
            <Heading variant="heading-strong-m">
              {certification.name}
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {certification.issuer}
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-medium">
              {certification.date}
            </Text>
          </Column>
          
          {certification.description && (
            <Text variant="body-default-s">
              {certification.description}
            </Text>
          )}
          
          <Row fillWidth gap="s" wrap>
            {certification.credentialId && (
              <Tag size="s" variant="secondary">
                Credential ID: {certification.credentialId}
              </Tag>
            )}
            {certification.verificationUrl && (
              <Button
                href={certification.verificationUrl}
                variant="secondary"
                size="s"
                weight="default"
                arrowIcon
              >
                Verify Credential
              </Button>
            )}
          </Row>
        </Column>
      ))}
    </Column>
  );
}
