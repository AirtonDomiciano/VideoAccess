<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Figma-approved design fidelity

When a Figma design or approved visual reference exists, follow it exactly. Do not invent new layouts, sections, content, copy, components, colors, spacing, typography, imagery, interactions, or visual treatments.

Before implementing or changing UI, inspect the current implementation and the approved Figma/reference. Reuse the existing design system, tokens, components, assets, and structure wherever they already match the design.

Responsive fixes must preserve the approved visual design. Adapt layout fluidly for different viewport sizes, but do not reinterpret the design or create new visual concepts unless the user explicitly requests them.

If the Figma/reference is unavailable, ambiguous, or incomplete, ask for clarification before creating missing UI or making design decisions.

When Desktop and Mobile frames exist in Figma, both must be analyzed before implementation or refactoring. An implementation is not considered complete until both versions are faithful to Figma.

Components with complex layout or responsiveness should prefer CSS/SCSS Modules instead of long Tailwind class sequences in JSX. Keep TSX focused on structure and behavior; move layout, grid, breakpoints, backgrounds, object positioning, spacing, pseudo-elements, and desktop/mobile-specific rules into `*.module.css` or `*.module.scss` files.
