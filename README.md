---

## Brand & Style

The design system is built to evoke the sensory experience of a high-end specialty coffee house. It targets a discerning audience that values artisanal quality and slow-living rituals. The brand personality is sophisticated yet approachable, blending modern minimalism with a warm, cozy atmosphere.

The visual style utilizes a **Modern Minimalist** approach with subtle **Tactile** undertones. By leveraging generous whitespace (the "Aura"), the UI directs focus toward high-quality photography and intentional typography. The emotional response should be one of calm, comfort, and premium reliability, ensuring the digital experience feels as refined as the product itself.

## Colors

The palette is rooted in the "Dark Roast" theme, utilizing high-contrast natural tones to establish depth.

- **Primary (Espresso):** A deep, near-black brown used for text, iconography, and primary branding elements to provide weight and authority.
- **Secondary (Latte):** A soft, creamy parchment tone used for large background areas and container surfaces to reduce eye strain and enhance the "cozy" aesthetic.
- **Tertiary (Burnt Orange):** A vibrant, high-energy accent reserved strictly for critical actions and highlight moments, ensuring they pop against the earthy base.
- **Neutral (Steam):** Mid-tone grays with warm undertones used for secondary text and decorative borders.

## Typography

This design system employs a high-contrast typographic pairing to balance heritage with modernity.

**Libre Caslon Text** is used for headlines. Its classic, editorial feel emphasizes the artisanal "craft" aspect of the brand. For Display sizes, use tighter tracking to create a more curated, "magazine-style" look.

**DM Sans** is the workhorse for body copy and UI labels. Its geometric clarity and low contrast ensure high readability across digital interfaces. Use the Bold weight for labels and CTAs to provide a clear functional hierarchy against the more decorative serif headlines.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a boutique, controlled editorial feel, transitioning to a fluid model on mobile devices.

- **Desktop:** 12-column grid with a 1280px max-width. Generous 64px side margins create the "Aura" of whitespace that defines the brand.
- **Spacing Rhythm:** Based on an 8px base unit. Use larger increments (48px, 64px, 80px) between sections to allow the design to "breathe."
- **Content Density:** Low. Every element should have significant breathing room to emphasize its importance and the premium nature of the brand.

## Elevation & Depth

To maintain a sophisticated and minimalist appearance, depth is created through **Tonal Layering** and **Ambient Shadows** rather than heavy gradients.

- **Surface Levels:** Use the secondary "Latte" color (#F5E6D3) for the base background. Elevated components (like cards) should use a pure white or a slightly lighter tint of Latte to sit "above" the surface.
- **Shadows:** Use very soft, diffused shadows with a touch of the Primary color in the shadow mix (e.g., `rgba(26, 15, 10, 0.08)`). This ensures the shadows feel warm and integrated rather than cold or synthetic.
- **Interactions:** Subtle lift on hover (slight increase in shadow spread) to provide tactile feedback without breaking the minimalist aesthetic.

## Shapes

The shape language is defined by "Soft Organic" geometry. While the grid is structured and precise, the elements themselves have rounded corners to evoke the smoothness of a well-poured latte.

Standard UI elements like buttons and input fields use a `0.5rem` (8px) radius. Large containers, such as product cards or imagery, should use `rounded-lg` (16px) or `rounded-xl` (24px) to emphasize a friendly, welcoming quality. Avoid sharp 90-degree angles to prevent the UI from feeling too clinical or corporate.

## Components

- **Buttons:** Primary CTAs use the Burnt Orange accent with white or Espresso text. They should have ample horizontal padding (32px+) to feel substantial. Secondary buttons use an Espresso outline.
- **Input Fields:** Soft latte backgrounds with a subtle Espresso border (1px). Focus states should transition the border to Burnt Orange.
- **Cards:** Use for product listings and blog articles. Feature high-quality imagery with a subtle 1px inner stroke to define the edges against the secondary background.
- **Chips/Badges:** Used for flavor profiles (e.g., "Nutty," "Floral"). These should be pill-shaped with low-contrast backgrounds to remain secondary to the main content.
- **Lists:** Clean, spacious lists with Espresso dividers at 10% opacity. Use Libre Caslon Text for list headers to maintain the editorial feel.
- **Navigation:** Minimalist top bar with plenty of height (80px+). Use the primary Espresso color for text links with a Burnt Orange underline effect on hover.
