import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => (
  <ContentLoader
    speed={2}
    width={125}
    height={225}
    viewBox="0 0 125 225"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="-1" rx="0" ry="0" width="125" height="125" />
    <rect x="0" y="135" rx="0" ry="0" width="50" height="10" />
    <rect x="0" y="150" rx="0" ry="0" width="125" height="15" />
    <rect x="0" y="175" rx="0" ry="0" width="125" height="31" />
  </ContentLoader>
);

export default SkeletonLoader;
