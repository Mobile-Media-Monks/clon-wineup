# React Native Skeleton

## Git Guidelines

### Branching Strategy

The default branch for development is the `develop` branch. All new features, fixes, and releases should be implemented in their respective branches and merged into `develop` before being released.

When creating new branches, use the following conventions:

#### Branch Prefixes

- **`release/`**: For release branches, which prepare the application for production.
- **`hotfix/`**: For branches that address critical issues in production that need to be resolved immediately.
- **`feature/` or `feat/`**: For new feature development.
- **`fix/`**: For bug fixes and minor improvements.
- **`chore/`**: For tasks that do not affect the application’s functionality (e.g., refactoring, updates to dependencies).
- **`docs/`**: For documentation updates.
- **`test/`**: For adding or modifying tests.

#### Naming Convention

Branches should follow the naming pattern:  
`[{ticketID}]_[short-description]`

- **`[{ticketID}-{number}]`**: A reference to the related task or ticket, where `{ticketID}` stands for the ticket id.
- **`short-description`**: A brief description of the work being done. It should be in **lowercase**, with words separated by hyphens, and be clear enough to convey the purpose of the branch. Ensure it is concise to avoid truncation or ellipsis in the branch name.

#### Example Branch Names

- **Feature branches**:
  - `feat/SP-1540_onboarding-screens`: A feature branch for implementing onboarding screens.
  - `feat/SP-1672_user-profile-edit`: A feature branch for adding user profile editing functionality.
- **Bug fixes**:

  - `fix/SP-1425_payment-crash-fix`: A fix for a crash related to the payment process.
  - `fix/SP-1750_search-bar-ui`: A bug fix for the search bar UI issue.

- **Release branches**:

  - `release/SP-1720_v1.0.0`: A release branch preparing for version 1.0.0.
  - `release/SP-1850_v2.0.0`: A release branch for version 2.0.0.

- **Hotfix branches**:

  - `hotfix/SP-1890_security-patch`: A hotfix for a critical security issue.
  - `hotfix/SP-1930_login-issue`: A hotfix for a login issue affecting production.

- **Chores**:
  - `chore/SP-2000_dependency-update`: A branch to update project dependencies.
  - `chore/SP-2100_code-refactor`: A branch to refactor existing code for better readability.

#### Exceptions to Ticket Requirement

While it is recommended that all tasks be tracked in a related ticket, exceptions can be made in the following cases:

- The **PM visibility** is not required.
- **No QA testing** is needed for the task.
- The **client** does not need to be aware of the change.
- The task can be done **outside of regular sprint tasks**, takes minimal time, and is not part of the planned sprint work.

In these cases, you can proceed without creating a ticket, but it’s important to ensure the work is minimal and does not affect major features or production environments.

## Commit Messages

To maintain a clean and understandable project history, it is important to write concise and meaningful commit messages. This helps in tracking changes and understanding the context of updates quickly.

We follow the **Conventional Commits** specification, which uses standardized prefixes to describe the nature of each commit. The general format for a commit message is:

```
<type>(<scope>): <short description>
```

### Available Commit Types

- **feat**: Introduces a new feature
- **fix**: Bug fix
- **improvement**: Improves an existing feature
- **docs**: Documentation changes
- **style**: Code style changes (e.g., formatting, missing new lines) that do not affect functionality
- **refactor**: Refactoring code that does not change features or fix bugs
- **perf**: Performance improvements
- **test**: Adding or modifying tests
- **build**: Modifies the build system
- **ci**: Changes to CI configuration (e.g., GitHub Actions)
- **chore**: Routine tasks like dependency updates or auxiliary tools
- **revert**: Reverting a previous commit

### Commit Guidelines

- **Prefix with a ticket number** (unless no ticket exists, as per the branching guidelines).
- **Use the imperative, present tense**: "add" instead of "added" or "adding".
- **Keep it concise**: Limit the commit message to a short description of the changes (no need for a period at the end or capitalizing the first letter).
- **Pull Request titles**: Should match the commit message exactly, and the body should only be used to provide additional context if necessary.

### Example Commit Messages

- `chore: update dependencies`
- `feat(auth): add login form`
- `fix(button): correct hover state behavior`

### Commit Script

To use Commitizen we need to install
https://commitizen-tools.github.io/commitizen/

To streamline commit messages and ensure they follow the Conventional Commits format, use the following script when making commits:

```json
"commit": "npx git-cz -e"
```

This script will open an interactive prompt to help you select the correct commit type and fill out the message in the proper format.

## Pull Request Guidelines

To ensure a smooth workflow and maintain code quality, please follow these guidelines when submitting a Pull Request (PR):

1. **Link Issues**  
   Always link the PR to one or more issues by using the appropriate keywords to automatically close them (e.g., `Fixes #123`).

2. **Keep PRs Focused**  
   Submit PRs that are small, focused, and easy to review both functionally and in terms of code. Avoid combining unrelated changes.

3. **Notify Reviewers**  
   Inform the relevant reviewers immediately after creating or updating the PR. Ensure they are aware of the changes.

4. **Address Feedback Promptly**  
   Make requested changes as soon as possible to avoid blocking progress. Communicate if you need more time or clarification.

5. **Limit Extensive Code Migrations**  
   Avoid large-scale code migrations or refactoring without prior approval from both the CTO and the Unit Manager. These changes must be justified and planned carefully.

## What NOT to Do

To maintain consistency and quality in the project, avoid the following actions:

1. **Do NOT create direct commits on the repository's web interface**  
   Always use the proper commit format as described in the guidelines.

2. **Do NOT write URLs directly in the code**  
   Use environment variables or configuration files instead.

3. **Do NOT upload test images**  
   Ensure that test assets are excluded from the repository.

4. **Do NOT leave test data in the code**  
   Clean up test data before committing any changes.

5. **Do NOT create WIP (Work In Progress) commits**  
   Finalize changes before committing them.

6. **Do NOT create WIP (Work In Progress) Pull Requests**  
   Ensure your PRs are ready for review and complete.

7. **Do NOT ignore ESLint rules**  
   Fix all linting errors before submitting your work.

8. **Do NOT push without a proper `.gitignore`**  
   Include appropriate exclusions to avoid unnecessary files in the repository.

9. **Do NOT ignore the `yarn.lock` file**  
   Only modify it with proper approval.

10. **Do NOT make overly complex commits or include too many files**  
    Keep your commits focused and manageable.

11. **Do NOT version files larger than 10MB**  
    Consider alternative solutions for handling large files.

12. **Do NOT use unauthorized technologies**  
    Stick to the stack approved by the project maintainers.

13. **Do NOT install unauthorized dependencies**  
    Always request approval via Slack or the appropriate channel.

14. **Do NOT create branches with unclear names**  
    Use meaningful and descriptive branch names.

15. **Do NOT use unclear variable names**  
    Avoid generic names like `foo1`, `foo2`, `banner1`, `banner2`. Use clear and meaningful variable names.

## Structure

- src
  - assets
    - images
    - svgs
    - fonts 
  - domain
   - enum
   - models
   - transformers
   - types
   - utils
      - arrayUtils.ts
  - infrastructure
    - network
      - endoints
    - services
      - users.ts
  - presentation
    - components
      - MyButton
        - MyButton.tsx (Component view)
        - useMyButton.ts(Hook to handle logic)
        - myButton.style.ts (styles)
        - index.ts (component export)
        
  - screens
  - navigation 
  - themes
      - index.ts
      - typography.ts


## Add Custom Font

#### Step 1: Add Font Files
- Place all TTF font files in the `src/assets/fonts` directory.

#### Step 2: Link Assets
- Run the following command to link the font assets:
    ```bash
    npx react-native-asset
    ```

#### Step 3: Update Typography
- Open the `src/presentation/themes/typography.ts` file and add the new font configuration:

   ```bash
   export const Fonts = {
      Quicksand: {
         regular: 'Quicksand-Regular',
         bold: 'Quicksand-Bold',
         light: 'Quicksand-Light',
         medium: 'Quicksand-Medium',
         semiBold: 'Quicksand-SemiBold',
      },
   };

   text: {
      fontFamily: Fonts.Quicksand.bold,
   },
   ```
#### Step 4: Restart Metro Bundler + Clear Cache (if needed)
   ```bash
   yarn start --reset-cache
   ```

## Security Guidelines

To maintain the security and integrity of the project, please adhere to the following rule:

- **Do NOT include sensitive data or keys in the codebase.**  
  Use environment variables (`.env` files) to store sensitive information such as API keys, secrets, and credentials. Ensure these files are added to `.gitignore` to prevent them from being committed to the repository.

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
yarn android
```

### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

### Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
