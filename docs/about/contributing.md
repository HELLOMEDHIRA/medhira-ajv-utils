# Contributing

Contributions are welcome! Please follow these guidelines.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/medhira-ajv-utils.git`
3. Create a feature branch: `git checkout -b feature/my-feature`

## Development Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run typecheck
npm run build

# Run lint
npm run lint
```

## Pull Request Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation for any changes
- Keep PRs focused and atomic
- Use conventional commit messages

## Commit Message Format

We follow the conventional commits specification:

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Code refactoring
- `test`: Tests
- `chore`: Maintenance

### Example

```
feat(format): add new india-VIN format validation

- Added vehicle identification number format
- Added tests for the new format

Closes #123
```

## Adding New Formats

To add a new format:

1. Create format file in `src/utils/formats/`
2. Add format implementation
3. Export in `src/utils/formats/index.ts`
4. Add tests

## Adding New Keywords

To add a new keyword:

1. Create keyword file in `src/utils/keywords/`
2. Add keyword implementation
3. Export in `src/utils/keywords/index.ts`
4. Add tests

## Code of Conduct

Be respectful and inclusive. We welcome contributors from all backgrounds.

## Getting Help

- Open an issue for bugs or feature requests
- Reach out to the team: hello.medhira@gmail.com

Thank you for contributing to MEDHIRA!