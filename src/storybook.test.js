import initStoryshots, {
  multiSnapshotWithOptions,
} from "@storybook/addon-storyshots";

initStoryshots({
  suite: "@mono/permissions-check",
  test: multiSnapshotWithOptions({}),
  storyKindRegex: /^((?!.*?App).)*$/,
});
