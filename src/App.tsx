import Layout from './components/Layout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Layout>
      <Sidebar />
      <section className='text-red-400 text-lg'>MAIN</section>
    </Layout>
  );
}

export default App;
