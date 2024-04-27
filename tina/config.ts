import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	'main';

export default defineConfig({
	branch,

	// Get this from tina.io
	// : process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	clientId: 'a4963fcc-5f2b-47e0-9cc3-6883a12416ba',
	// Get this from tina.io
	token: 'fd4f52a0820f99624cb59716d9f7c7dd4a647ac5',

	build: {
		outputFolder: 'admin',
		publicFolder: 'public',
	},
	media: {
		tina: {
			mediaRoot: '',
			publicFolder: 'public',
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'index.html',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true,
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true,
					},
				],
				ui: {
					// This is an DEMO router. You can remove this to fit your site
					router: ({ document }) => `/demo/blog/${document._sys.filename}`,
				},
			},
		],
	},
});
