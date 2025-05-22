import s from "./App.module.scss";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog.jsx"));
const CatalogID = lazy(() => import("../pages/CatalogID/CatalogID.jsx"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<CatalogID />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
