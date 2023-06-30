# Test setup

This project contains test projects and the full trace logs of the vscode-expo debug sessions.

## Current state

### expo-template-blank

| type       | SDK 48 | SDK 49 |
| ---------- | ------ | ------ |
| Expo Go    | ✅     | ❌     |
| Dev Client | ✅     | ✅     |

> SDK 49 + Expo Go seems to hard crash when invoking `Runtime.callFunctionOn` through CDP.

### expo-template-tabs

| type       | SDK 48 | SDK 49 |
| ---------- | ------ | ------ |
| Expo Go    | ✅     | ❌     |
| Dev Client | ✅     | ✅     |

## CLI

Becuase we had issues using `@expo/cli`, `expo-router` (SSG enabled), and `vscode-expo`, I added a custom CLI version that includes Kudo's fix for accessing the `/json/list` endpoint.

## Logs

The vscode traces are a dump of everything that's going on with `vscode-js-debug`.
We are only interested in the `cdp` messages, that's why I split them up. See `_trace/cdp.json` in each project.
