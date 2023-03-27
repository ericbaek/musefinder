// import Active from './Modules/Active';
import Home from './Modules/Home';
// import SearchFind from './Modules/SearchFind';
import Settings from './DesignSystem/Component/In-Content/Settings';

function App() {
  return (
      <div>
        <div className="System"> { /* 시스템 전반 Flex / Column / Padding / Gap */ }

          {/* <SearchFind /> */}
          {/* 차후 Search 관련 function은 전부 위 모듈로 변경예정 */}
          <Home />
          {/* <Active/> */}
          <Settings Icon="" Title="뮤즈파인더 베타"/>
        </div>
      </div>
  );
}

export default App;