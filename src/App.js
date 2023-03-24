import './DesignSystem/Import.js';
import ContentTitle from './DesignSystem/Component/In-Content/ContentTitle';
import Near from './Modules/Near';

function App() {
  return (
    <div>
      <ContentTitle Title="제목" Menu="메뉴"></ContentTitle>
      <Near/>
    </div>
  );
}

export default App;
