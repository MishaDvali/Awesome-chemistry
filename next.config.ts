import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
