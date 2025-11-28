# 🧪 Accessibility Task


## Accessibility Issues Found

### Missing lang attribute on html tag

- Screen readers need the language to interpret text correctly.

### Form Inputs Lack Labels

- Inputs only have placeholder text, which is not a substitute for labels.

Screen readers won’t know what each field represents.

### No alt Text for Image

- The img tag has no alt attribute, so visually impaired users won’t know what the image represents.

Fix: Add alt="Robot image" for example


### Button Type and Function

- The button uses type="button" and relies on onclick="submitForm()", which is not accessible if JavaScript fails.

Fix: Use type="submit" and handle form submission progressively.

### Color Contrast and Visual Indicators

- Not visible in the snippet, but if the design uses low contrast or relies on color alone for meaning, that’s an issue.

Fix: Ensure WCAG AA contrast ratio and provide non-color indicators.

### Heading Structure

- h2 is used, but there’s no h1 on the page. Proper heading hierarchy is important for screen readers.

Fix: Add a main heading h1 for the page title.

### No ARIA Roles or Landmarks

- Adding roles like role="form" or using semantic elements like <main> helps assistive tech.

Fix: Wrap main content in <main> and consider ARIA roles where needed.

### Keyboard Navigation

- Can tab through the full name, email, and message fields, but no visible focus styles.

- Cannot tab to 'done' button. Or enter/click it via keyboard.

Fix: Ensure all interactive elements are keyboard accessible with visible focus styles.