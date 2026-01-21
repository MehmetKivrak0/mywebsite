import HeroSub from "@/components/SharedComponent/HeroSub";
import NotFound from "../../NotFound";
import { Metadata } from "next";
import Trans from "@/components/i18n/Trans";

export const metadata: Metadata = {
  title: "404 Page | mehmetk",
};

const ErrorPage = () => {
  return (
    <>
      <HeroSub
        title="404"
        description={
          <Trans
            tr="Aradığın sayfayı bulamadık."
            en="We Can't Seem to Find The Page You're Looking For."
          />
        }
        
      />
      <NotFound />
    </>
  );
};

export default ErrorPage;
