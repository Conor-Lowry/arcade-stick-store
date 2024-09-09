const TAILWIND_CONFIG = "tailwind.config.js";

export default function TailwindConfigAsSingletonPlugin() {
  let resolvedConfig = null;

  return {
    name: "tailwind-config-as-singleton",
    resolveId(source) {
      if (source.endsWith(TAILWIND_CONFIG)) {
        return source;
      }

      return null;
    },
    async load(id) {
      if (id.endsWith(TAILWIND_CONFIG)) {
        resolvedConfig =
          resolvedConfig ||
          (await (async function () {
            const { default: config } = await import("./tailwind.config.js");
            const { default: resolveConfig } = await import(
              "tailwindcss/resolveConfig"
            );
            return resolveConfig(config);
          })());
        return `export default ${JSON.stringify(resolvedConfig)};`;
      }

      return null;
    },
  };
}
