# System Patterns: Exara

## Architecture Overview

Exara follows a multi-component architecture typical for modern browser extensions:

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│                 │     │                  │     │                 │
│  Extension UI   │◄────┤  Content Script  │◄────┤ Background Page │
│                 │     │                  │     │                 │
└────────┬────────┘     └────────┬─────────┘     └────────┬────────┘
         │                       │                        │
         │                       │                        │
         ▼                       ▼                        ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│                 │     │                  │     │                 │
│  Webpage DOM    │     │  Storage API     │     │   AI Service    │
│                 │     │                  │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

## Core Components

### 1. Extension UI Layer

- **Popup Component**: User interface when clicking the extension icon
- **Content Overlay**: In-page UI that displays explanations next to highlighted text
- **Settings Panel**: Configuration options for user preferences
- **PDF Viewer Integration**: Custom viewer for PDF document support

### 2. Content Script Layer

- **Text Selection Handler**: Captures user highlighting actions
- **DOM Manipulation**: Injects explanation UI into the current page
- **Context Extraction**: Gathers surrounding text for improved AI context
- **Display Manager**: Controls positioning and rendering of explanations

### 3. Background Service Layer

- **State Management**: Maintains extension state across browser sessions
- **API Communication**: Handles requests to the AI explanation service
- **Authentication**: Manages user identity and subscription status
- **Usage Tracking**: Monitors explanation count for free/paid tier limits

### 4. Landing Page Components

- **Navigation**: Header with responsive mobile menu
- **Content Sections**: Hero, Features, Pricing, etc.
- **Modal Components**: Reusable dialog patterns for user interactions
- **Form Components**: Email collection and validation

## Key Design Patterns

### Observer Pattern

Used to monitor text selection events and trigger explanations:

- Content script observes DOM selection events
- When selection changes, notification triggers explanation request

### Adapter Pattern

Translates between different components:

- Converts webpage text selections to API request format
- Transforms AI responses into user-friendly display format

### Factory Pattern

Creates appropriate UI components based on context:

- Different explanation displays for various website layouts
- Custom UI elements for different browsers

### Singleton Pattern

For managing shared resources:

- Single connection to the AI service
- Unified storage access across extension components

### Command Pattern

For handling user interactions:

- Encapsulates actions like "explain text" or "ask follow-up"
- Allows for clean separation between UI and business logic

### Modal Pattern

For focused user interactions:

- Isolates complex interactions like email collection
- Provides focused context for completing specific tasks
- Implements validation and submission workflows

## Form Validation Patterns

- **Progressive Validation**: Shows errors only after user interaction begins
- **Real-time Feedback**: Validates as user types without disrupting experience
- **Visual Indicators**: Provides clear visual cues for validation state
- **Error Recovery**: Clear guidance on how to fix validation issues

## Data Flow

1. **Highlight Flow**:

   ```
   User highlights text → Content script detects → Background service requests explanation →
   Response displayed in content overlay
   ```

2. **Follow-up Question Flow**:

   ```
   User asks question → Question sent with original context →
   AI generates follow-up response → Updated in content overlay
   ```

3. **Authentication Flow**:

   ```
   User signs in → Credentials verified → Token stored →
   Token used for subsequent API requests
   ```

4. **Alpha Test Registration Flow**:
   ```
   User clicks "Go to PRO" → Alpha test modal opens →
   User submits email → Email validated → Success feedback →
   Backend processes (future) → Activation key sent to user
   ```

## System Boundaries

- **Browser Extension Context**: Limited by browser extension APIs and sandbox
- **Cross-Origin Restrictions**: Must respect browser security policies
- **AI Service Integration**: Dependent on external service availability and response times
- **Storage Limitations**: Works within browser storage constraints
- **Backend Dependencies**: Email collection and key distribution require server implementation
