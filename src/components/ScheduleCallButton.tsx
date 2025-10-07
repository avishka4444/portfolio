"use client";

import { Button } from "@once-ui-system/core";

interface ScheduleCallButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "s" | "m" | "l";
  weight?: "default" | "strong";
  className?: string;
  children?: React.ReactNode;
}

export const ScheduleCallButton = ({
  variant = "primary",
  size = "m",
  weight = "default",
  className,
  children = "Schedule a Call",
}: ScheduleCallButtonProps) => {
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
    <Button
      onClick={handleScheduleCall}
      variant={variant}
      size={size}
      weight={weight}
      className={className}
      prefixIcon="calendar"
    >
      {children}
    </Button>
  );
};
