import Navbar from '../components/Navbar';
import ResourceList from '../components/ResourceList';

function Resources() {
  return (
    <div style={{ backgroundColor: '#fbcfe8', minHeight: '100vh' }}>
      <Navbar />
      <ResourceList />
    </div>
  );
}

export default Resources;