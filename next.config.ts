import nextra from "nextra";

const withNextra = nextra({
  search: {
    codeblocks: false,
  },
});

export default withNextra({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
});
