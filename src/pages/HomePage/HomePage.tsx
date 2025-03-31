import {
  ContactForm,
  CorporateIdentity,
  Footer,
  Guideline,
  Header,
  Layout,
  MainScreen,
  Projects,
  SecondaryLayout,
} from "../../components";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <MainScreen />
        <Layout>
          <CorporateIdentity />
        </Layout>
        <SecondaryLayout>
          <ContactForm
            title="Оставьте заявку на разработку вашего продукта"
            subTitle="Наши эксперты свяжутся с вами в ближайшее время"
          />
        </SecondaryLayout>
        <Layout>
          <Projects />
          <Guideline />
        </Layout>
        <SecondaryLayout>
          <Footer />
        </SecondaryLayout>
      </main>
    </div>
  );
};
