import {
  SettingsProvider,
  // , useSettings
} from "../hooks/utils/useSettings";

const Ipod = () => {
  // const { deviceTheme } = useSettings();
  return (
    <div
      id="Shell"
      className="relative m-auto w-96 h-screen max-h-[36.5em] rounded-3xl shadow-2xl"
    >
      <div
        id="ScreenContainer"
        className="relative m-auto w-96 h-screen rounded-3xl ring-2 shadow-2xl"
      >
        a
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div
      id="Container"
      className="flex justify-center md:items-center h-screen"
    >
      <SettingsProvider>
        <Ipod />
      </SettingsProvider>
    </div>
  );
};

export default Home;
