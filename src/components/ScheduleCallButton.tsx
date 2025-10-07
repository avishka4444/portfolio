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
      text: "Consultation Call with Avishka Abeywickrama",
      details: `Hi there!

Thank you for visiting my portfolio and showing interest in working together! I'm excited to learn about your project and discuss how I can help bring your ideas to life.

**What we can discuss:**
• Your project requirements and goals
• Technical approach and architecture recommendations
• Timeline and development phases
• Budget and resource planning
• How my expertise can benefit your project
• Any questions you have about my work or experience

**What to expect:**
• 30-60 minute consultation (no charge)
• I'll ask about your project vision and technical needs
• We'll discuss the best approach for your specific requirements
• I'll provide initial insights and recommendations
• We can explore how to move forward if it's a good fit

**Please come prepared with:**
• Brief description of your project
• Any specific technical challenges you're facing
• Your timeline and budget considerations
• Questions about my experience or approach

I'm looking forward to learning about your project and exploring how we can work together to achieve your goals!

Best regards,
Avishka Abeywickrama
Full-Stack Software Engineer
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
