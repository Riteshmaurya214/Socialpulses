# SectionSubheading Component

A reusable component for section subheadings with consistent styling across the application.

## Usage

### Basic Usage (Static)

```tsx
import { SectionSubheading } from "@/components/ui/SectionSubheading";

<SectionSubheading text="Who We Are" />;
```

### With Animation

```tsx
import { SectionSubheading } from "@/components/ui/SectionSubheading";

<SectionSubheading text="WHY CHOOSE US" animated />;
```

### With Custom Classes

```tsx
import { SectionSubheading } from "@/components/ui/SectionSubheading";

<SectionSubheading text="Discover service" className="mb-4" />;
```

## Props

| Prop        | Type      | Default  | Description                              |
| ----------- | --------- | -------- | ---------------------------------------- |
| `text`      | `string`  | required | The text to display in the subheading    |
| `animated`  | `boolean` | `false`  | Whether to apply Framer Motion animation |
| `className` | `string`  | `""`     | Additional CSS classes to apply          |

## Styling

The component applies the following base styles:

- Font: Inter
- Color: Indigo-600
- Font Weight: Bold
- Letter Spacing: Widest
- Text Size: xs
- Text Transform: Uppercase

## Examples in the Project

This component is currently used in:

- `about-view.tsx` - "Who We Are"
- `discover-view.tsx` - "Discover service"
- `WhyChooseSection.tsx` - "WHY CHOOSE US" (with animation)
