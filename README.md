# David Esguerra - Engineering Portfolio

A modern, responsive portfolio showcasing mechanical engineering projects, 3D printing work, automotive repairs, and technical solutions.

## 🚀 Live Demo

Visit the live portfolio: [Your GitHub Pages URL]

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons
- **GitHub Pages** for hosting

## 🎨 Features

- **Professional Engineering Design**: Steel blue/gray color scheme
- **Interactive Project Gallery**: Click any project to view detailed information
- **Video & Image Support**: Full media gallery with navigation
- **Mobile Responsive**: Optimized for all device sizes
- **Smooth Animations**: Professional transitions and hover effects
- **Contact Integration**: Direct links to LinkedIn, Email, and GitHub

## 📱 Project Categories

### CAD Design & 3D Printing
- 3D Printer restoration and calibration
- Custom cane holder design
- OctoPrint remote monitoring setup

### Automotive Projects
- Garage bodywork and painting
- Classic truck restoration
- Electrical system troubleshooting

### Software Solutions
- PDF document organization automation
- Python scripting for data processing

### Other Projects
- RC car customization
- 3D printed accessories

## 🚀 Deployment to GitHub Pages

### Automatic Deployment
This portfolio includes GitHub Actions for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment
```bash
# Build for GitHub Pages
npm run build:gh-pages

# The dist folder contains your built site
# Upload the contents to your GitHub Pages repository
```

### Setup Instructions

1. **Fork/Clone this repository**
2. **Update personal information** in `src/App.tsx`:
   - Name and contact details
   - Project descriptions
   - Image URLs
   - LinkedIn/GitHub profiles

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source

4. **Customize content**:
   - Replace project images with your own
   - Update project descriptions
   - Modify contact information

## 📁 Project Structure

```
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.tsx            # Main React component
│   ├── index.css          # Global styles
│   └── main.tsx           # React entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── README.md             # This file
```

## 🎯 Customization

### Adding New Projects
1. Open `src/App.tsx`
2. Find the `projectCategories` array
3. Add your project to the appropriate category:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  description: 'Brief description...',
  image: 'https://your-image-url.jpg',
  fullDescription: 'Detailed description...',
  gallery: [
    { type: 'image', url: 'image-url', caption: 'Caption' },
    { type: 'video', url: 'video-url', caption: 'Video caption' }
  ],
  technologies: ['Tech1', 'Tech2'],
  challenges: ['Challenge 1', 'Challenge 2'],
  outcomes: ['Outcome 1', 'Outcome 2']
}
```

### Updating Colors
The color scheme uses CSS custom properties defined in `src/index.css`:
```css
:root {
  --engineering-primary: #475569;
  --engineering-secondary: #1e40af;
  --engineering-accent: #64748b;
}
```

## 📞 Contact

- **Email**: davidjulian.es@gmail.com
- **LinkedIn**: [linkedin.com/in/davidesguerra](https://www.linkedin.com/in/davidesguerra)
- **GitHub**: [github.com/davidjem](https://github.com/davidjem)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).