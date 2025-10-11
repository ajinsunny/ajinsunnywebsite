# Profile Image Setup

## Required Action

You need to add your profile image to make the hero section complete.

### Steps:

1. **Upload your profile image** to the `/public` folder
2. **Rename it to**: `profile.jpg` (or update the path in the code if you use a different name)
3. **Recommended specs**:
   - Format: JPG, PNG, or WebP
   - Size: 400x400 pixels minimum (square)
   - File size: Under 500KB for optimal performance

### Where to place the image:

```
/Users/ajin/Documents/GitHub/ajinsunnywebsite/public/profile.jpg
```

### If you want to use a different filename:

Update the image source in `/components/HeroSection.tsx` on line 56:

```tsx
<Image
  src="/your-image-name.jpg" // Change this line
  alt="Ajin Sunny Profile"
  fill
  className="object-cover"
  priority
/>
```

### Temporary Solution:

The site will show a broken image icon until you upload your profile picture. You can also use the existing `avatar.webp` as a temporary placeholder by changing line 56 to:

```tsx
src = "/avatar.webp";
```
