# Importing LinkedIn Recommendations

This guide explains how to import your LinkedIn recommendations into your portfolio.

## Method 1: Manual Import (Recommended)

### Step 1: Access Your LinkedIn Recommendations
1. Go to your LinkedIn profile
2. Scroll down to the "Recommendations" section
3. Click "Show all recommendations" to see all your recommendations

### Step 2: Copy Recommendation Data
For each recommendation, copy the following information:
- **Name**: The person's full name who gave the recommendation
- **Role**: Their job title/position
- **Company**: Their current company
- **Content**: The full recommendation text
- **Date**: When the recommendation was given
- **LinkedIn URL**: Their LinkedIn profile URL

### Step 3: Update Your Portfolio
1. Open `src/resources/content.tsx`
2. Find the `recommendations` array
3. Replace the sample data with your real LinkedIn recommendations
4. Update the `recommendations` array with your data:

```typescript
recommendations: [
  {
    name: "Real Person Name",
    role: "Their Job Title",
    company: "Their Company",
    content: "The actual recommendation text from LinkedIn...",
    date: "Dec 2024",
    linkedinUrl: "https://linkedin.com/in/their-profile",
    avatar: "/images/recommendations/their-photo.jpg" // Optional
  },
  // Add more recommendations...
]
```

## Method 2: LinkedIn Data Export (Advanced)

### Step 1: Request LinkedIn Data
1. Go to LinkedIn Settings & Privacy
2. Click "Data Privacy" in the left sidebar
3. Click "Get a copy of your data"
4. Select "Recommendations" from the data types
5. Request your data export

### Step 2: Parse the Export
1. Download the ZIP file from LinkedIn
2. Extract the files
3. Look for the recommendations JSON file
4. Use the provided parsing functions in `src/lib/linkedin.ts`

## Method 3: LinkedIn API (Developer)

### Requirements
- LinkedIn Developer Account
- LinkedIn API Access
- OAuth Implementation

### Implementation
See `src/lib/linkedin.ts` for API integration examples.

## Best Practices

### Content Guidelines
- Use the exact recommendation text from LinkedIn
- Maintain the original tone and style
- Include the recommender's current role and company
- Add their LinkedIn profile URL for verification

### Privacy Considerations
- Only include recommendations you're comfortable sharing publicly
- Consider asking recommenders for permission
- Respect privacy and professional boundaries

### Visual Elements
- Add profile photos if available
- Use consistent date formatting
- Ensure LinkedIn URLs are valid and accessible

## Example Implementation

```typescript
// Real LinkedIn recommendation
{
  name: "Sarah Johnson",
  role: "Senior Product Manager",
  company: "Google",
  content: "Avishka is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. I highly recommend him for any technical role.",
  date: "Nov 2024",
  linkedinUrl: "https://linkedin.com/in/sarah-johnson-google",
  avatar: "/images/recommendations/sarah-johnson.jpg"
}
```

## Troubleshooting

### Common Issues
1. **Invalid LinkedIn URLs**: Ensure URLs are properly formatted
2. **Missing Content**: Double-check that recommendation text is complete
3. **Date Formatting**: Use consistent date format (e.g., "Nov 2024")
4. **Image Paths**: Ensure avatar images exist in the specified paths

### Support
If you need help with the import process, check the documentation or create an issue in the repository.

