import './DesignSystem/Import.js';
import Home from './Modules/Home';

function App() {

  /* Card */
  /* Right Accent 미사용 시 { NoAccent } 처리 */
  var NoAccent = { display : 'none' }
  /* 저장한 장소 및 근처 오락실까지의 거리를 기준으로 한 배경색 */
  var BGLocationNear = { background : 'hsl(213, 100%, 56%)', color : 'white' } /* < 5km */
  var BGLocationMedium = { background : 'hsl(39, 85%, 53%)', color : 'white' } /* < 10km */
  var BGLocationFar = { background : 'hsl(0, 79%, 56%)', color : 'white' } /* > 10km */

  return (
    <div className="System"> { /* 시스템 전반 Flex / Column / Padding / Gap */ }

      {/* <SearchFind /> */}
      {/* 차후 Search 관련 function은 전부 위 모듈로 변경예정 */}

      <Home/>
    </div>
  );
}

export default App;
