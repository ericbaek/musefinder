import './DesignSystem/Import.js';
import Near from './Modules/Near';
import SearchFind from './Modules/SearchFind'

import Sort from './Sort';
import Alert from './DesignSystem/Component/In-Content/Alert';
import ContentTitle from './DesignSystem/Component/In-Content/ContentTitle';
import Card from './DesignSystem/Component/In-Content/Card';
import Search from './DesignSystem/Component/In-Content/Search';
import FilterSet from './DesignSystem/Component/In-Content/FilterSet';

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

      <div className="DesktopSearch"> { /* 데스크톱 환경에서의 검색창 + 메인 액티비티 */ }
        <div className="SearchTop">
          <Search Icon="" Placeholder="검색" Sort=""/>
          <div className="DesktopSearch-FilterSet">
            <FilterSet Title="IIDX"/>
            <FilterSet Title="SDVX"/>
            <FilterSet Title="유비트"/>
            <FilterSet Title="팝픈뮤직"/>
          </div>
        </div>
        <div className="MainActivity MainActivity-DesktopSearch"> { /* 메인 액티비티 */ }
          <div className="Group">
            <ContentTitle Title="저장한 장소" Paragraph="관리"/>
            <div className="Row Gap-8">
              <Card Title="펀시티 건대점" Paragraph="1.4km" AccentText="" Accent={ NoAccent }/>
              <Card Title="노원 노리존" Paragraph="4.8km" AccentText="" Accent={ NoAccent }/>
            </div>
          </div>
          <div className="Group"> { /* 그룹 내 Flex / Column / Gap */ }
            <ContentTitle Title="근처 오락실" Paragraph=""/>
            <div className="Column Group-Card">
              {/* <Card Title="영등포 G2존" Paragraph="위치" AccentText="3.2km" Accent={ BGLocationNear }/>
              <hr></hr>
              <Card Title="목동 G스타디움" Paragraph="위치" AccentText="6.3km" Accent={ BGLocationMedium }/>
              <hr></hr>
              <Card Title="홍대 짱오락실" Paragraph="위치" AccentText="12km" Accent={ BGLocationFar }/> */}
              <Near />
            </div>
          </div>
        </div>
      </div>
      <Sort/>
    </div>
  );
}

export default App;
