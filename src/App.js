import './DesignSystem/Import.js';
import Home from './Modules/Home';
import SearchFind from './Modules/SearchFind';

function App() {
  return (
    <div className="System"> { /* 시스템 전반 Flex / Column / Padding / Gap */ }

      {/* <SearchFind /> */}
      {/* 차후 Search 관련 function은 전부 위 모듈로 변경예정 */}

      <Home/>
    </div>
  );
}

export default App;
