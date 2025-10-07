"use client";

import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const generateGoogleCalendarLink = () => {
    // Get current time and add 1 hour for default end time
    const now = new Date();
    const endTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour later
    
    // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    // Pre-fill the calendar event with template details
    const eventDetails = {
      text: "Meeting with Avishka Abeywickrama",
      details: `Hi there!

I'd love to schedule a meeting to discuss:

• Potential collaboration opportunities
• Your software engineering needs
• Technical consulting services
• Project requirements and timelines

Please let me know your preferred time and any specific topics you'd like to cover.

Looking forward to connecting!

Best regards,
Avishka Abeywickrama
Software Engineer
Email: avishkaabeywickrama99@gmail.com
LinkedIn: https://www.linkedin.com/in/avishka-abeywickrama`,
      location: "Video Call (Google Meet/Zoom)",
      dates: {
        start: formatDate(now),
        end: formatDate(endTime)
      }
    };

    // Create Google Calendar URL with pre-filled event
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates.start}/${eventDetails.dates.end}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}`;

    return googleCalendarUrl;
  };

  const handleScheduleCall = () => {
    const calendarUrl = generateGoogleCalendarLink();
    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Row gap="16" vertical="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="tertiary"
                />
              ),
          )}
          <IconButton
            onClick={handleScheduleCall}
            icon="calendar"
            tooltip="Schedule a Call"
            size="s"
            variant="ghost"
          />
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
