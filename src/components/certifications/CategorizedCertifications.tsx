"use client";

import { Column, Heading, Row, Text, Tag, Button, RevealFx } from "@once-ui-system/core";
import { Certification } from "@/types";

interface CertificationCategory {
  title: string;
  certifications: Certification[];
}

interface CategorizedCertificationsProps {
  readonly categories: CertificationCategory[];
  readonly columns?: "1" | "2" | "3";
}

export function CategorizedCertifications({
  categories,
  columns = "1",
}: CategorizedCertificationsProps) {
  return (
    <Column fillWidth gap="xl">
      {categories.map((category, categoryIndex) => (
        <RevealFx 
          key={category.title} 
          translateY="20" 
          delay={categoryIndex * 0.2}
        >
          <Column fillWidth gap="l" marginBottom="xl" paddingTop="l">
            <Heading 
              as="h2" 
              variant="display-strong-s" 
              marginBottom="m"
              style={{
                borderBottom: "2px solid var(--brand-alpha-medium)",
                paddingBottom: "var(--static-space-s)",
              }}
            >
              {category.title}
            </Heading>
            
            {/* Timeline Container */}
            <Column fillWidth gap="l" style={{ position: "relative", paddingLeft: "8px" }}>
              {/* Timeline Line */}
              <div
                style={{
                  position: "absolute",
                  left: "31px", // Centered on the dot (24px + 8px padding + 7px to center on 16px dot)
                  top: "8px", // Start after first dot
                  bottom: "8px", // End before last dot
                  width: "2px",
                  background: "var(--brand-alpha-medium)",
                  borderRadius: "1px",
                  zIndex: 1,
                }}
              />
              
              {category.certifications.map((certification, index) => (
                <RevealFx
                  key={`${certification.name}-${index}`}
                  translateY="16"
                  delay={categoryIndex * 0.2 + index * 0.1}
                >
                  <Row gap="l" fillWidth style={{ position: "relative" }}>
                    {/* Timeline Dot */}
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "var(--brand-alpha-medium)",
                        border: "3px solid var(--neutral-alpha-weak)",
                        flexShrink: 0,
                        marginTop: "6px",
                        boxShadow: "0 0 0 2px var(--brand-alpha-weak)",
                        zIndex: 2,
                        position: "relative",
                      }}
                    />
                    
                    {/* Content */}
                    <Column fillWidth gap="m" padding="l" style={{ marginLeft: "8px" }}>
                      {/* Title and Date */}
                      <Row fillWidth horizontal="between" vertical="start">
                        <Column gap="xs">
                          <Heading variant="heading-strong-m">
                            {certification.name}
                          </Heading>
                          <Row gap="s" vertical="center">
                            <Text variant="body-default-s" onBackground="neutral-weak">
                              {certification.issuer}
                            </Text>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                              •
                            </Text>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                              {certification.date}
                            </Text>
                          </Row>
                        </Column>
                      </Row>

                      {/* Short Description */}
                      {certification.description && typeof certification.description === 'string' && (
                        <Text variant="body-default-s" style={{ lineHeight: "1.5", color: "var(--neutral-medium)" }}>
                          {certification.description.split("Skills:")[0].trim()}
                        </Text>
                      )}

                      {/* Skills Tags */}
                      {certification.description && typeof certification.description === 'string' && (
                        <Row gap="s" wrap>
                          {certification.description.split("Skills: ")[1]?.split(" · ").map((skill, skillIndex) => (
                            <Tag
                              key={`${certification.name}-skill-${skillIndex}`}
                              size="s"
                              variant="secondary"
                              style={{
                                background: "var(--neutral-alpha-medium)",
                                color: "var(--neutral-strong)",
                                border: "none",
                                borderRadius: "16px",
                                padding: "4px 12px",
                              }}
                            >
                              {skill.trim()}
                            </Tag>
                          ))}
                        </Row>
                      )}

                      {/* Action Buttons */}
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
                  </Row>
                </RevealFx>
              ))}
            </Column>
          </Column>
        </RevealFx>
      ))}
    </Column>
  );
}