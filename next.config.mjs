export default {
  redirects: async () => [
    {
      source: "/",
      destination: "/upload",
      permanent: true,
    },
  ],
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
    ],
  },
};
