"use client";

import { useState } from "react";
import { Column, Heading, Text, Button, Input, Textarea, Row } from "@once-ui-system/core";
import { Recommendation } from "@/types";

interface LinkedInRecommendationImporterProps {
  readonly onRecommendationAdded: (recommendation: Recommendation) => void;
}

export function LinkedInRecommendationImporter({ onRecommendationAdded }: LinkedInRecommendationImporterProps) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    date: "",
    linkedinUrl: "",
    avatar: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.content) {
      alert("Please fill in at least the name and recommendation content.");
      return;
    }

    const recommendation: Recommendation = {
      name: formData.name,
      role: formData.role || "Professional",
      company: formData.company || "LinkedIn Connection",
      content: formData.content,
      date: formData.date || new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short"
      }),
      linkedinUrl: formData.linkedinUrl,
      avatar: formData.avatar
    };

    onRecommendationAdded(recommendation);
    
    // Reset form
    setFormData({
      name: "",
      role: "",
      company: "",
      content: "",
      date: "",
      linkedinUrl: "",
      avatar: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Column fillWidth gap="l" padding="l" border="neutral-medium" radius="m" background="surface">
      <Heading variant="heading-strong-m">Add LinkedIn Recommendation</Heading>
      <Text variant="body-default-s" onBackground="neutral-weak">
        Manually add recommendations from your LinkedIn profile. You can copy the information directly from LinkedIn.
      </Text>
      
      <form onSubmit={handleSubmit}>
        <Column gap="m">
          <Row gap="m" fillWidth>
            <Column fillWidth>
              <Text variant="label-default-s" marginBottom="xs">Name *</Text>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Smith"
                required
              />
            </Column>
            <Column fillWidth>
              <Text variant="label-default-s" marginBottom="xs">Role</Text>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                placeholder="Senior Software Engineer"
              />
            </Column>
          </Row>
          
          <Row gap="m" fillWidth>
            <Column fillWidth>
              <Text variant="label-default-s" marginBottom="xs">Company</Text>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Tech Solutions Inc."
              />
            </Column>
            <Column fillWidth>
              <Text variant="label-default-s" marginBottom="xs">Date</Text>
              <Input
                id="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                placeholder="Dec 2024"
              />
            </Column>
          </Row>
          
          <Column fillWidth>
            <Text variant="label-default-s" marginBottom="xs">LinkedIn Profile URL</Text>
            <Input
              id="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
              placeholder="https://linkedin.com/in/johnsmith"
            />
          </Column>
          
          <Column fillWidth>
            <Text variant="label-default-s" marginBottom="xs">Recommendation Content *</Text>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
              placeholder="Avishka is an exceptional software engineer with outstanding problem-solving skills..."
              rows={4}
              required
            />
          </Column>
          
          <Button type="submit" variant="primary" size="m">
            Add Recommendation
          </Button>
        </Column>
      </form>
    </Column>
  );
}
