--------------------------------FORM BUILDER----------------------

Functional Requirements: - Drag-and-drop form builder interface - Field types: text, email, password, number, textarea, select, radio, checkbox, date, file upload - Custom field validation rules - Conditional fields (show/hide based on other fields) - Nested forms/sections - Field groupings (fieldsets) - Auto-save draft functionality - Form templates - Form preview mode - Multi-step forms (wizard) - Form submissions - File upload with progress - Address autocomplete - Rich text fields - Signature fields - Repeatable fields (dynamic list) - Form version history

Non-Functional Requirements: - Performance (large forms) - Accessibility - Mobile-responsive preview - Custom validation messages - Internationalization - Browser compatibility

Rendering: - Lazy rendering for large forms - Component lazy loading - Optimistic UI for field updates

API Type: - REST API for form save/load - GraphQL for form queries - File upload API

Data Handling: - Local storage for drafts - Auto-save with debounce - Form state persistence - Large file handling (chunked upload)

State Management: - Local state for form values - Server state for form definition - URL state for form ID

Validation: - Built-in validators (required, email, min/max, pattern) - Custom validator functions - Real-time validation feedback - Async validation (server-side check) - Form-level validation

Performance: - Debounced auto-save - Lazy validation - Memoized field components - Virtual scrolling for many fields

Security: - Input sanitization - File type validation - File size limits - CSRF protection - Rate limiting on submissions

Accessibility: - ARIA labels and descriptions - Screen reader support - Keyboard navigation - Focus management - Error announcements

Form Builder Features: - Drag-and-drop field reordering - Field configuration panel - Field property editor - Conditional logic builder - Validation rule builder - Form theme/styling - Export/import form schema - JSON schema generation

Error Handling: - Validation errors display - Network error handling - File upload failures - Session timeout handling
