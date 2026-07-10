import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Optional but useful */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph (social sharing) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
};

export default SEO;