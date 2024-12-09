import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
	sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
	/* TODO to stop silencing warnings https://github.com/sass/dart-sass/issues/2352 */
  experimental: {
    turbo: {
      rules: {
        "*.scss": {
          loaders: ["sass-loader"],
          as: "*.css",
        },
      },
    }
	}
}




export default nextConfig;
