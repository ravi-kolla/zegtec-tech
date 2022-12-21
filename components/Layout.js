import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ navigation, settings, children, footer }) => {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer footer={footer} settings={settings} />
    </div>
  );
};
