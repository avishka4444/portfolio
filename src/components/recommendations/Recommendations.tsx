"use client";

import { Column, Heading, Row, Text, Button, Avatar, RevealFx } from "@once-ui-system/core";
import { Recommendation } from "@/types";

interface RecommendationsProps {
  readonly recommendations: Recommendation[];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <Column fillWidth gap="xl">
      {recommendations.map((recommendation, index) => (
        <RevealFx
          key={`${recommendation.name}-${index}`}
          translateY="20"
          delay={index * 0.1}
        >
          <Column
            fillWidth
            gap="m"
            padding="l"
            border="neutral-medium"
            radius="m"
            background="surface"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Row fillWidth horizontal="between" vertical="start" marginBottom="m">
              <Row gap="m" vertical="center">
                {recommendation.avatar && (
                  <Avatar
                    src={recommendation.avatar}
                    size="m"
                  />
                )}
                <Column gap="xs">
                  <Heading variant="heading-strong-m">
                    {recommendation.name}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {recommendation.role}{recommendation.company ? ` at ${recommendation.company}` : ''}
                  </Text>
                </Column>
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {recommendation.date}
              </Text>
            </Row>
            
            <Text variant="body-default-m" style={{ lineHeight: "1.6" }}>
              "{recommendation.content}"
            </Text>

            {recommendation.linkedinUrl && (
              <Row fillWidth horizontal="end" marginTop="m">
                <Button
                  href={recommendation.linkedinUrl}
                  variant="secondary"
                  size="s"
                  weight="default"
                  arrowIcon
                >
                  View on LinkedIn
                </Button>
              </Row>
            )}
          </Column>
        </RevealFx>
      ))}
    </Column>
  );
}
