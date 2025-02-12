export default {
	base: "./",
	build: {
		outDir: "dist",
		assetsDir: "assets",
		rollupOptions: {
			input: {
				main: "./index.html",
			},
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				// assetFileNames: `assets/[name].[ext]`,
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split(".");
					const extType = info[info.length - 1];
					if (
						/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif)$/i.test(
							assetInfo.name
						)
					) {
						return `assets/images/[name][extname]`;
					}
					return `assets/[name][extname]`;
				},
			},
		},
	},
	resolve: {
		extensions: [".js", ".json"],
	},
	server: {
		// port: 3000,
		open: true,
  },
  publicDir: 'public'
};
