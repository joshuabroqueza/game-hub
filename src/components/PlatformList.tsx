import usePlatform from "../hooks/usePlatform";

const PlatformList = () => {
  const { platforms } = usePlatform();
  return (
    <ul>
      {platforms.map((platform) => (
        <li key={platform.id}>{platform.name}</li>
      ))}
    </ul>
  );
};

export default PlatformList;
