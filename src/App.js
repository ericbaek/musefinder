import Active from './Modules/Active';
import Focus from './Modules/Focus';
import Home from './Modules/Home';
import SearchFind from './Modules/SearchFind';

function App() {
  return (
    <div className="System"> { /* 시스템 전반 Flex / Column / Padding / Gap */ }

      {/* <SearchFind /> */}
      {/* 차후 Search 관련 function은 전부 위 모듈로 변경예정 */}
      <Focus />
    </div>
  );
}

export default App;
